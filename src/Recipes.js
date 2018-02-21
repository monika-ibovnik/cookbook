import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getAllRecipes} from './actions/recipeActions';
import {showModal,hideModal} from './actions/modalActions';

import RecipeList from './RecipeList';
import Menu from './Menu';
import './PageWithList.css';
import './Recipes.css';

class Recipes extends React.Component{
    constructor(props){
        super(props);
        this.showAddRecipeModal = this.showAddRecipeModal.bind(this);
    }
    componentDidMount(){
    }
    showAddRecipeModal(){
        this.props.showModal('RecipeEditor');
    }
    render(){
        return(
            <div className="recipes page-with-list">
                <div className="menu">
                    <label><button onClick={this.showAddRecipeModal}>+</button>Add new recipe</label>
                    <Menu/>
                </div>
                <div className="list">
                    <h2>Recipes</h2>
                    <RecipeList />
                </div>
            </div>
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
            showModal,
            hideModal
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
