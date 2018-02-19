export default function(state = {}, action){
    if(action.type == 'ADD_RESIZED_IMAGE'){
        return Object.assign({}, state, action.payload);
    }
    if(action.type == 'GET_ALL_PRODUCTS'){
        return Object.assign({}, state, action.payload);
    }
    if(action.type == 'SET_RESIZED_IMAGE_TO_NULL'){
        return Object.assign({}, state, action.payload);
    }
    return state;
}
