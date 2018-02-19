import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initRecipe} from './actions/recipeActions';

import RecipeProductSearchInput from './RecipeProductSearchInput';
import RecipeStepInput from './RecipeStepInput';

class RecipeEditor extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="recipe-steps">
                    <h4>Add steps</h4>
                    <RecipeStepInput />
                </div>
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
