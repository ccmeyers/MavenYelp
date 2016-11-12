import React from 'react';

class DoctorsList extends React.Component {
  componentWillMount() {
    this.props.fetchDoctors();
  }


  render() {
    const doctors = Object.keys(this.props.doctors);
    console.log(doctors);
    return (
      <div className="doctors-list">
        <h3>All Doctors:</h3>
        <p>{doctors}</p>
      </div>
    )
  }
};

export default DoctorsList;
