import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showModal} from './actions/modalActions';

import ListElement from './ListElement'

import './ProductList.css';

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.addProduct = this.addProduct.bind(this);
    }
    addProduct(){
        this.props.showModal('ProductEditor');
    }
    render(){
        if(!this.props.productList.length){
            return(
                <div className="product-list-button">
                    <div><button onClick={this.addProduct}>Add products to start!</button></div>
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
        {
            showModal
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
