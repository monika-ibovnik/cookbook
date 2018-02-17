import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ProductEditor from './ProductEditor';

class Products extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return(
            <div>
                <h2>Products Manager</h2>
                <ProductEditor />
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
        {},
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
