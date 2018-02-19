import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import ProductReducer from './ProductReducer';
import ModalReducer from './ModalReducer'

const reducer = combineReducers({
    user: UserReducer,
    product: ProductReducer,
    modal: ModalReducer
});

export default reducer;
