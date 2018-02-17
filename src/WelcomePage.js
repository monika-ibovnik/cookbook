import React from 'react';
import ReactDOM from 'react-dom';
import {RegistrationForm, LoginForm} from './AuthForms';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default function WelcomePage(props){
    return(
        <BrowserRouter>
            <div>
                <Route path='/welcome' component={RegistrationForm}/>
                <Route path="/login" component={LoginForm}/>
            </div>
        </BrowserRouter>
    );
}
