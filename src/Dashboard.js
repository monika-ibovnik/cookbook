import React from 'react';
import {Link} from 'react-router-dom';

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
                <div className="welcomeMessage"><h2>Welcome, {this.props.firstname}</h2></div>
                <div className="productShortcut">
                    <div>
                        <Link to="/products">Add Product</Link>
                        <button  onClick={this.addProductShortcut}>Add product</button>
                    </div>
                </div>
                <div className="recipeShortcut">
                <div>
                    <Link to="/recipe">Add Product</Link>
                    <button  onClick={this.addRecipeShortcut}>Add recipe</button>
                </div>
                </div>
                <div className="menuShortcut">
                    <h2>On todays menu:</h2>
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
