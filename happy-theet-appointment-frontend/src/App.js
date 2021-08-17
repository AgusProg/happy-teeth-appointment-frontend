import './App.css';
import React from "react";
import Doctor from './components/doctor.component';
import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <li>
              <Link to={"/doctor-detail"} className="nav-link">
                Doctors
              </Link>
            </li>
          </div>
        </nav>

        <Switch>
          <Route path="/doctor-detail" component={Doctor} />
        </Switch>
      </div>
    );
  }
}

export default App;
