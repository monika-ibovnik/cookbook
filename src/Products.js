import React from 'react';
//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showModal,
        getAllProducts} from './actions/productActions.js';

import ProductEditor from './ProductEditor';
import ProductList from './ProductList';

import './Products.css';

class Products extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getAllProducts().then(result=>{
            console.log('getallproducts', result);
        });
    }
    render(){
        return(
            <div>
                <h2>Products</h2>
                <label>Search for a product: <input type="text" name="searchProduct" /></label>
                <button onClick={this.props.showModal}>Add new product</button>
                <ProductList />
                {this.props.showAddModal &&
                    <ProductEditor />
                }
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        productList : state.product.productList,
        showAddModal : state.product.showModal
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            showModal,
            getAllProducts
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
