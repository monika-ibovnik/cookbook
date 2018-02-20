export default function(state = {recipeSteps: []}, action){
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
    return state;
}
