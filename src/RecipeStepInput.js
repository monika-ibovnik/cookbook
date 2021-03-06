import React from 'react';

export default class RecipeStepInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: null
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    componentDidMount(){
        if(this.props.autofocus==true){
            this.inputValue.focus();
        }
        console.log('index', this.props.index)
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
            <div>
                <span>{this.props.index+1}</span>
                <input name="inputValue"
                    defaultValue={this.props.defaultValue}
                    placeholder={this.props.placeholder}
                    ref={(input)=>{
                        this.inputValue = input;
                    }}
                    onBlur={this.handleBlur}
                    onFocus={this.props.onFocus}
                    onKeyDown={this.handleKeyDown}
                    autoComplete="off"/>
            </div>
        );
    }
}
