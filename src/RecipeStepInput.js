import React from 'react';

export default class RecipeStepInput extends React.Component{
    constructor(props){
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    componentDidMount(){
        if(this.props.autofocus==true){
            this.inputValue.focus();
        }
    }
    handleKeyDown(e){
        let arrIndex = this.props.index;
        if(e.keyCode == 13){
            let inputValue = this.inputValue;
            this.props.onKeyDown(this.inputValue.value, arrIndex);
        }
    }
    handleBlur(){
        let arrIndex = this.props.index;
        this.props.onBlur(this.inputValue.value, arrIndex);
    }
    render(){
        return(
            <input type="text"
                   name="inputValue"
                   defaultValue={this.props.defaultValue}
                   placeholder={this.props.placeholder}
                   ref={(input)=>{
                        this.inputValue = input;
                   }}
                   onBlur={this.handleBlur}
                   onKeyDown={this.handleKeyDown}/>
        );
    }
}
