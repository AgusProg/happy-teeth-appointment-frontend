import React from "react";

export default class DoctorPatientAppointment extends React.Component {
    render() {
        return (
            
            <div className="col-md-7">
                <h4 class="mb-4">Citas de pacientes</h4>
                <div className="row">
                    <div className="col-md-12">

                        <div className="col-md-12">
                            <div className="appointment-tab">
                                <div className="tab-content">
                                    <div id="controlled-tab-example-tabpane-1" aria-labelledby="controlled-tab-example-tab-1" role="tabpanel" aria-hidden="false" className="fade nav-item tab-pane active show">
                                        <div className="tab-pane show active" id="upcoming-appointments">
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Nombre del paciente</th>
                                                                    <th>Fecha</th>
                                                                    <th>Razón</th>
                                                                    <th>Tipo</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="controlled-tab-example-tabpane-2" aria-labelledby="controlled-tab-example-tab-2" role="tabpanel" aria-hidden="true" className="fade nav-item tab-pane">
                                        <div className="card card-table mb-0">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Patient Name</th>
                                                                <th>Appt Date</th>
                                                                <th>Purpose</th>
                                                                <th>Type</th>
                                                                <th className="text-center">Paid Amount</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>




            </div>
        )
    }
}