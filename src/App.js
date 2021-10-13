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
import BookFlightsOne from './pages/BookFlights/BookFlightsOne';
import BookHotel from './pages/BookHotel/BookHotel';
import Flights from './pages/Flights/flights';
import List from './pages/ListDestination/ListDestination';
import receipt from './pages/signin.jsx/receipt';
import update from './pages/signin.jsx/update';
import Admin from './pages/admin/admin';
import AdminNames from './pages/admin-names/admin-names';
class App extends React.Component{
    render() {
      return (
        <div className="viewport">
        <Router>
         <Header />


          <Switch>
              <Route path = "/" component = {Home} exact />
              <Route path = "/signup" component = {SignUp} exact/>
              <Route path = "/admin" component = {Admin} exact/>
              <Route path = "/admin-names" component = {AdminNames} exact/>
              <Route path = "/receipt" component = {receipt} exact/>
              <Route path = "/update" component = {update} exact />
              <Route path = "/signin" component = {SignIn} exact/>
              <Route path = "/flights" component = {Flights} exact/>
              <Route path = "/bookings" component = {Booking} exact/>
              <Route path = "/list" component = {List} exact/>
              <Route path = "/book-flights-page-one" component = {BookFlightsOne} exact/>
              <Route path = "/holiday" component = {BookHotel} exact/>   
         </Switch>
          <Footer/>
        </Router>
        </div>
       
    );
  }
}

export default App;
