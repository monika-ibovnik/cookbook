export default function(state = {}, action){
    if(action.type == 'GET_ALL_PRODUCTS'){
        return Object.assign({}, state, action.payload);
    }
    return state;
}
