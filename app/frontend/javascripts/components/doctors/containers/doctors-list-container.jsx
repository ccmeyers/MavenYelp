import DoctorsList from '../components/doctors-list';
import { connect } from 'react-redux';
import { collectionActions } from 'brainstem-redux';

const mapStateToProps = (store) => {
  const doctors = store.brainstem.doctors;

  return {
    doctors: doctors,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchDoctors: () => {
    dispatch(collectionActions.fetch('doctors'));
  }
});

const DoctorsListContainer = connect(mapStateToProps, mapDispatchToProps)(DoctorsList);
export default DoctorsListContainer;
