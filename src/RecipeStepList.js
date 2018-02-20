import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToStepsArray} from './actions/recipeActions.js'
import RecipeStepInput from './RecipeStepInput';

class RecipeStepList extends React.Component{
    constructor(props){
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleKeyDown(value){
        console.log(value);
        this.props.addToStepsArray(value);
    }
    render(){
        return(
            <div>
                <RecipeStepInput onKeyDown={this.handleKeyDown} autofocus={true}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        recipeSteps: state.recipe.recipeSteps
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            addToStepsArray
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeStepList);
