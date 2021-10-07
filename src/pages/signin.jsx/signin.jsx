import React , {useState,Component} from 'react';
import Title from '../../components/title/title';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import send from '../../assets/send.svg'
import './signin.css'
import CustomButton from '../../components/customButton/customButton';
import { borderRadius } from '@mui/system';
import { render } from '@testing-library/react';
const Axios = axios.create({
    baseURL: 'http://localhost/db/',
});
class SignIn extends Component {
 
    constructor(props){
        super(props);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.submitForm = this.submitForm.bind(this);
       
        this.state ={
          email:'',
          password:'',
          data: []
       
        }
      }
       
     
       onChangeEmail(e){
        this.setState({
          email:e.target.value
        });
      }
      onChangePassword(e){
        this.setState({
          password:e.target.value
        });
      }
      submitForm(e){
        e.preventDefault();
        const obj ={
          email:this.state.email,
          password:this.state.password,
        };
        Axios.post('login.php',obj)
       
      .then(res=> console.log(res.data))
      .catch(error => {
        console.log(error.response)
    });
    console.log(this.email);
    this.setState({
      email:'',
      password:'',
    })
        
  
      }

    
render(){
return(
    
    <div className="content">
        <Title title="SIGN IN" subtitle="YOUR ACCOUNT"/>    
        <form className="form" onSubmit={this.submitForm}> 
        <TextField id="filled-basic" label="Email" variant="filled" type="email" required color="warning" value={this.state.email} onChange={this.onChangeEmail} placeholder="email"/>
        <TextField id="filled-basic" label="Password" variant="filled" type="password" required color="warning" value={this.state.password} onChange={this.onChangePassword} placeholder="password"/>
        <CustomButton Type = "submit" Text = "SIGN IN"/>
        </form>
       
    </div>
);
}
}



export default SignIn
