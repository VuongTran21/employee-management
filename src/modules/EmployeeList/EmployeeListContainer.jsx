import { connect } from 'react-redux';
import EmployeeList from './EmployeeList';
import { getListEmployeeAction } from './action';

export const mapStateToProps = ({ employeeList }) => {
  return {
    employeeList,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getListEmployee: () => dispatch(getListEmployeeAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
