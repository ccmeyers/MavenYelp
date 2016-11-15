import React from 'react';

class Doctor extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.first_name} {this.props.last_name}</li>
        <li>{this.props.address}</li>
        <li>{this.props.website}</li>
      </ul>
    )
  }
}

export default Doctor;
