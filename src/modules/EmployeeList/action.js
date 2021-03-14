export const GET_LIST_EMPLOYEE = 'GET_LIST_EMPLOYEE';
export const GET_LIST_EMPLOYEE_SUCCESS = 'GET_LIST_EMPLOYEE_SUCCESS';

export const getListEmployeeAction = () => ({
  type: GET_LIST_EMPLOYEE,
});

export const getListEmployeeActionSuccess = (employees) => ({
  type: GET_LIST_EMPLOYEE_SUCCESS,
  payload: employees,
});
