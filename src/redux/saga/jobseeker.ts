import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'
import { AppState } from '../types'

import {
  registerJobSeekerSuccess,
  registerJobSeekerFail,
  loginJobSeekerSuccess,
  loginJobSeekerFail,
} from '../../redux/actions/jobseeker'

const credentials = (state: AppState) => state.jobSeeker.credentials
function* registerJobSeekerSaga() {
  try {
    const credentialData = yield select(credentials)
    const req = yield axios.post('/jobSeeker', { credentials: credentialData })
    yield put(registerJobSeekerSuccess(req.data))
  } catch (error) {
    yield put(registerJobSeekerFail())
  }
}

function* loginJobSeekerSaga() {
  try {
    const credentialData = yield select(credentials)
    const config = { headers: { Content_Type: 'Application/json' } }
    const { data } = yield axios.post(
      '/jobSeeker/login/local',
      { jobSeekerInfo: credentialData },
      config
    )
    yield put(loginJobSeekerSuccess(data))
  } catch (error) {
    yield put(loginJobSeekerFail())
  }

  localStorage.setItem('jobSeekerInfo', JSON.stringify(credentials))
}

export const jobSeekerInfoFromStorage = localStorage.getItem('jobSeekerInfo')
  ? //@ts-ignore
    JSON.parse(localStorage.getItem('jobSeekerInfo'))
  : null

const sagaWatcher = [
  takeLatest('REGISTER_JOBSEEKER_REQUEST', registerJobSeekerSaga),
  takeLatest('LOGIN_JOBSEEKER_REQUEST', loginJobSeekerSaga),
]

export default sagaWatcher
