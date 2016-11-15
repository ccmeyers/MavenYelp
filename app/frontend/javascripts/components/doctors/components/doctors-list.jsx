import React from 'react';
import Doctor from './doctor';

class DoctorsList extends React.Component {
  componentWillMount() {
    this.props.fetchDoctors();
  }


  render() {
    const doctorsObj = this.props.doctors;
    const doctorsArray = [];
    for(const item in doctorsObj){
      doctorsArray.push(doctorsObj[item]);
    }
    const doctors = doctorsArray.map(doctor => <Doctor key={doctor.id} {...doctor}/>);

    return (
      <div className="doctors-list">
        <h3>All Doctors:</h3>
        {doctors}
      </div>
    )
  }
};

export default DoctorsList;
