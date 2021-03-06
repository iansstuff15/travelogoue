import React , {Component} from 'react';
import Title from '../../components/title/title';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import send from '../../assets/send.svg'
import './signup.css'
import CustomButton from '../../components/customButton/customButton';
import { borderRadius } from '@mui/system';
class signup extends Component {
 
  constructor(props){
      super(props);
      this.onChangefirst_name= this.onChangefirst_name.bind(this);
      this.onChangelast_name= this.onChangelast_name.bind(this);
      this.onChangeEmail= this.onChangeEmail.bind(this);
      this.onChangePassword= this.onChangePassword.bind(this);
      this.submitForm = this.submitForm.bind(this);
     
      this.state ={
        first_name: '',
        last_name: '',
        email:'',
        password:'',

     
      }
    }
     
    onChangefirst_name(e){
      this.setState({
        first_name:e.target.value
      });
    }
    onChangelast_name(e){
        this.setState({
          last_name:e.target.value
        });
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
        first_name:this.state.first_name,
        last_name:this.state.last_name,
        email:this.state.email,
        password:this.state.password,
      };
      axios.post('http://localhost/travelogue/createuser.php',obj)
    .then(res=> console.log(res.data))
    .catch(error => {
      console.log(error.response)
  });
  this.setState({
    first_name: '',
    last_name: '',
    email:'',
    password:'',
  })
      

    }

    render(){
      return (
        <div className="content">
        <Title title="TELL US SOMETHING" subtitle="ABOUT YOURSELF"/>    
        <form className="form" onSubmit={this.submitForm} > 
        <TextField id="filled-basic" label="First Name" variant="filled" type="text" required color="warning" value={this.state.first_name} onChange={this.onChangefirst_name} placeholder="First name" />
        <TextField id="filled-basic" label="Last Name" variant="filled" type="text" required  color="warning" value={this.state.last_name} onChange={this.onChangelast_name} placeholder="last name" />
        <TextField id="filled-basic" label="Email" variant="filled" type="email" required color="warning" value={this.state.email} onChange={this.onChangeEmail} placeholder="email"/>
        <TextField id="filled-basic" label="Password" variant="filled" type="password" required color="warning" value={this.state.password} onChange={this.onChangePassword} placeholder="password"/>
        <CustomButton Type = "submit" Text = "SIGN UP"/>
        </form>
       
    </div>
      );
    }
    }
     

export default signup
