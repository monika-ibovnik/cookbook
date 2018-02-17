import React from 'react';
import ReactDOM from 'react-dom';
import axios from './axios';
import {Link} from 'react-router-dom';

//useful functions to check user input

//components
function Error({error}){
    if(error){
        return(
            <p className="error">{error}</p>
        );
    }else{
        return(
            <p className="invisible">{error}</p>
        );
    }
}
export class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        //check if the fields are ok
        if(this.state.email != '' && this.state.password !=''){
            axios.post('/login', {
                email: this.state.email,
                password: this.state.password
            }).then(response =>{
                console.log("response", response);
                location.replace('/');
            });
        }
    }
    render(){
        return(
        <div className="component">
            <div className="welcome-form">
                <h2>Log in</h2>
                <Error error={this.state.error}/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="E-mail" onChange={this.handleChange}/>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                <p>You don't have an account?<br/> Please <Link to="/welcome">sign up!</Link></p>
            </div>
        </div>
        );
    }

}

export class RegistrationForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            repeatPassword: '',
            error: null,
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        //check if the fields are empty
        let readyToSubmit = true;
        for(let key in this.state){
            if(this.state[key]==''){
                readyToSubmit = false;
                break;
            }
        }
        if(readyToSubmit){
            if(this.state.password == this.state.repeatPassword){
                axios.post('/register', {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    password: this.state.password
                }).then(res=>{
                    location.replace('/');
                }).catch(()=>{
                    this.setState({
                        error: 'Something went wrong, please try later'
                    })
                });
            }
        }else{
            this.setState({
                error: 'Passwords do not match'
            })
        }
    }
    render(){
        return(
            <div className="component">
                <h2>Register</h2>
                <Error error={this.state.error}/>
                <div className="welcome-form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="firstname" placeholder="First name" value={this.state.firstname} onChange={this.handleChange}/><br/>
                        <input type="text" name="lastname" placeholder="Last name" value={this.state.lastname} onChange={this.handleChange}/><br/>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/><br/>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/><br/>
                        <input type="password" name="repeatPassword" placeholder="Repeat password" value={this.state.repeatPassword} onChange={this.handleChange}/><br/>
                        <button className="button">Sign up</button>
                    </form>
                    <p>Already registered?<br/> Please <Link to="/login">sign in!</Link></p>
                </div>
            </div>
        );
    }
}
