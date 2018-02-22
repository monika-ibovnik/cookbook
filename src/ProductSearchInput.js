import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    searchForProduct,
    resetSearchList
    } from './actions/productActions';

import{
    addProductToRecipe
} from './actions/recipeActions';

import './ProductSearchInput.css';

class ProductSearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }
    addProduct(e){
        e.preventDefault(e);
        if(this.props.exactSearchResult){
            this.props.addProductToRecipe(this.props.exactSearchResult);
            this.props.resetSearchList();
            this.setState({
                inputValue: ''
            });
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value.toLowerCase()
        }, ()=>{
            if(this.state.inputValue != ''){
                this.props.searchForProduct(this.state.inputValue);
            }else{
                this.props.resetSearchList();
            }
        });
    }
    render(){
        return(
            <div className="input-container">
                <div className="product-search-inputs">
                    {!this.props.exactSearchResult &&
                        <input className="read-only-input" type="text" name="resultsInput" value="" readOnly />
                    }
                    {this.props.exactSearchResult &&
                        <input className="read-only-input" type="text" name="resultsInput" value={this.props.exactSearchResult.name.toLowerCase()} readOnly/>
                    }
                    <input  className="input" type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleChange} autoComplete="off"/>
                    {this.props.error &&
                        <p>Error</p>
                    }
                    <button onClick={this.addProduct}>+</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        productList: state.product.productList,
        exactSearchResult: state.product.exactSearchResult
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            searchForProduct,
            resetSearchList,
            addProductToRecipe
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductSearchInput);
