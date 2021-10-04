import React from 'react';


import './TextFieldCus.scss';
import TextField from '@mui/material/TextField';

const TextFieldCus = ({name}) => (
    <>
   

            <TextField className = "tField" id="filled-basic" label={name} variant="filled" required color="warning"/>



        
  
    </>
)

export default TextFieldCus

