import axios from '../axios';
export function addResizedImgPrev(imgBase64){
    return({
        type: 'ADD_RESIZED_IMAGE',
        payload: {resizedImage: imgBase64}
    });
}

export function showModal(){
    return({
        type: 'SHOW_MODAL',
        payload: {
            showModal: true
        }
    });
}
export function hideModal(){
    return({
        type: 'HIDE_MODAL',
        payload: {
            showModal: false,
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
