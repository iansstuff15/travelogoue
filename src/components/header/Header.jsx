import React,{Component} from 'react';
import { useHistory } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Header.css';
import logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom';
function Header(){
    let history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function signout(){
    history.push("/");
    localStorage.removeItem('user');
    localStorage.removeItem('receipt');
    handleClose();
  }
  
    function signin() {
      history.push("/signin");
    }
    function signup() {
        history.push("/signup");
      }
    function receipt() {
        history.push("/receipt");
    }
      return(
    <div className="Header">
        <Link to="/">
        <img src = {logo} alt="logo" className="applogo"/>
        </Link>
       
        <Navigation name = "Destinations" link = "/destinations"/>
        <Navigation name = "Deals" link = "/deals"/>
        {!localStorage.getItem('receipt')&&<Navigation name = "Manage Bookings" link = "/bookings" />}
        {localStorage.getItem('receipt')&&<Navigation name = "Manage Bookings" link = "/update" />}
        {!localStorage.getItem('user')
        &&
        <div>
      
      <Button
      sx={{
         bgcolor: 'grey.200',
          color: 'black',
        position: 'absolute',
        top: 27,
        right: '29%',
      }}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Profile
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > 
        <MenuItem onClick={signin}>Sign In</MenuItem>
        <MenuItem onClick={signup}>Sign Up</MenuItem>
      </Menu>
    </div>
}
{localStorage.getItem('user')
        &&
        <div>
      
      <Button
       sx={{
        bgcolor: 'grey.200',
         color: 'black',
       position: 'absolute',
       top: 27,
       right: '29%',
     }}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Profile
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > 
        <MenuItem onClick={receipt}>Receipts</MenuItem>
        <MenuItem onClick={signout}>Sign Out</MenuItem>
      </Menu>
    </div>
}


    </div>
      )
}

export default Header