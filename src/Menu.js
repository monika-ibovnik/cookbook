import React from 'react';
import {Link} from 'react-router-dom';

import './Menu.css';
export default function Menu(props){
    return(
        <nav>
            <Link to="/">Dashboard</Link><br/>
            <Link to="/Recipes">Recipes</Link><br/>
            <Link to="/products">Products</Link><br/>
            <Link to="/settings">Settings</Link><br/>
            <a href="/logout">Logout</a>
        </nav>
    );
}
