import React from 'react';
//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getAllProducts} from './actions/productActions.js';
import {showModal, hideModal} from './actions/modalActions.js';

import ProductList from './ProductList';

import './Products.css';

class Products extends React.Component{
    constructor(props){
        super(props);
        this.addProduct = this.addProduct.bind(this);
    }
    componentDidMount(){
        this.props.getAllProducts();
    }
    addProduct(){
        this.props.showModal('ProductEditor');
    }
    render(){
        return(
            <div>
                <h2>Products</h2>
                <label>Search for a product: <input type="text" name="searchProduct" /></label>
                <button onClick={this.addProduct}>Add new product</button>
                <ProductList />
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        productList : state.product.productList,
        modal : state.modal.modal
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            getAllProducts,
            showModal,
            hideModal
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
