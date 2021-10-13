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
function Update(){
    let history = useHistory();
    function Redir() {
        history.push("/bookings");
      }
return(
    
    <div className="content">
        <Title title="UPDATE" subtitle="Click to Update Flight"/>    
        <form className="form" onSubmit={Redir} > 
        <CustomButton Type = "submit" Text = "UPDATE" />
        </form>
       

    
    </div>
);

}


export default Update
