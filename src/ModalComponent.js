import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductEditor from './ProductEditor';
import RecipeEditor from './RecipeEditor';

import './ModalComponent.css';

class ModalComponent extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        if(this.props.component == 'ProductEditor'){
            return(
                <div className="modal-container">
                    <div className="component">
                        <ProductEditor />
                    </div>
                </div>
            );
        }else if(this.props.component == 'RecipeEditor'){
            return(
                <div className="recipe-container">
                    <div className="component">
                    <RecipeEditor />
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
}

function mapStateToProps(state){
    return{
        component : state.modal.component
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {},
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
