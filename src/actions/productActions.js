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
