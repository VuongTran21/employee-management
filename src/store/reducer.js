import { combineReducers } from 'redux';

import employeeListReducer from '../modules/EmployeeList/reducer';
import employeeEditReducer from '../modules/EmployeeEdit/reducer';
import employeeAddReducer from '../modules/EmployeeAdd/reducer';

const rootReducer = {
  employeeList: employeeListReducer,
  employeeEdit: employeeEditReducer,
  employeeAdd: employeeAddReducer,
};

export default combineReducers(rootReducer);
