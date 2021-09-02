import React, { Component } from "react";
import DoctorDataService from "../../services/doctor.service";
import '../../css/auth/auth.css'

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
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h4>Inicio de sesión en Happy Teeth</h4>

                        <div className="form-group mb-3">
                            <input type="email" placeholder="Email" className="form-control" onChange={this.handleChangeEmail} />
                        </div>

                        <div className="form-group">
                            <input type="password" placeholder="Contraseña" className="form-control" onChange={this.handleChangePassword} />
                        </div>

                        <p className="forgot-password text-left"> ¿Olvidaste tu contraseña? </p>

                        <div className="mt-2">
                            <input type="submit" value="Iniciar sesión" className="btn btn-primary btn-block" />

                        </div>

                    </form>
                </div>
            </div>
        );
    }
}