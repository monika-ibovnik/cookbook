import axios from '../axios';
export function addToStepsArray(value){
    return({
        type: 'ADD_STEP',
        payload: value
    });
}
export function updateStepsArray(value,index){
    return({
        type: 'UPDATE_STEP',
        payload: {
            index: index,
            value: value
        }
    });
}
export function initFocus(){
    return({
        type: 'SET_FOCUS',
        payload: {
            autofocus: true
        }
    });
}

export function getAllRecipes(){
    return axios.get('/recipe/getall').then(response=>{
        return({
            type: 'GET_ALL_RECIPES',
            payload: {
                recipeList: response.data
            }
        });
    });
}

export function addProductToRecipe(value){
    return({
        type: 'ADD_PRODUCT_TO_RECIPE',
        payload: value
    });
}

export function removeItem(index){
    return({
        type: 'REMOVE_ITEM',
        payload: index
    });
}
