import React from 'react';
//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showModal} from './actions/modalActions';
import ListElement from './ListElement';
import './RecipeList.css';
class RecipeList extends React.Component{
    constructor(props){
        super(props);
        this.addRecipe = this.addRecipe.bind(this);
    }
    addRecipe(){
        this.props.showModal('RecipeEditor');
    }
    render(){
        if(!this.props.recipeList.length){
            return(
                <div className="recipe-list-button">
                    <div><button onClick={this.addRecipe}>Add recipes to start!</button></div>
                </div>
            );
        }else{
            let recipeList = this.props.recipeList;
            recipeList = recipeList.map((value, index)=>{
                return (
                    <ListElement key={index} image={value.image} name={value.title} onClick={()=>console.log('click')}/>
                );
            });
            return(
                <div className="recipe-list">
                    {recipeList}
                </div>
            );
        }
    }
}

function mapStateToProps(state){
    return{
        recipeList: state.recipe.recipeList
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
export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
