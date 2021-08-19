import React, { Component } from "react";
import DoctorDataService from "../services/doctor.service";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {
        event.preventDefault();
        this.signIn(this.state.username, this.state.password);
        
    }

    handleChangeEmail(event) {
        event.preventDefault();
        this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        event.preventDefault();
        this.setState({password: event.target.value});
    }

    signIn(username, password) {
        var body = {
            username: username,
            password: password
        }

        DoctorDataService.signIn(body)
        .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"  onChange={this.handleChangeEmail} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  onChange={this.handleChangePassword} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <input type="submit" value="Submit" className="btn btn-primary btn-block" />
                <p className="forgot-password text-right"> Forgot password? </p>
            </form>
        );
    }
}