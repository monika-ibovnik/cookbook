import axios from '../axios';
export function initRecipe(){
    return({
        type: 'INIT_RECIPE',
        payload: {
            recipeSteps: []
        }
    });
}
export function addToStepsArray(value){
    console.log(value);
    return({
        type: 'ADD_STEP',
        payload: value
    });
}
