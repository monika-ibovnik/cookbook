import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './ProductList.css';

function ProductListElement(props){
    return(
        <div className="product-element">
            <div>
            <p>{props.name}</p>
            </div>
            <div>
                <img src={props.image ? props.image : '/img/foodbasket.svg'} />
            </div>
        </div>
    );
}

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
                    <ProductListElement key={index} image={value.image} name={value.name} onClick={()=>console.log('click')}/>
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
