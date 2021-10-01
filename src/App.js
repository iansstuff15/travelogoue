
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Header from './components/header/Header';
import Home from './pages/Home/home';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
          <Route path = "/">
              <Home/>
          </Route>
      </Switch>

    </Router>
  );
}

export default App;
