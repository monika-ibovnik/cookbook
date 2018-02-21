import React from 'react';
import axios from './axios';
//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hideModal} from './actions/modalActions';
//import {setResizedImageToNull} from './actions/pictureActions';
import ImgPreview from './ImgPreview';
import './ProductEditor.css';

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
                        imgBase64: this.props.resizedImage
                    }).then(response=>{
                        let imgUrl = response.data.imgUrl;
                        axios.post('/product/image', {
                            image: imgUrl,
                            productId: productId
                        }).then(result=>{
                            this.props.hideModal();
                        })
                    });
                }else{
                    this.props.hideModal();
                }
            })
        }
    }
    render(){
        return(
            <div className="product-editor">
                <h3>Add a new product</h3>
                {this.state.error &&
                    <p className="error-message">{this.state.error}</p>
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="inputs">
                        <input type="text" name="productName" placeholder="Product name" value={this.state.productName} onChange={this.handleChange}/>*<br />
                        <textarea name="important" placeholder="Important notes" value={this.state.important} onChange={this.handleChange}></textarea><br />
                    </div>
                    <ImgPreview/>
                    <div className="buttons">
                        <input type="submit" value="Add"/><input type="button" onClick={this.props.hideModal} value="Cancel"/>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        resizedImage : state.picture.resizedImage
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            hideModal
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductEditor);
