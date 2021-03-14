import {
  GET_EMPLOYEE_SUCCESS,
} from './action'

const initialState = {
  employee: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        employee: action.payload,
      }
    }
    default:
      return state;
  }
};
