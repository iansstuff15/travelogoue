import axios from 'axios';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Header from './components/header/Header';
import Home from './pages/Home/home';
import React from 'react';
import Footer from './components/footer/footer';
import SignUp from './pages/signup/signup';
import SignIn from './pages/signin.jsx/signin';
import Booking from './pages/BookDestination/BookDestination';

class App extends React.Component{
    render() {
      return (
        <div className="viewport">
             <Router>
         <Header />

          <Switch>
              <Route path = "/" exact>
                  <Home/>
              </Route>
              <Route path = "/signup" component = {SignUp} exact/>
                
              <Route path = "/signin" component = {SignIn} exact/>
               
              <Route path = "/bookings" component = {Booking} exact/>
          </Switch>
        <Footer/>
        </Router>
        </div>
       
    );
  }
}

export default App;
