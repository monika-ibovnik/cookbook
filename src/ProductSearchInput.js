import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    searchForProduct,
    resetSearchList,
    } from './actions/productActions';

import './ProductSearchInput.css';

class ProductSearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
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
                        <input className="read-only-input" type="text" name="resultsInput" value={this.props.exactSearchResult.name} readOnly/>
                    }
                    <input  className="input" type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleChange} autoComplete="off"/>
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
            resetSearchList
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductSearchInput);
