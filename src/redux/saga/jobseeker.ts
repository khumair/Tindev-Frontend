import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'
import { AppState } from '../types'

import {
  registerJobseekerSuccess,
  registerJobseekerFail,
  loginJobseekerSuccess,
  loginJobseekerFail,
} from '../../redux/actions/jobseeker'

const credential = (state: AppState) => state.jobseeker.credential
function* registerJobseekerSaga() {
  try {
    const credentialData = yield select(credential)
    const req = yield axios.post('/jobseeker', {
      info: {},
      credential: credentialData,
    })
    yield put(registerJobseekerSuccess(req.data))
  } catch (error) {
    yield put(registerJobseekerFail())
  }
}

function* loginJobseekerSaga() {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/jobseeker/login/local', {
      email: credentialData.email,
      password: credentialData.password,
    })
    yield put(loginJobseekerSuccess(res.data))
    localStorage.setItem('jobSeekerInfo', JSON.stringify(res.data))
  } catch (error) {
    yield put(loginJobseekerFail())
  }
}

export const jobseekerInfoFromStorage = localStorage.getItem('jobSeekerInfo')
  ? //@ts-ignore
    JSON.parse(localStorage.getItem('jobSeekerInfo'))
  : null

const sagaWatcher = [
  takeLatest('REGISTER_JOBSEEKER_REQUEST', registerJobseekerSaga),
  takeLatest('LOGIN_JOBSEEKER_REQUEST', loginJobseekerSaga),
]

export default sagaWatcher
