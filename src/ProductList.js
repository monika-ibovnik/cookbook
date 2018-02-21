import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ListElement from './ListElement'

class ProductList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(!this.props.productList){
            return(
                <div className="product-list">
                    <p>Add products to start.</p>
                </div>
            );
        }else{
            let productList = this.props.productList;
            productList = productList.map((value, index)=>{
                return (
                    <ListElement key={index} image={value.image} name={value.name} onClick={()=>console.log('click')}/>
                );
            });
            return(
                <div className="product-list">
                    {productList}
                </div>
            );
        }
    }
}

function mapStateToProps(state){
    return{
        productList: state.product.productList
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {},
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
