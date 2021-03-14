import { put, call, takeLeading } from 'redux-saga/effects';
import { GET_EMPLOYEE, getEmployeeActionSuccess } from './action';
import { showApi } from '../../helpers/api';

export function* getEmployeeSaga({ id }) {
  try {
    const employee = yield call(showApi, id);
    yield put(getEmployeeActionSuccess(employee));
  } catch (err) {
    console.error('Unexpected Error'.err);
  }
}

export default function* rootSaga() {
  yield takeLeading(GET_EMPLOYEE, getEmployeeSaga);
}
