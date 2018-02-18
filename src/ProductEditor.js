import React from 'react';
import axios from './axios';
//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ImgPreview from './ImgPreview';

class ProductEditor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productName: '',
            important: '',
            error: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.productName == ''){
            this.setState({
                error: "Please insert product name."
            });
        }else{
            axios.post('/product/edit',{
                    productName : this.state.productName,
                    important: this.state.important ? this.state.important : null
                }).then(response=>{
                let productId = response.data.productId;
                 if(this.props.resizedImage){
                    axios.post('/picture/upload',{
                        imgBase64: this.props.resizedImage,
                        productId: productId
                    }).then(response=>{
                        console.log('success!', response.data);
                    });
                }
            })
        }
    }
    render(){
        return(
            <div className="product-editor">
                {this.state.error &&
                    <p className="error-message">{this.state.error}</p>
                }
                <form onSubmit={this.handleSubmit}>
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
        resizedImage : state.product.resizedImage
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {},
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductEditor);
