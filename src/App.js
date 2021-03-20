import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
      <Router>
      <Navbar/> 
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <PrivateRoute path="/destination/:id">
        <Destination />
      </PrivateRoute>
      <PrivateRoute path="/destination">
        <Destination />
      </PrivateRoute>
      
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
 </UserContext.Provider>
 );

}

export default App;
