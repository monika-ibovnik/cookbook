import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return(
            <div>Welcome, {this.props.firstname}</div>
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
        {},
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
