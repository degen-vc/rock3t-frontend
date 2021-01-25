import liquidVaultAbi from './abis/LiquidVaultAbi';
import { getWeb3 } from "../utils";

const LiquidVaultAddress = '0xe339Aa6d1Ad36016F525e007Ee5e0b133Ee7a2dB'

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
        let lpBurn = 0;
        try {
            lpBurn = await LiquidContract.methods.lockPercentageUINT().call();
            lpBurn = +lpBurn
        } catch (error) {
            console.log('get burn error')
        }
        try {
            let tokens = 0;
            let notReadyTokens = 0;

            let lpBoost = 0;
            let feeBalance = 0;
            let lockPeriod = 0;
            let { stakeDuration } = await LiquidContract.methods.config().call();

            const length = await LiquidContract.methods.lockedLPLength(ethAddress[0]).call();
            lockPeriod = await LiquidContract.methods.getLockedPeriod().call();

            // lpBoost = await LiquidContract.methods.feeUINT().call();
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