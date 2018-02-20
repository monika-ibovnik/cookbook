import React from 'react';

import RecipeStepInput from './RecipeStepInput';

export default class RecipeStepList extends React.Component{
    constructor(props){
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleKeyDown(value){
        console.log(value)
    }
    render(){
        return(
            <div>
                <RecipeStepInput onKeyDown={this.handleKeyDown} autofocus={true}/>
            </div>
        );
    }
}
