import { connect } from 'react-redux';
import { getEmployeeAction } from './action';
import EmployeeEdit from './EmployeeEdit';

export const mapStateToProps = ({ employeeEdit }) => {
  return {
    employeeEdit,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getEmployee: (id) => dispatch(getEmployeeAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);
