import React from "react";
import './customer-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

export default class CustomerMenu extends React.Component {

    render() {
        return (
            <div className="col-md-3 mt-3">
                <nav id="sidebar">
                    <div className="sidebar-header text-center">
                        <div className="common-profile">
                            <img className="common-img" src="https://www.w3schools.com/howto/img_avatar.png" />
                        </div>
                        <h3 className="common-name">{this.props.currentCustomer.name + " " + this.props.currentCustomer.first_surname + " " + this.props.currentCustomer.second_surname}</h3>
                        <div className="common-details">
                            <h5 className="mb-0">
                                <FontAwesomeIcon className="me-1" icon={faBirthdayCake} />
                                1 de Junio de 1996
                            </h5>
                        </div>
                        <div className="common-details">
                            <h5 className="mb-0">
                                <FontAwesomeIcon className="me-1" icon={faMapMarkedAlt} />
                                Madrid, España 28922
                            </h5>
                        </div>
                    </div>

                    <ul className="list-unstyled components">
                        <li>
                            <a>Panel de control</a>
                        </li>
                        <li>
                            <a>Opiniones</a>
                        </li>
                        <li>
                            <a>Mensajes</a>
                        </li>
                        <li>
                            <a>Ajustes</a>
                        </li>
                        <li>
                            <a>Cerrar Sesión</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}