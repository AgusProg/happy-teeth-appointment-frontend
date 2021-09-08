import React from "react";
import CustomerDataService from "../../services/customer.service";
import CustomerMenu from "./customer-menu.component";
import CustomerAppointmentsAppointment from "./customer-appointments.component";
import CustomerAppointments from "./customer-appointments.component";

export default class CustomerDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCustomer: {
                id: -1,
                name: '',
                email: '',
                password: '',
                first_surname: '',
                second_surname: '',
            }
        }
    }

    componentWillMount() {
        this.getCustomer()
    }


    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <CustomerMenu
                    currentCustomer={this.state.currentCustomer}
                    ></CustomerMenu>
                    <CustomerAppointments></CustomerAppointments>
                </div>
            </div>
        )
    }

    getCustomer() {
        var customerResponse = JSON.parse(sessionStorage.getItem('customerResponse'))
        var headers = {
            Authorization: 'Token ' + customerResponse['token']
        }

        CustomerDataService.get(customerResponse['user_id'], headers)
            .then(response => {
                this.setState({
                    currentCustomer: {
                        id: response.data['id'],
                        name: response.data['name'],
                        email: response.data['email'],
                        password: response.data['password'],
                        first_surname: response.data['first_surname'],
                        second_surname: response.data['second_surname']
                    }
                })
            })
            .catch(e => {
                console.log(e);
            });
    }
}