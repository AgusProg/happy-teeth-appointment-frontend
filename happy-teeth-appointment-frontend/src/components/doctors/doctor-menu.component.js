import React from "react";
import '../../css/menu/menu.css'

export default class DoctorMenu extends React.Component {


    render() {
        return (
            <div className="col-md-5">
                <nav id="sidebar">
                    <div className="sidebar-header text-center">
                        <h3>Doctor Daniel Fabian Schuler</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <li>
                            <a>Panel de control</a>
                        </li>
                        <li>
                            <a>Citas</a>
                        </li>
                        <li>
                            <a>Mis pacientes</a>
                        </li>
                        <li>
                            <a>Opiniones</a>
                        </li>
                        <li>
                            <a>Mensajes</a>
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