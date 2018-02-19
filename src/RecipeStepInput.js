import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToStepsArray} from './actions/recipeActions.js';

class RecipeStepInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleKeyDown(e){
        if(e.keyCode == 13){
            this.props.addToStepsArray(this.state.inputValue);
        }
    }
    render(){
        return(
            <input name="inputValue" type="text" value={this.state.inputValue} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
        );
    }
}

function mapStateToProps(state){
    return{
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
export default connect(mapStateToProps, mapDispatchToProps)(RecipeStepInput);
