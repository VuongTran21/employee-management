export const GET_EMPLOYEE = 'GET_EMPLOYEE';
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';

export const getEmployeeAction = (id) => {
  return {
    type: GET_EMPLOYEE,
    id
  }
};

export const getEmployeeActionSuccess = (employee) => ({
  type: GET_EMPLOYEE_SUCCESS,
  payload: employee,
});
