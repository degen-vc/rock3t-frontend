import { AUTHORIZATION } from '../constants';
import { getWeb3 } from "../utils";

export const getAuth = () => {
    return async dispatch => {
        const web3 = await getWeb3();
        const ethAddress = await web3.eth.getAccounts();
        dispatch({ type: AUTHORIZATION, payload: ethAddress[0] });
    }
}