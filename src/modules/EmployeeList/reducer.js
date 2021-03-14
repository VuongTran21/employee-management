import {
  GET_LIST_EMPLOYEE_SUCCESS,
} from './action'

const initialState = {
  employees: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        employees: action.payload,
      }
    }
    default:
      return state;
  }
};
