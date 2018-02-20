import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initRecipe} from './actions/recipeActions';

import RecipeProductSearchInput from './RecipeProductSearchInput';
import RecipeStepInput from './RecipeStepInput';
import RecipeStepList from './RecipeStepList';

class RecipeEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recipeName: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="recipeName" value={this.state.recipeName} onChange={this.handleChange} autoFocus/>
                    <div className="recipe-steps">
                        <RecipeStepList list={this.props.recipeSteps}/>
                    </div>
                    <input type="submit" value="Save the recipe"/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        recipeSteps : state.recipe.recipeSteps,
        autofocus : state.recipe.autofocus
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {},
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditor);
