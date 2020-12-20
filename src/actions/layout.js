import liquidVaultAbi from './abis/LiquidVaultAbi';
import HcoreAbi from './abis/HcoreAbi';
import { getWeb3 } from "../utils";

export const purchaseLP = (value) => {
    return async dispatch => {
        const LIQUID_VAULT = '0xC7d5E6f15F963A7479176dD29ccd8E52e2526ea3'
        const HCORE = '0xe6f6E7e3F5771d6B078474697a47f876a05b9426';
        const web3 = await getWeb3();
        const ethAddress = await web3.eth.getAccounts();
        const LiquidContract = await new web3.eth.Contract(liquidVaultAbi, LIQUID_VAULT);
        const HcoreContract = await new web3.eth.Contract(HcoreAbi, HCORE);
        try {
            const { hardCoreRequired } = await LiquidContract.methods.calculateHardcoreRequired(web3.utils.toWei(value + '')).call()
            let balance = await HcoreContract.methods.balanceOf(LIQUID_VAULT).call();
            if (+balance >= +web3.utils.fromWei(hardCoreRequired)) {
                await LiquidContract.methods.purchaseLP().send({ from: ethAddress[0], value: web3.utils.toWei(`${value}`) });
            } else {
                alert(`Not enough HardCore, need ${+web3.utils.fromWei(hardCoreRequired)}, there is ${balance ? balance : 0}`)
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const claim = () => {
    return async dispatch => {
        const LIQUID_VAULT = '0xC7d5E6f15F963A7479176dD29ccd8E52e2526ea3'
        const web3 = await getWeb3();
        const ethAddress = await web3.eth.getAccounts();
        const LiquidContract = await new web3.eth.Contract(liquidVaultAbi, LIQUID_VAULT);


        try {
            await LiquidContract.methods.claimLP().send({ from: ethAddress[0] })
        } catch (error) {
            console.log(error)
        }
    }
}