import React from 'react';


import './TextFieldCus.scss';
import TextField from '@mui/material/TextField';

const TextFieldCus = ({name, style, dvalue, dvaluef}) => (
    <>
   

            <TextField 
                style = {style} 
                defaultValue = ""
                name={name}
                className = "tField" 
                id="filled-basic" 
                label={name} 
                variant="filled" 
                required 
                color="warning"
                onChange = {(e) => {
                    e.preventDefault();
                    dvaluef(e.target.value);} }
                 />



        
  
    </>
)

export default TextFieldCus

