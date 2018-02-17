import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return(
            <div></div>
        );
    }
}

function mapStateToProps(state){
    return{

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {},
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)();
