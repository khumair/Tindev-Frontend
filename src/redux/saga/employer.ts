import { put, all, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import { registerEmployerSuccess } from '../../redux/actions/employer';

function* registerEmployerSaga(credentials: Credential) {
  try {
    const req = yield axios.post('/employer', { credentials });
    yield put(registerEmployerSuccess(req.data));
  } catch (error) {
    console.log(error);
  }
}

const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
];

export default sagaWatcher;
