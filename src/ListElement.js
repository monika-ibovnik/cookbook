import React from 'react';
import './ListElement.css';

export default function ListElement(props){
    return(
        <div className="list-element">
            <div>
            <p>{props.name}</p>
            </div>
            <div>
                <img src={props.image ? props.image : '/img/foodbasket.svg'} />
            </div>
        </div>
    );
}
