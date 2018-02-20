import React from 'react';
import axios from './axios';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initRecipe} from './actions/recipeActions';

import RecipeProductSearchInput from './RecipeProductSearchInput';
import RecipeStepInput from './RecipeStepInput';
import RecipeStepList from './RecipeStepList';
import ImgPreview from './ImgPreview';

class RecipeEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recipeName: '',
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.recipeName == ''){
            this.setState({
                error: 'Please give your recipe a title'
            });
        }else{
            axios.post('/recipe/new', {
                title: this.state.recipeName
            }).then(result=>{;
                let recipeId = result.data.recipeId;
                if(this.props.resizedImage){
                    axios.post('/picture/upload', {imgBase64: this.props.resizedImage}).then(result=>{
                        let imgUrl = result.data.url;
                        axios.post('/recipe/image', {
                            image: imgUrl,
                            recipeId: recipeId
                        }).then(result=>{
                            console.log(result);
                        });
                    })
                }
                //here goes the code to upload steps, paralel to uploading image
            });
        }
    }
    render(){
        return(
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.handleSubmit}>
                    <input name="recipeName" value={this.state.recipeName} onChange={this.handleChange} autoFocus/>
                    <ImgPreview />
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
        recipeSteps : state.recipe.recipeSteps,
        autofocus : state.recipe.autofocus,
        resizedImage: state.picture.resizedImage
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {},
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditor);
