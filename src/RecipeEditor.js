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
        this.handleSubmit = this.handleSubmit.bind();
    }
    handleSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
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
        recipeSteps : state.recipe.recipeSteps
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            initRecipe
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditor);
