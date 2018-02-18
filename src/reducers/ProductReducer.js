export default function(state = {}, action){
    if(action.type=="ADD_RESIZED_IMAGE"){
        return Object.assign({}, state, action.payload);
    }
    return state;
}
