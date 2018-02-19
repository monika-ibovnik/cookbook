export default function(state = {recipeSteps: []}, action){
    if(action.type == 'ADD_STEP'){
        return Object.assign({}, state, {recipeSteps : state.recipeSteps.concat(action.payload)});
    }
    return state;
}
