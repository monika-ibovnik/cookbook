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
        //making a list
        let inputListArr = this.props.recipeSteps;
        inputListArr = inputListArr.map((value,index)=>{
            console.log(index,value);
            return (
                <div key={index}>
                    <span>{index+1}</span><RecipeStepInput defaultValue={value}/>
                </div>
            );
        });
        inputListArr.push(
            <div  key={inputListArr.length}>
                <span>{inputListArr.length+1}</span><RecipeStepInput onKeyDown={this.handleKeyDown} autofocus={true}/>
            </div>
        );
        return(
            <div>
                {inputListArr}
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
