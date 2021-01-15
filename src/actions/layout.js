import liquidVaultAbi from './abis/LiquidVaultAbi';
import RocketAbi from './abis/RocketAbi';
import { getWeb3 } from "../utils";

const UniswapPairAddress = '0x0da97804d98143d9fb33742Ab17bfa38e60c9751'
const LiquidVaultAddress = '0x920E371f7BDd653b9fA25e91E9CC07A63e94908F'
const RocketTokenAddress = '0x2b831f9d6128280f45Ad0f4174470D265EE83b7E'
const FeeDistributorAddress = '0xC006cB9003845a56e6c77a25886f86651D5c1F08'

export const purchaseLP = (value) => {
    return async dispatch => {
        const web3 = await getWeb3();
        const ethAddress = await web3.eth.getAccounts();
        const LiquidContract = await new web3.eth.Contract(liquidVaultAbi, LiquidVaultAddress);
        const RocketContract = await new web3.eth.Contract(RocketAbi, RocketTokenAddress);
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
    return async dispatch => {;
        const HCORE = '0xe6f6E7e3F5771d6B078474697a47f876a05b9426';
        const FEE_DISTRIBUTOR = '0x3BE435C19FE14082c043A003561551abf64e4530';
        const web3 = await getWeb3();
        const ethAddress = await web3.eth.getAccounts();
        const LiquidContract = await new web3.eth.Contract(liquidVaultAbi, LiquidVaultAddress);

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
            // lpBurn = await LiquidContract.methods.lockPercentageUINT().call();
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
            await dispatch({ type: "GET_LIQUID", payload: { lockedLP: +tokens + +notReadyTokens, lockPeriod, lpBurn, lpBoost } });

        } catch (error) {
            console.log(error)
        }
    }
}