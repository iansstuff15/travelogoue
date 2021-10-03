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

class App extends React.Component{
  constructor(props) {
  super(props)
    this.state = {
      data: []
            }
    }
    componentDidMount(){
      //request to output sql entries
      axios.get('http://localhost/db/list.php').then(res => 
      {
      
      this.setState({data: res.data});
         }); 
      
      }
    render() {
      return (
        <div className="viewport">
             <Router>
         <Header />

          <Switch>
              <Route path = "/" exact>
                  <Home/>
              </Route>
              <Route path = "/signup" exact>
                  <SignUp/>
              </Route>
              <Route path = "/signin" exact>
                  <SignIn/>
              </Route>
          </Switch>
        <Footer/>
        </Router>
        </div>
       
    );
  }
}

export default App;
