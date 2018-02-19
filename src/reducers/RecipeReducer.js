export default function(state = {}, action){
    if(action.type == 'INIT_RECIPE'){
        return Object.assign({}, state, action.payload);
    }
    if(action.type == 'ADD_STEP'){
        let newArr = state.recipeSteps.concat(action.payload);
        return Object.assign({}, state, state.recipeSteps = newArr);
    }
    return state;
}
