import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import PictureReducer from './PictureReducer';
import ProductReducer from './ProductReducer';
import ModalReducer from './ModalReducer';
import RecipeReducer from './RecipeReducer';

const reducer = combineReducers({
    user: UserReducer,
    product: ProductReducer,
    modal: ModalReducer,
    recipe: RecipeReducer,
    picture: PictureReducer
});

export default reducer;
