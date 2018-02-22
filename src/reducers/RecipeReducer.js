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
        let addedProductId = action.payload.id;
        let check = null;
        state.recipeProducts.map((value,index)=>{
            if(value.id == addedProductId){
                check=index;
            }
        });
        if(check === null){
            return Object.assign({}, state, {
                recipeProducts : state.recipeProducts.concat(action.payload),
            });
        }else{
            return Object.assign({},state, {alreadyAdded: check});
        }
    }
    if(action.type=='REMOVE_ITEM'){
        let index = action.payload;
        let newProductArr = [...state.recipeProducts.slice(0,index), ...state.recipeProducts.slice(index+1)];
        return Object.assign({}, state, {recipeProducts: newProductArr});
    }
    if(action.type == 'RESET_ADDED'){
        return Object.assign({}, state, action.payload);
    }
    return state;
}
