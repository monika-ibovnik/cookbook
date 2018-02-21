import React from 'react';
//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllRecipes} from './actions/recipeActions';
import ListElement from './ListElement';
class RecipeList extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getAllRecipes();
    }
    render(){
        if(!this.props.recipeList){
            return(
                <div className="recipe-list">
                    <p>Add recipes to start.</p>
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
            getAllRecipes
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
