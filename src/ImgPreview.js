import React from 'react';

//import {..} from './actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addResizedImgPrev} from './actions/productActions';
class ImgPreview extends React.Component{
    constructor(props){
        super(props);
        this.state={
            file: null,
            imgPrev : null
        };
        this.updateCanvas = this.updateCanvas.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }
    handleFileChange(e){
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                file: file,
                imgPrev: reader.result
            }, ()=>{
                this.updateCanvas();
            });
        }
        reader.readAsDataURL(file);
    }
    updateCanvas() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        let img = new Image();
        let self = this;
        img.onload=function(){
            function checkImage(img){
                let newimg = {};
                let horizontalOrVertical = img.width - img.height;
                if(horizontalOrVertical > 0){
                    //image is horizontal
                    newimg.height=canvas.height;
                    newimg.width = Math.floor((newimg.height*img.width)/img.height);
                    newimg.x = (newimg.height-newimg.width)/2;
                    newimg.y = 0;
                }else if(horizontalOrVertical < 0){
                    //image is vertical
                    newimg.width = canvas.width;
                    newimg.height = Math.floor((newimg.width*img.height)/img.width);
                    newimg.x = 0;
                    newimg.y = (newimg.width-newimg.height)/2;
                }else{
                    //image is a square
                    newimg.width = canvas.width;
                    newimg.height = canvas.height;
                    newimg.x = 0;
                    newimg.y = 0;
                }
                return newimg;
            };
            let resized = checkImage(img);;
            ctx.drawImage(img, 0, 0, img.width, img.height, resized.x, resized.y , resized.width, resized.height);
            self.props.addResizedImgPrev(canvas.toDataURL());
        }
        img.src=this.state.imgPrev;
    }
    render() {
        return (
            <div className="image-uploader">
                <input type="file" onChange={this.handleFileChange}/><br/>
                {this.state.imgPrev &&
                    <canvas ref="canvas" width={200} height={200}/>
                }
                {!this.state.imgPrev &&
                <img src="/img/foodbasket.svg"/>
                }
            </div>
        );
    }
}
function mapStateToProps(state){
    return{}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            addResizedImgPrev
        },
        dispatch,
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(ImgPreview);
