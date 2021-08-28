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
        this.signIn();
    }

    handleChangeEmail(event) {
        event.preventDefault();
        this.setState({ username: event.target.value });
    }

    handleChangePassword(event) {
        event.preventDefault();
        this.setState({ password: event.target.value });
    }

    signIn() {
        var body = {
            username: this.state.username,
            password: this.state.password
        }

        DoctorDataService.signIn(body)
            .then(response => {
                const returnObj = response.data;
                sessionStorage.setItem('doctorResponse', JSON.stringify(returnObj));
                this.props.history.push('/dashboard');

            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Inicio de sesión</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={this.handleChangeEmail} />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" onChange={this.handleChangePassword} />
                </div>

                <div className="mt-3">
                    <input type="submit" value="Iniciar sesión" className="btn btn-primary btn-block" />
                    
                </div>

                <p className="forgot-password text-right"> ¿Olvidaste tu contraseña? </p>
            </form>
        );
    }
}