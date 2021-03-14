import { put, call, takeLeading } from 'redux-saga/effects';
import {
  GET_LIST_EMPLOYEE,
  getListEmployeeActionSuccess,
} from './action';
import { getListEmployeeApi } from '../../helpers/api';

export function* getListEmployeeSaga() {
  try {
    const employees = yield call(getListEmployeeApi);
    yield put(getListEmployeeActionSuccess(employees));
  } catch (err) {
    console.error('Unexpected Error'.err);
  }
}

export default function* rootSaga() {
  yield takeLeading(GET_LIST_EMPLOYEE, getListEmployeeSaga);
}
