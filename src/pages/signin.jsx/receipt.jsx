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
function getreceipt(){
  const arrreceipt=JSON.parse(localStorage.getItem('receipt'))
  return arrreceipt
}
class SignIn extends Component {
 
    constructor(props){
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state ={
          email:'',
          data:[],

        }
      }


      submitForm(e){
        e.preventDefault();
        const arr=JSON.parse(localStorage.getItem('user'))
        const emailloc=arr['email']
        const obj ={
          email:emailloc,
        };
        Axios.post('listreceipt.php',obj)
      .then(res=> {this.state.data=res.data
        localStorage.setItem('receipt',JSON.stringify(this.state.data))
      }
      )
      .catch(error => {
        console.log(error.response)
    });
        
    window.location.reload();
      }

    
render(){
return(
    
    <div className="content">
        <Title title="RECEIPT" subtitle="Click Button For Receipt"/>    
        <form className="form" onSubmit={this.submitForm}> 
        <CustomButton Type = "submit" Text = "RECEIPT"/>
        </form>
    {localStorage.getItem('receipt')
    &&
    <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>ID</th>
              <th>Flight Number</th>
              <th>Passenger Name</th>
              <th>fr_location</th>
              <th>to_location</th>
              <th>Class</th>
              <th>Flight Date</th>
              <th>Flight Time</th>
              <th>Gate Number</th>
              <th>Board Time</th>
              <th>Resort Name</th>
            </tr>
          </thead>
          <tbody>
                 <tr>
                 <td>{getreceipt()['email']}</td>
                  <td>{getreceipt()['id']}</td>
                  <td>{getreceipt()['flight_num']}</td>
                  <td>{getreceipt()['passenger_name']}</td>
                  <td>{getreceipt()['fr_location']}</td>
                  <td>{getreceipt()['to_location']}</td>
                  <td>{getreceipt()['class']}</td>
                  <td>{getreceipt()['flight_date']}</td>
                  <td>{getreceipt()['flight_time']}</td>
                  <td>{getreceipt()['gate_num']}</td>
                  <td>{getreceipt()['board_time']}</td>
                  <td>{getreceipt()['resort_name']}</td>
                </tr>
             
      
           
            
          </tbody>
        </table>
    }
    </div>
);
}
}


export default SignIn
