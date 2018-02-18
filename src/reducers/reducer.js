import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import ProductReducer from './ProductReducer';

const reducer = combineReducers({
    user: UserReducer,
    product: ProductReducer
});

export default reducer;
