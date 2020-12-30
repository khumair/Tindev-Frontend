import { REGISTER_EMPLOYER_REQUEST, JOB_POST_REQUEST } from '../types'
import { registerJobPostSuccess } from './../actions/jobpost'
import { AppState } from './../types'
import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import { registerEmployerSuccess } from '../../redux/actions/employer'

const jobPostFormData = (state: AppState) => state.employer.jobPost

function* registerEmployerSaga(credentials: Credential) {
  try {
    const req = yield axios.post('/employer', { credentials })
    yield put(registerEmployerSuccess(req.data))
  } catch (error) {
    console.log(error)
  }
}

function* creatingJobPostSaga() {
  try {
    const job = yield select(jobPostFormData)
    const res = yield axios.post('/jobpost', job)
    console.log(res)
    yield put(registerJobPostSuccess())
  } catch (e) {
    console.log(e)
  }
}

const sagaWatcher = [
  takeLatest(REGISTER_EMPLOYER_REQUEST, registerEmployerSaga),
  takeLatest(JOB_POST_REQUEST, creatingJobPostSaga),
]

export default sagaWatcher
