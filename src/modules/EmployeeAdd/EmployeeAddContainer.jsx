import { connect } from 'react-redux';
import { storeAction } from './action';
import EmployeeAdd from './EmployeeAdd';

export const mapDispatchToProps = (dispatch) => ({
  store: (data) => dispatch(storeAction(data))
});

export default connect(null, mapDispatchToProps)(EmployeeAdd);
