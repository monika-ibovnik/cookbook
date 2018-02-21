import React from 'react';
import {Link} from 'react-router-dom';

import './Layout.css';

function Logo(props){
    if(location.pathname==='/welcome' || location.pathname==='/login'){
        return <Link to='/welcome'><h1>cookbook</h1></Link>;
    }else{
        return <Link to='/'><h1>cookbook</h1></Link>;
    }
}

export default function Layout(props){
    return(
        <div id="app">
            <header>
                <Logo />
            </header>
            {props.children}
            <footer>
                <p>&copy; cookbook</p>
            </footer>
        </div>
    );
}
