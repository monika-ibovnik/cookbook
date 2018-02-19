export default function(state = {}, action){
    if(action.type == 'ADD_RESIZED_IMAGE'){
        return Object.assign({}, state, action.payload);
    }
    if(action.type == 'SHOW_MODAL'){
        return Object.assign({}, state, action.payload);
    }
    if(action.type == 'HIDE_MODAL'){
        return Object.assign({}, state, action.payload);
    }
    if(action.type == 'GET_ALL_PRODUCTS'){
        return Object.assign({}, state, action.payload);
    }
    return state;
}
