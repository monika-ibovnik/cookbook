import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ImgPreview from './ImgPreview';

class ProductEditor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            file: null,
            imgPrev : null
        };
        this.handleFileChange = this.handleFileChange.bind(this);
    }
    componentDidMount(){
    }
    handleFileChange(e){
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                file: file,
                imgPrev: reader.result
            });
        }
        reader.readAsDataURL(file);
    }
    handleSubmit(e){
    }
    render(){
        return(
            <div className="add-product-form">
                <form>
                    <input type="text" name="productName" placeholder="Product name"/><br />
                    <input type="file" onChange={this.handleFileChange}/><br/>
                    <input type="text" name="important" placeholder="Important notes"/><br />
                    <input type="submit" value="Add"/><button>Cancel</button>
                </form>
                {!this.state.imgPrev &&
                    <img src="/img/foodbasket.svg"/>
                }
                {this.state.imgPrev &&
                    <ImgPreview src={this.state.imgPrev} file={this.state.file}/>
                }
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductEditor);
