import React from 'react';
import ReactDOM from 'react-dom';
import {RegistrationForm, LoginForm} from './AuthForms';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Layout from './Layout';
export default function WelcomePage(props){
    return(
        <BrowserRouter>
            <Layout>
                <Route path='/welcome' component={RegistrationForm}/>
                <Route path="/login" component={LoginForm}/>
            </Layout>
        </BrowserRouter>
    );
}
