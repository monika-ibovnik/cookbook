export default function(state = {
    recipeSteps: [],
    recipeProducts: []
}, action){
    if(action.type == 'ADD_STEP'){
        return Object.assign({}, state, {recipeSteps : state.recipeSteps.concat(action.payload)});
    }
    if(action.type == 'UPDATE_STEP'){
        return Object.assign({}, state, {recipeSteps: state.recipeSteps.map((value,index)=>{
            if(index == action.payload.index){
                return action.payload.value;
            }
            return value;
        })});
    }
    if(action.type=='SET_FOCUS'){
        return Object.assign({}, state, action.payload);
    }
    if(action.type == 'GET_ALL_RECIPES'){
        return Object.assign({}, state, action.payload);
    }
    if(action.type == 'ADD_PRODUCT_TO_RECIPE'){
        return Object.assign({}, state, {
            recipeProducts : state.recipeProducts.concat(action.payload),
        });
    }
    return state;
}
