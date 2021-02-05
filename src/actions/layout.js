import liquidVaultAbi from './abis/LiquidVaultAbi';
import RocketAbi from './abis/RocketAbi';
import UniswapOracleAbi from './abis/UniswapOracleAbi';

import { getWeb3 } from "../utils";


const RocketToken = process.env.REACT_APP_ROCKET_ADDRESS;
const LiquidVaultAddress = process.env.REACT_APP_LIQUID_ADDRESS;
const FeeDistributor = process.env.REACT_APP_FEE_DISTRIBUTOR_ADDRESS;
const UniswapOracle = process.env.REACT_APP_UNISWAP_ADDRESS;

export const purchaseLP = (value) => {
    return async dispatch => {
        const web3 = await getWeb3();
        const ethAddress = await web3.eth.getAccounts();
        const LiquidContract = await new web3.eth.Contract(liquidVaultAbi, LiquidVaultAddress);
        const RocketContract = await new web3.eth.Contract(RocketAbi, RocketToken);

        const UniswapOracleContract = await new web3.eth.Contract(UniswapOracleAbi, UniswapOracle);
        const rocketBalanceLiquid = await RocketContract.methods.balanceOf(LiquidVaultAddress).call();
        const rocketBalanceFee = await RocketContract.methods.balanceOf(FeeDistributor).call();

        let consult = +(+web3.utils.fromWei(await UniswapOracleContract.methods.consult().call() + ''));


        const sumBalances = +web3.utils.fromWei(web3.utils.toBN(rocketBalanceLiquid).add(web3.utils.toBN(rocketBalanceFee)) + '');
        const maxFuel = (sumBalances * consult)

        if (value > maxFuel) {
            alert("You can't send more than MAX FUEL");
            return
        }
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

        let consult = +(+web3.utils.fromWei(await UniswapOracleContract.methods.consult().call() + ''));

        const sumBalances = +web3.utils.fromWei(web3.utils.toBN(rocketBalanceLiquid).add(web3.utils.toBN(rocketBalanceFee)) + '');

        const maxFuel = (sumBalances * consult).toFixed(2);

        let { stakeDuration } = await LiquidContract.methods.config().call();

        try {
            let tokens = 0;
            let notReadyTokens = 0;

            let lpBurn = 0;
            let lockPeriod = 0;
            let lpBoost = 0;

            const length = await LiquidContract.methods.lockedLPLength(ethAddress[0]).call();

            lockPeriod = await LiquidContract.methods.getLockedPeriod().call();

            lpBurn = await LiquidContract.methods.lockPercentageUINT().call();

            lpBoost = await LiquidContract.methods.feeUINT().call();

            lpBoost = lpBoost / 10
            lpBurn = lpBurn / 10
            lockPeriod = (lockPeriod / 24 / 60 / 60).toFixed(0)
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