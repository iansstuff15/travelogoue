import React , {useState} from 'react';
import Title from '../../components/title/title';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import send from '../../assets/send.svg'

import './signin.css'
import CustomButton from '../../components/customButton/customButton';
import { borderRadius } from '@mui/system';
const Axios = axios.create({
    baseURL: 'http://localhost/db/',
});

const SignIn = () => (
    <>
    <div className="content">
        <Title title="SIGN IN" subtitle="YOUR ACCOUNT"/>    
        <form className="form"> 
        <TextField id="filled-basic" label="Email" variant="filled" type="email" required color="warning"/>
        <TextField id="filled-basic" label="Password" variant="filled" type="password" required color="warning"/>
        <CustomButton Text = "SIGN IN"/>
        </form>
       
    </div>
    </>
)

function signin(){
    const initialState = {
        userInfo:{
            email:'',
            password:'',
        },

    }
    const [state,setState] = useState(initialState);
    signin = async (user) => {

        // send request
        const signin = await Axios.post('list.php',{
            email:user.email,
            password:user.password,
        });

        return signin.data;
    }
    //when submit is pressed on login
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await signin(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }
    //change input value
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

}


export default SignIn