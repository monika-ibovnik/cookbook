import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showModal,hideModal} from './actions/modalActions';

import RecipeEditor from './RecipeEditor';

class Recipes extends React.Component{
    constructor(props){
        super(props);
        this.showAddRecipeModal = this.showAddRecipeModal.bind(this);
    }
    showAddRecipeModal(){
        this.props.showModal('RecipeEditor');
    }
    render(){
        return(
            <div>
                <button onClick={this.showAddRecipeModal}>New recipe</button>
                <RecipeEditor />
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
