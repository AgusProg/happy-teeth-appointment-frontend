import React from "react";
import DoctorDataService from "../../services/doctor.service";
import DoctorMenu from "./doctor-menu.component";
import DoctorPatientAppointment from "./doctor-patient-appointment.component";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDoctor: {
                id: -1,
                name: '',
                email: '',
                password: '',
                first_surname: '',
                second_surname: '',
                membership_number: ''
            }
        }
    }

    componentWillMount() {
        this.getDoctor()
    }


    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <DoctorMenu></DoctorMenu>
                    <DoctorPatientAppointment></DoctorPatientAppointment>
                </div>
            </div>
        )
    }

    getDoctor() {
        var doctorResponse = JSON.parse(sessionStorage.getItem('doctorResponse'))
        var headers = {
            Authorization: 'Token ' + doctorResponse['token']
        }

        DoctorDataService.get(doctorResponse['user_id'], headers)
            .then(response => {
                this.setState({
                    currentDoctor: {
                        id: response.data['id'],
                        name: response.data['name'],
                        email: response.data['email'],
                        password: response.data['password'],
                        first_surname: response.data['first_surname'],
                        second_surname: response.data['second_surname'],
                        membership_number: response.data['membership_number']
                    }
                })
            })
            .catch(e => {
                console.log(e);
            });
    }
}