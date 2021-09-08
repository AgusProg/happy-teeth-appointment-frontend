import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DoctorDashboard from './components/doctors/doctor-dashboard.component';

import Navbar from './components/common/navbar.component';
import DoctorSignIn from './components/doctors/doctor-signin.component';
import DoctorSignUp from './components/doctors/doctor-signup.component';
import CustomerSignIn from './components/customers/customer-signin.component';
import CustomerSignUp from './components/customers/customer-signup.component';
import CustomerDashboard from './components/customers/customer-dashboard.component';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/doctor/sign-in" component={DoctorSignIn} />
          <Route path="/doctor/sign-up" component={DoctorSignUp} />

          <Route path="/customer/sign-in" component={CustomerSignIn} />
          <Route path="/customer/sign-up" component={CustomerSignUp} />
        </Switch>

        <Route path="/doctor/dashboard" component={DoctorDashboard} />
        <Route path="/customer/dashboard" component={CustomerDashboard} />
      </Router>
    );
  }
}

export default App;
