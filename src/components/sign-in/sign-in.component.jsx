import React from 'react';

import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email :'',
            password :''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '',password :''});

    }

    handleChange = event =>{
        const {value, name} =event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className ='sign-in'>
                <h2>Already have a account</h2>
                <span>Sign in with your email ID</span>
                <form onSubmit = {this.handleChange}>
                    <input name ='email' 
                        value ={this.state.email }
                        required
                        onChange ={this.handleChange} />
                    <label>email</label>
                    <input name ='password' 
                           value ={this.state.password }
                           required
                           onChange ={this.handleChange} />
                    <label>Password</label>
                    <input type ='submit' value ='submit form' />
                </form>
            </div>
        )
    }

}

export default SignIn;