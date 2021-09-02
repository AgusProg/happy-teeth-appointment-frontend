import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import SignInSignUpButton from "./signin-signup-button.component";

export default class Navbar extends React.Component {


    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">

                    <Link to={"/"}>
                        <a className="navbar-brand">
                            <img src="https://via.placeholder.com/150x52?text=Happy+Teeth" className="img-fluid" alt="Logo"></img>
                        </a>
                    </Link>

                    <SignInSignUpButton></SignInSignUpButton>
                </div>
            </nav>
        )
    }
}
