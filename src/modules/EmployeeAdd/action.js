export const STORE = 'STORE';
export const STORE_SUCCESS = 'STORE_SUCCESS';

export const storeAction = (data) => {
  return {
    type: STORE,
    payload: data,
  };
};

export const storeEmployeeActionSuccess = (employee) => {
  return {
    type: STORE_SUCCESS,
    payload: employee,
  };
};
