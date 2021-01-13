import { combineReducers } from 'redux';
import { auth } from './auth';
import { balance } from './balances'

const rootReducer = combineReducers({
    auth,
    balance
});

export default rootReducer;