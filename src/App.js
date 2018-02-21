import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './Layout';
import {getUserInfo} from './actions/userActions';
import {getAllProducts} from './actions/productActions';
import {getAllRecipes} from './actions/recipeActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Dashboard from './Dashboard';
import Recipes from './Recipes';
import Products from './Products';
import Settings from './Settings';
import ModalComponent from './ModalComponent';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getUserInfo();
        this.props.getAllProducts();
    }
    render(){
        return(
            <main>
                <div id="modal-container">
                    {this.props.modal &&
                        <ModalComponent />
                    }
                </div>
                <BrowserRouter>
                    <Layout firstname={this.props.firstname}>
                        <Route exact path='/' component={Dashboard}/>
                        <Route path='/recipes' component={Recipes}/>
                        <Route path='/products' component={Products}/>
                        <Route path='/settings' component={Settings}/>
                    </Layout>
                </BrowserRouter>
            </main>
        );
    }
}

function mapStateToProps(state){
    return{
        firstname: state.user.firstname,
        id: state.user.id,
        modal: state.modal.modal
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
            {
                getUserInfo,
                getAllProducts,
            },
            dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
