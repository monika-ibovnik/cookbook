import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './Layout';
import {getUserInfo} from './actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Dashboard from './Dashboard';
import Cookbook from './Cookbook';
import Products from './Products';
import Settings from './Settings';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getUserInfo();
    }
    render(){
        return(
            <BrowserRouter>
                <Layout firstname={this.props.firstname}>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/cookbook' component={Cookbook}/>
                    <Route path='/products' component={Products}/>
                    <Route path='/settings' component={Settings}/>
                </Layout>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state){
    return{
        firstname: state.user.firstname,
        id: state.user.id,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
            {
                getUserInfo,
            },
            dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
