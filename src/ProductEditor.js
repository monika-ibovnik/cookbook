import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ImgPreview from './ImgPreview';

class ProductEditor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productName: '',
            important: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render(){
        return(
            <div className="product-editor">
                <form>
                    <input type="text" name="productName" placeholder="Product name" value={this.state.productName} onChange={this.handleChange}/>*<br />
                    <textarea name="important" placeholder="Important notes" value={this.state.important} onChange={this.handleChange}></textarea><br />
                    <ImgPreview/>
                    <input type="submit" value="Add"/><button>Cancel</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        productImg : state.product.resizedImage
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {},
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductEditor);
