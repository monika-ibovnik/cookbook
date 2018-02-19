import axios from '../axios';
export function addResizedImgPrev(imgBase64){
    return({
        type: 'ADD_RESIZED_IMAGE',
        payload: {resizedImage: imgBase64}
    });
}
export function setResizedImageToNull(){
    return({
        type: 'SET_RESIZED_IMAGE_TO_NULL',
        payload:{
            resizedImage: null
        }
    });
}
export function getAllProducts(){
    return axios.get('/product/getall').then(response=>{
        console.log(response);
        return({
            type: 'GET_ALL_PRODUCTS',
            payload: {
                productList: response.data
            }
        });
    });
}
