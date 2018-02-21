export default function(state = {}, action){
    if(action.type == 'GET_ALL_PRODUCTS'){
        return Object.assign({}, state, action.payload);
    }
    if(action.type == 'SEARCH_FOR_PRODUCT'){
        let searchedProduct = action.payload.productName.toLowerCase();
        let searchArray = [];
        state.productList.map((value, index) =>{
            let productName = value.name.toLowerCase();
            let check = productName.indexOf(searchedProduct,0);
            if(check!=-1){
                searchArray.push({
                    value: value,
                    index: index,
                    check: check});
                return;
            }
        });
        var result = {value:null};
        if(searchArray.length != 0){
            searchArray.map(value=>{
                if(value.check == 0){
                    result = value;
                }
            });
        }
        return(Object.assign({}, state,{
            exactSearchResult: result.value,
            searchArray: searchArray
        }));
    }
    return state;
}
