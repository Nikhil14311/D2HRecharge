import { createStore, combineReducers } from 'redux';
import { userReducer } from './reducer/UserReducer';
import { paymentReducer } from '../containers/MainPage/MainPage';
import { confirmReducer } from './reducer/confirmReducer';
import { commonReducer } from './reducer/CommonReducer';

const rootReducer = combineReducers({ 
    //payments : paymentReducer,
    // transactionHistory : confirmReducer,
    commonReducer : commonReducer
});
const Store = () => {
    return createStore(rootReducer);
}
export default Store;