import axios from '../axios';
export function addResizedImgPrev(imgBase64){
    return({
        type: 'ADD_RESIZED_IMAGE',
        payload: {resizedImage: imgBase64}
    });
}
