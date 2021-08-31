import React from "react";
import { Link } from "react-router-dom";

export default class SignInSignUpButton extends React.Component {
    constructor(props) {
        super(props)

        this.handleSignInClick = this.handleSignInClick.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleSignInClick() {
        this.setState({ isLoggedIn: true });
    }
    handleSignUpClick() {
        this.setState({ isLoggedIn: false });
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
            return (
                <Link className="nav-link" to={"/sign-in"}>
                    <button  onClick={this.handleSignUpClick} className="btn btn-outline-success"> Iniciar sesión </button>
                </Link>
                );
        } else {
            return (
                <Link className="nav-link" to={"/sign-up"}>
                    <button onClick={this.handleSignInClick} className="btn btn-outline-success"> Registrarse </button>
                </Link>
                );
        }



    }

}