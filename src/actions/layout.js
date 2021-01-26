import liquidVaultAbi from './abis/LiquidVaultAbi';
import RocketAbi from './abis/RocketAbi';
import UniswapOracleAbi from './abis/UniswapOracleAbi';
import { getWeb3 } from "../utils";
import { number } from 'prop-types';

const RocketToken = '0xE1F8caA30d887C91acF99D8A5E9a216c94417769'
const LiquidVaultAddress = '0xdac0E4900A4a1d7d675F32D9AaFa6848F5F787b5';
const FeeDistributor = '0x40eaB35bfeae8fCB9300797f2B875bbdC60DF56F';
const UniswapOracle = '0x46495fc00024c2018110CB5bB79E8F2B2dC4128a'
export const purchaseLP = (value) => {
    return async dispatch => {
        const web3 = await getWeb3();
        const ethAddress = await web3.eth.getAccounts();
        const LiquidContract = await new web3.eth.Contract(liquidVaultAbi, LiquidVaultAddress);
        try {
            await LiquidContract.methods.purchaseLP().send({ from: ethAddress[0], value: web3.utils.toWei(`${value}`) });
        } catch (error) {
            console.log(error)
        }
    }
}
export const claim = () => {
    return async dispatch => {
        const web3 = await getWeb3();
        const ethAddress = await web3.eth.getAccounts();
        const LiquidContract = await new web3.eth.Contract(liquidVaultAbi, LiquidVaultAddress);


        try {
            await LiquidContract.methods.claimLP().send({ from: ethAddress[0] })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getLockedLP = () => {
    return async dispatch => {
        const web3 = await getWeb3();
        const ethAddress = await web3.eth.getAccounts();
        const LiquidContract = await new web3.eth.Contract(liquidVaultAbi, LiquidVaultAddress);
        const RocketContract = await new web3.eth.Contract(RocketAbi, RocketToken);
        const UniswapOracleContract = await new web3.eth.Contract(UniswapOracleAbi, UniswapOracle);
        const rocketBalanceLiquid = await RocketContract.methods.balanceOf(LiquidVaultAddress).call();
        const rocketBalanceFee = await RocketContract.methods.balanceOf(FeeDistributor).call();
        let consult = +(+web3.utils.fromWei(await UniswapOracleContract.methods.consult().call() + '')).toFixed(4);
        const sumBalances = +web3.utils.fromWei(web3.utils.toBN(rocketBalanceLiquid).add(web3.utils.toBN(rocketBalanceFee)) + '');
        const maxFuel = (sumBalances * consult).toFixed(2);
        try {
            let tokens = 0;
            let notReadyTokens = 0;

            let feeBalance = 0;
            let lpBurn = 0;
            let lockPeriod = 0;
            let lpBoost = 0;
            let { stakeDuration } = await LiquidContract.methods.config().call();

            const length = await LiquidContract.methods.lockedLPLength(ethAddress[0]).call();
            lockPeriod = await LiquidContract.methods.getLockedPeriod().call();
            lpBurn = await LiquidContract.methods.lockPercentageUINT().call();
            lpBoost = await LiquidContract.methods.feeUINT().call();
            lpBurn = +lpBurn
            lockPeriod = Math.round(lockPeriod / 24 / 60 / 60)
            if (length !== '0') {
                let data = await LiquidContract.methods.getLockedLP(ethAddress[0], length - 1).call();
                tokens = data[1];
                let count = 0;

                if (stakeDuration < (new Date().getTime() / 1000) - data[2]) {
                    count++;
                } else {
                    tokens = 0
                }
                tokens = +web3.utils.fromWei(tokens + '')
                tokens = parseFloat(tokens).toFixed(2);
                for (let i = 0; i < length - count; i++) {
                    const lockedLP = await LiquidContract.methods.getLockedLP(ethAddress[0], i).call();
                    notReadyTokens = web3.utils.toBN(notReadyTokens).add(web3.utils.toBN(lockedLP[1]))
                }
                notReadyTokens = notReadyTokens !== 0 ? +web3.utils.fromWei(notReadyTokens + '') : 0;
                notReadyTokens = parseFloat(notReadyTokens.toFixed(2));
            }
            stakeDuration = stakeDuration / 60 / 60 / 24
            await dispatch({ type: "GET_LIQUID", payload: { lockedLP: +tokens + +notReadyTokens, lockPeriod, lpBurn, lpBoost, maxFuel } });

        } catch (error) {
            console.log(error)
        }
    }
}