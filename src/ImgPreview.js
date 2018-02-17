import React from 'react';

export default class ImgPreview extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        let img = new Image();
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
        }
        img.src=this.props.src;
    }
    render() {
        return (
            <div>
                <canvas ref="canvas" width={300} height={300}/>
            </div>
        );
    }
}
