import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchForProduct} from './actions/productActions';
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
            }
        });
    }
    render(){
        return(
            <div>
                <input type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleChange}/>
                {this.props.exactSearchResult &&
                    <input type="text" name="resultsInput" value={this.props.exactSearchResult.name} readOnly/>
                }
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
            searchForProduct
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductSearchInput);
