import React from "react";
import DoctorDataService from "../services/doctor.service";

export default class Doctor extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
          currentDoctor: {
            name: "",
            first_surname: "",
            second_surname: "",
            membership_number: ""
          }
        };
    }


    componentDidMount() {
      this.getDoctor(3)
    }

    render() {
        return (
          <button> Doctor con id 3: {this.state.currentDoctor.first_surname} </button>
        )
    }



  getDoctor(id) {
    DoctorDataService.get(id)
      .then(response => {
        this.setState({
          currentDoctor: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

}