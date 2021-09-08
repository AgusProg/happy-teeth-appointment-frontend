import React, { Component } from "react";
import CustomerDataService from "../../services/customer.service";
import './customer-signin-signup.css'

export default class CustomerSignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            firstSurname: "",
            secondSurname: "",
            membershipNumber: ""
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeFirstSurname = this.handleChangeFirstSurname.bind(this);
        this.handleChangeSecondSurname = this.handleChangeSecondSurname.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.signUp();
    }

    signUp() {
        var signUpBody = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            first_surname: this.state.firstSurname,
            second_surname: this.state.secondSurname,
        }

        var signInBody = {
            username: this.state.email,
            password: this.state.password
        }

        CustomerDataService.signUp(signUpBody)
            .then(() => {
                CustomerDataService.signIn(signInBody)
                .then(response => {
                    const returnObj = response.data;
                    sessionStorage.setItem('customerResponse', JSON.stringify(returnObj));
                    this.props.history.push('/customer/dashboard');
                })
                .catch(e => {
                    console.log(e);
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    handleChangeName(event) {
        event.preventDefault();
        this.setState({ name: event.target.value });
    }

    handleChangeFirstSurname(event) {
        event.preventDefault();
        this.setState({ firstSurname: event.target.value });
    }

    handleChangeSecondSurname(event) {
        event.preventDefault();
        this.setState({ secondSurname: event.target.value });
    }

    handleChangeEmail(event) {
        event.preventDefault();
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event) {
        event.preventDefault();
        this.setState({ password: event.target.value });
    }

    
    render() {
        return (
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Registro de pacientes</h3>

                        <div className="form-group">
                            <input type="text" placeholder="Nombre" className="form-control" value={this.state.name} onChange={this.handleChangeName} />
                        </div>

                        <div className="form-group mt-3">
                            <input type="text" placeholder="Primer apellido" className="form-control" value={this.state.firstSurname} onChange={this.handleChangeFirstSurname} />
                        </div>

                        <div className="form-group mt-3">
                            <input type="text" placeholder="Segundo apellido" className="form-control" value={this.state.secondSurname} onChange={this.handleChangeSecondSurname} />
                        </div>

                        <div className="form-group mt-3">
                            <input type="email" placeholder="Email" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} />
                        </div>

                        <div className="form-group mt-3">
                            <input type="password" placeholder="Contraseña" className="form-control" value={this.state.password} onChange={this.handleChangePassword} />
                        </div>

                        <div className="mt-3">
                            <input type="submit" value="Registrarse" className="btn btn-primary btn-block" />
                        </div>

                        <p className="forgot-password text-right"> ¿Olvidaste tu contraseña? </p>
                    </form>
                </div>
            </div>
        );
    }
}