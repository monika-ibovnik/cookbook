export default function(state = {}, action){
    if(action.type=="GET_USER_INFO"){
        return Object.assign({}, state, action.payload);
    }
    return state;
}
