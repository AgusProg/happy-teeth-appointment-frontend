import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SignInSignUpButton extends React.Component {
    constructor(props) {
        super(props)
        

        this.handleClick = this.handleClick.bind(this);
        this.state = { isLoggedIn: false };
    }


    handleClick() {
        if (this.state.isLoggedIn) {
            this.setState({ isLoggedIn: false });
        } else {
            this.setState({ isLoggedIn: true });
        }

    }

    getButton(text) {
        return (
            <button onClick={this.handleClick} className="btn btn-outline-success"> {text} </button>

        )
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
            return (
                <Link to={"/sign-in"}> {this.getButton("Iniciar Sesión")} </Link>
            );
        } else {
            return (
                <Link to={"/sign-up"}> { this.getButton("Registrarse") } </Link>
            );
        }



    }

}