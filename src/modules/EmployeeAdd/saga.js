import { put, call, takeLeading } from 'redux-saga/effects';
import { storeApi } from '../../helpers/api';
import { STORE, storeEmployeeActionSuccess } from './action';

export function* storeEmployeeSaga({ payload }) {
  try {
    const employee = yield call(storeApi, payload);
    yield put(storeEmployeeActionSuccess(employee));
  } catch (err) {
    console.error('Unexpected Error'.err);
  }
}

export default function* rootSaga() {
  yield takeLeading(STORE, storeEmployeeSaga);
}
