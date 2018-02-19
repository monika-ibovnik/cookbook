import axios from '../axios';
export function addToStepsArray(value){
    console.log(value);
    return({
        type: 'ADD_STEP',
        payload: value
    });
}
