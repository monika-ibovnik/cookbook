import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {removeItem} from './actions/recipeActions';

import './RecipeProductList.css';

class RecipeProductListElement extends React.Component{
    constructor(props){
        super(props);
        this.removeItself = this.removeItself.bind(this);
    }
    removeItself(){
        this.props.onClick(this.props.index);
    }
    render(){
        return(
            <div>
                <p>{this.props.value}</p><button onClick={this.removeItself}>-</button>
                </div>
        );
    }
}

class RecipeProductList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let productArr = this.props.recipeProductList;
        productArr = productArr.map((value,index)=>{
            return(
                <RecipeProductListElement key={index} value={value.name} index={index} onClick={this.props.removeItem}/>
            );
        });
        return(
            <div className="recipe-product-list">
                {productArr}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        recipeProductList : state.recipe.recipeProducts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            removeItem
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeProductList);
