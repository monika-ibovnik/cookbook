import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    addToStepsArray,
    updateStepsArray,
    initFocus} from './actions/recipeActions.js'
import RecipeStepInput from './RecipeStepInput';

class RecipeStepList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            autofocus: false,
            blurHappened: false
        };
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleBlur(value,index){
        this.setState({blurHappened: true}, function(){
            if(index === undefined){
                if(value!=''){
                    this.props.addToStepsArray(value);
                }
            }else{
                this.props.updateStepsArray(value, index);
            }
        });
    }
    handleChange(value, index){
        this.setState({blurHappened: false}, function(){
            if(index === undefined){
                if(value!=''){
                    this.props.addToStepsArray(value);
                    this.props.addToStepsArray('');
                }
            }else{
                this.props.updateStepsArray(value, index);
                this.props.addToStepsArray('');
            }
        });
    }
    render(){
        //making a list
        let inputListArr = this.props.recipeSteps;
        if(inputListArr.length>0){
            inputListArr = inputListArr.map((value,index)=>{
                if(index == inputListArr.length-1 && value== ''){
                    return (
                        <div key={index}>
                            <RecipeStepInput index={index} defaultValue={value} onKeyDown={this.handleChange} onBlur={this.handleBlur} autofocus={this.props.autofocus} onFocus={this.props.initFocus}/>
                        </div>
                    );
                }else{
                    return (
                        <div key={index}>
                            <RecipeStepInput index={index} defaultValue={value} onKeyDown={this.handleChange} onBlur={this.handleBlur}/>
                        </div>
                    );
                }
            });
        }else{
            inputListArr.push(
                <div  key={inputListArr.length}>
                <RecipeStepInput
                index={inputListArr.length}
                onKeyDown={this.handleChange}
                onBlur={this.handleChange}
                autofocus={this.props.autofocus}
                onFocus={this.props.initFocus}/>
                </div>
            );
        }
        return(
            <div>
                {inputListArr}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        recipeSteps: state.recipe.recipeSteps,
        autofocus: state.recipe.autofocus
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            addToStepsArray,
            updateStepsArray,
            initFocus
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeStepList);
