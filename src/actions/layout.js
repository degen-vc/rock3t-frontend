import liquidVaultAbi from './abis/LiquidVaultAbi';
import RocketAbi from './abis/RocketAbi';
import { getWeb3 } from "../utils";

const UniswapPairAddress = '0x87efe187ec402a758bd39945c820a87d932fdc3e'
const LiquidVaultAddress = '0xBce31C8FF148Dbfc589d6070AD59530D65AE1065'
const RocketTokenAddress = '0x363eB5aFbEF8f96A958172c38Dcf6b1cefEe2e1a'
const FeeDistributorAddress = '0xA10f12AE671759FcC23E815379c55a3C4459fF0f'

export const purchaseLP = (value) => {
    return async dispatch => {
        const web3 = await getWeb3();
        const ethAddress = await web3.eth.getAccounts();
        console.log(111, ethAddress)
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

            let { stakeDuration } = await LiquidContract.methods.config().call();

            const length = await LiquidContract.methods.lockedLPLength(ethAddress[0]).call();
            let lockPeriod = await LiquidContract.methods.getLockedPeriod().call();
            let lpBurn = await LiquidContract.methods.getLPBurnPercentage().call()
            lpBurn = +lpBurn
            lockPeriod = lockPeriod / 24 / 60 / 60
            console.log(123, lockPeriod)
            console.log(123, lpBurn)
            if (length === '0') {

            } else {
                let data = await LiquidContract.methods.getLockedLP(ethAddress[0], length - 1).call();
                console.log(data)
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
            console.log(+tokens + +notReadyTokens)
            await dispatch({ type: "GET_LIQUID", payload: { lockedLP: +tokens + +notReadyTokens, lockPeriod, lpBurn } });

        } catch (error) {
            console.log(error)
        }
    }
}