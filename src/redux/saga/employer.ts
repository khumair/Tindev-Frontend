import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'
import { AppState } from '../types'

import { registerEmployerSuccess } from '../../redux/actions/employer'

const credentials = (state: AppState) => state.employer.credentials
function* registerEmployerSaga() {
  const credentialData = yield select(credentials)
  try {
    const req = yield axios.post('/employer', { credentialData })
    yield put(registerEmployerSuccess(req.data))
  } catch (error) {
    console.log(error)
  }
}

const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
]

export default sagaWatcher
