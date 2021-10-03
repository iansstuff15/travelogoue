import React from 'react';

import Navigation from '../Navigation/Navigation';

import './Header.css';
import logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom';
const Header = () => (
    <>
    <div className="Header" >
        <Link to="/">
        <img src = {logo} alt="logo" className="applogo"/>
        </Link>
       
        <Navigation name = "Destinations" link = "/destinations"/>
        <Navigation name = "Deals" link = "/deals"/>
        <Navigation name = "Manage Bookings" link = "/bookings" />
        <Navigation name = "Profile" link = "/profile" />


    </div>
    </>
)

export default Header