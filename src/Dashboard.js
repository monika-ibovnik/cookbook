import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showModal} from './actions/modalActions';
import './Dashboard.css';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.addProductShortcut = this.addProductShortcut.bind(this);
    }
    componentDidMount(){
    }
    addProductShortcut(){
        this.props.showModal('ProductEditor');
    }
    render(){
        return(
            <div className="dashboard">
                <div className="welcomeMessage">Welcome, {this.props.firstname}</div>
                <div className="productShortcut" onClick={this.addProductShortcut}>Add Product</div>
                <div className="recipeShortcut">Add Recipe</div>
                <div className="menuShortcut">
                    <h2>On todays menu</h2>
                    <p>To be announced...</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        firstname: state.user.firstname
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            showModal
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
