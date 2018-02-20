import axios from '../axios';
export function addToStepsArray(value){
    return({
        type: 'ADD_STEP',
        payload: value
    });
}
export function updateStepsArray(value,index){
    return({
        type: 'UPDATE_STEP',
        payload: {
            index: index,
            value: value
        }
    });
}
