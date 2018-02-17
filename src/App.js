import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './Layout';
import {getUserInfo} from './actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
                <h1>Dashboard</h1>
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
