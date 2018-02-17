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
                    return newimg;
                }else{
                    //image is vertical
                    console.log('vertical');
                }
            };
            console.log(img.height, img.width);
            let newsize=checkImage(img);
            console.log(newsize, 'newsize');
            console.log(canvas.width);
            ctx.drawImage(img, 0, 0, img.width, img.height,newsize.x, 0, newsize.width, canvas.height);
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
