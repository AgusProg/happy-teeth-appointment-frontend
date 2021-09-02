import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/doctors/doctor-dashboard.component';


import Login from "./components/doctors/doctor-signin.component";
import SignUp from "./components/doctors/doctor-signup.component";
import Navbar from './components/common/navbar.component';


class App extends React.Component {

  render() {
    return (
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>

          <Route path="/dashboard" component={Dashboard} />

        </Router>
    );
  }
}

export default App;
