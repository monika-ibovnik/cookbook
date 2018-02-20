import React from 'react';

export default class RecipeStepInput extends React.Component{
    constructor(props){
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount(){
        if(this.props.autofocus==true){
            this.inputValue.focus();
        }
    }
    handleKeyDown(e){
        if(e.keyCode == 13){
            let inputValue = this.inputValue;
            this.props.onKeyDown(this.inputValue.value);
        }
    }
    render(){
        return(
            <input type="text"
                   name="inputValue"
                   ref={(input)=>{
                        this.inputValue = input;
                   }}
                   onKeyDown={this.handleKeyDown}/>
        );
    }
}
