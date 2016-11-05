import React from 'react';

class DoctorsList extends React.Component {
  componentWillMount() {
    this.props.fetchDoctors();
  }

  render() {
    return (
      <div className="doctors-list">
        <h3>All Doctors:</h3>
        <p>{this.props.doctors}</p>
      </div>
    )
  }
};

export default DoctorsList;
