import React , {useState,Component} from 'react';
import Title from '../../components/title/title';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Navigation from '../../components/Navigation/Navigation';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import send from '../../assets/send.svg'
import './signin.css'
import Header from '../../components/header/Header';
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
        this.submitForm = this.submitForm.bind(this);
        this.state ={
          email:'',
       
        }
      }


       onChangeEmail(e){
        this.setState({
          email:e.target.value
        });
      }
      submitForm(e){
        e.preventDefault();
        const arr=JSON.parse(localStorage.getItem('user'))
        const emailloc=arr['email']
        const obj ={
          email:emailloc,
        };
        Axios.post('listreceipt.php',obj)
      .then(res=> {console.log(res.data)
      }
      )
      .catch(error => {
        console.log(error.response)
    });
    this.setState({
      email:'',
      password:'',
    })
        
  
      }

    
render(){
return(
    
    <div className="content">
        <Title title="RECEIPT" subtitle="Click Button For Receipt"/>    
        <form className="form" onSubmit={this.submitForm}> 
        <CustomButton Type = "submit" Text = "RECEIPT"/>
        </form>
       
    </div>
);
}
}

function Backhome(){
  let history = useHistory();
  return  history.push("/");
}

export default SignIn
