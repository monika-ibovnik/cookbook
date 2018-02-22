import React from 'react';
import axios from './axios';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    initRecipe} from './actions/recipeActions';
import {
    hideModal} from './actions/modalActions';

import RecipeStepInput from './RecipeStepInput';
import RecipeStepList from './RecipeStepList';
import ImgPreview from './ImgPreview';
import ProductSearchInput from './ProductSearchInput';
import RecipeProductList from './RecipeProductList';

import './RecipeEditor.css';

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
                    });
                }
                if(this.props.recipeProducts.length!=0){
                    axios.post('/recipe/addproducts',{
                        products: this.props.recipeProducts,
                        recipeId: recipeId
                    }).then(result=>{
                        console.log(result.data);
                    })
                }
                if(this.props.recipeSteps.length!=0){
                    axios.post('/recipe/addsteps',{
                        steps: this.props.recipeSteps,
                        recipeId: recipeId
                    }).then(result=>{
                        console.log(result.data);
                    });
                }
                this.props.hideModal();
            });
        }
    }
    render(){
        return(
            <div className="recipe-editor">
                <h3>Add a new recipe</h3>
                {this.state.error &&
                    <p className="error-message">{this.state.error}</p>
                }
                <form onSubmit={this.handleSubmit}>
                    <input name="recipeName" value={this.state.recipeName} onChange={this.handleChange} autoFocus/>
                    <div className="inputs">
                        <div className="recipe-products">
                            <ProductSearchInput />
                            <RecipeProductList />
                        </div>
                        <ImgPreview />
                    </div>
                    <div className="recipe-steps">
                        <RecipeStepList list={this.props.recipeSteps}/>
                    </div>
                    <input type="submit" value="Save"/><input type="button" onClick={this.props.hideModal} value="Cancel"/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        recipeSteps : state.recipe.recipeSteps,
        recipeProducts: state.recipe.recipeProducts,
        autofocus : state.recipe.autofocus,
        resizedImage: state.picture.resizedImage
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {hideModal},
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditor);
