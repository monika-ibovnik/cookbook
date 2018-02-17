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

function Menu(props){
    return(
        <nav>
            <Link to="/">Dashboard</Link><Link to="/cookbook">Cookbook</Link><Link to="/products">Products</Link><Link to="/settings">Settings</Link><a href="/logout">Logout</a>
        </nav>
    );
}

export default function Layout(props){
    return(
        <div id="app">
            <header>
                <Logo />
                {props.firstname &&
                    <Menu />
                }
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <p>&copy; cookbook</p>
            </footer>
        </div>
    );
}
