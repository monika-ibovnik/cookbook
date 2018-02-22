import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
    removeItem,
    resetAdded
    } from './actions/recipeActions';

import './RecipeProductList.css';

class RecipeProductListElement extends React.Component{
    constructor(props){
        super(props);
        this.removeItself = this.removeItself.bind(this);
    }
    removeItself(e){
        e.preventDefault();
        this.props.onClick(this.props.index);
    }
    render(){
        return(
            <div className="ingridients">
                <div><p className={this.props.addedClass}>{this.props.value}</p></div>
                <div><button onClick={this.removeItself}>-</button></div>
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
            if(this.props.alreadyAdded == index){
                return(
                    <RecipeProductListElement addedClass="added" key={index} value={value.name} index={index} onClick={this.props.removeItem}/>
                );
            }else{
                return(
                    <RecipeProductListElement key={index} value={value.name} index={index} onClick={this.props.removeItem}/>
                );
            }
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
        recipeProductList : state.recipe.recipeProducts,
        alreadyAdded: state.recipe.alreadyAdded
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
