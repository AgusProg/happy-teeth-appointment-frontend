import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from "./components/doctor-signin.component";
import SignUp from "./components/doctor-signup.component";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand">
                <Link to={"/sign-in"}>
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
              <Link className="nav-link" to={"/sign-up"}>
                <button class="btn btn-outline-success">
                  Registrarse
                </button>
              </Link>

            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
