import React from 'react';
import Title from '../../components/title/title';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import send from '../../assets/send.svg'

import './signup.css'
import CustomButton from '../../components/customButton/customButton';
import { borderRadius } from '@mui/system';

const SignUp = () => (
    <>
    <div className="content">
        <Title title="TELL US SOMETHING" subtitle="ABOUT YOURSELF"/>    
        <form className="form"> 

        <TextField id="filled-basic" label="First Name" variant="filled" required color="warning"/>
        <TextField id="filled-basic" label="Last Name" variant="filled" required  color="warning"/>
        <TextField id="filled-basic" label="Email" variant="filled" type="email" required color="warning"/>
        <TextField id="filled-basic" label="Password" variant="filled" type="password" required color="warning"/>
        <CustomButton Text = "SIGN UP"/>
        </form>
       
    </div>
    </>
)

export default SignUp