import axios from '../axios';

export function getAllProducts(){
    return axios.get('/product/getall').then(response=>{
        return({
            type: 'GET_ALL_PRODUCTS',
            payload: {
                productList: response.data
            }
        });
    });
}

export function searchForProduct(value){
    return({
        type: 'SEARCH_FOR_PRODUCT',
        payload:{
            productName: value
        }
    });
}

export function resetSearchList(){
    return({
        type: 'RESET_SEARCH_LIST',
        payload: {
            searchArray: [],
            exactSearchResult: ''
        }
    });
}

export function addProductToTheList(value){
    console.log('action!');
    return({
        type: 'ADD_PRODUCT',
        payload: value
    });
}
