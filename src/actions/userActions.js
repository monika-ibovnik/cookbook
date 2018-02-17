import axios from '../axios';

export function getUserInfo(){
    return axios.get('/user').then(response=>{
        return({
            type: 'GET_USER_INFO',
            payload: response.data
        });
    });
}
