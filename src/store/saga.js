import { fork } from 'redux-saga/effects';

import watchGetEmployeeList from '../modules/EmployeeList/saga';
import watchGetEmployee from '../modules/EmployeeEdit/saga';
import watchStoreEmployee from '../modules/EmployeeAdd/saga';

export default function* rootSaga() {
  yield fork(watchGetEmployeeList);
  yield fork(watchGetEmployee);
  yield fork(watchStoreEmployee);
}
