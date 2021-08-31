import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './components/doctors/doctor-dashboard.component';


import Login from "./components/doctors/doctor-signin.component";
import SignUp from "./components/doctors/doctor-signup.component";
import SignInSignUpButton from "./components/common/signin-signup-button.component";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand">
                <Link to={"/"}>
                  <img src="https://via.placeholder.com/180x62?text=Happy+Teeth" className="img-fluid" alt="Logo"></img>
                </Link>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                </ul>
              </div>
              <span class="navbar-text me-3">
                Contacto +666666666
              </span>
              <SignInSignUpButton></SignInSignUpButton>

            </div>
          </nav>

          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>

          <Route path="/dashboard" component={Dashboard} />
        </div>

      </Router>
    );
  }
}

export default App;
