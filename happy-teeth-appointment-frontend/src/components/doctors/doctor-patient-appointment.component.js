import React from "react";
import '../../css/patient-appointment/patient-appointment.css'

export default class DoctorPatientAppointment extends React.Component {
    render() {
        return (
            <div className="col-md-9 mt-3">
                <h4 className="mb-4">Citas de pacientes</h4>
                <div className="row">
                    <div role="tabpanel" aria-hidden="false" className="fade nav-item tab-pane active show">
                        <div className="card card-table">
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Paciente</th>
                                            <th scope="col">Fecha de la cita</th>
                                            <th scope="col">Razon de la cita</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
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