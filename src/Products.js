import React from 'react';
//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {showModal, hideModal} from './actions/modalActions.js';

import ProductList from './ProductList';
import Menu from './Menu';

import './Products.css';
import './PageWithList.css';

class Products extends React.Component{
    constructor(props){
        super(props);
        this.addProduct = this.addProduct.bind(this);
    }
    addProduct(){
        this.props.showModal('ProductEditor');
    }
    render(){
        return(
            <div className="products page-with-list">
                <div className="menu">
                    <label><button onClick={this.addProduct}>+</button>Add new product</label>
                    <Menu/>
                </div>
                <div className="list">
                    <h2>Products</h2>
                    {this.props.productList &&
                        <ProductList />
                    }
                </div>
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
            showModal,
            hideModal
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
