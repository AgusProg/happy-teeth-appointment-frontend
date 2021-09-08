import React from "react";
import './customer-appointments.css'

export default class CustomerAppointments extends React.Component {
    render() {
        return (
            <div className="col-md-9 mt-3">
                <h4 className="mb-4">Citas</h4>
                <div className="row">
                    <div role="tabpanel" aria-hidden="false" className="fade nav-item tab-pane active show">
                        <div className="card card-table">
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Doctor</th>
                                            <th scope="col">Fecha de la cita</th>
                                            <th scope="col">Fecha de confirmación de la cita</th>
                                            <th scope="col">Estado</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>10/09/2021</td>
                                            <td>08/09/2021</td>
                                            <td>Pendiente</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>10/09/2021</td>
                                            <td>08/09/2021</td>
                                            <td>Pendiente</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>10/09/2021</td>
                                            <td>08/09/2021</td>
                                            <td>Confirmada</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}