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
        <CustomButton Type = "submit" Text = "SIGN IN"/>
        </form>
       
    </div>
    </>
)



export default SignIn
