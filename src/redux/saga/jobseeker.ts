import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'
import { AppState } from '../types'

import { registerJobSeekerSuccess } from '../../redux/actions/jobseeker'

const credentials = (state: AppState) => state.jobSeeker.credentials
function* registerEmployerSaga() {
  const credentialData = yield select(credentials)
  try {
    const req = yield axios.post('/employer', { credentialData })
    yield put(registerJobSeekerSuccess(req.data))
  } catch (error) {
    console.log(error)
  }
}

const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
]

export default sagaWatcher
