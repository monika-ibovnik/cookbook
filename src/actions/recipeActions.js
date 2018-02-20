import axios from '../axios';
export function addToStepsArray(value){
    return({
        type: 'ADD_STEP',
        payload: value
    });
}
