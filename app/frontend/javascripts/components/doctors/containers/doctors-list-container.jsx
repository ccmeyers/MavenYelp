import DoctorsList from '../components/doctors-list';
import { connect } from 'react-redux';
import { collectionActions } from 'brainstem-redux';

const mapStateToProps = (store) => ({
  doctors: store.brainstem.doctors
});

const mapDispatchToProps = (dispatch) => ({
  fetchDoctors: () => {
    dispatch(collectionActions.fetch('doctors'));
  }
});

const DoctorsListContainer = connect(mapStateToProps, mapDispatchToProps)(DoctorsList);
export default DoctorsListContainer;
