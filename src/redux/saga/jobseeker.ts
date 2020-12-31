import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'
import { AppState } from '../types'

import {
  registerJobSeekerSuccess,
  registerJobSeekerFail,
  loginJobSeekerSuccess,
  loginJobSeekerFail,
} from '../../redux/actions/jobseeker'

const credential = (state: AppState) => state.jobSeeker.credential
function* registerJobSeekerSaga() {
  try {
    const credentialData = yield select(credential)
    const req = yield axios.post('/jobSeeker', {
      info: {},
      credential: credentialData,
    })
    yield put(registerJobSeekerSuccess(req.data))
  } catch (error) {
    yield put(registerJobSeekerFail())
  }
}

function* loginJobSeekerSaga() {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/jobSeeker/login/local', {
      email: credentialData.email,
      password: credentialData.password,
    })
    yield put(loginJobSeekerSuccess(res.data))
  } catch (error) {
    yield put(loginJobSeekerFail())
  }

  //localStorage.setItem('jobSeekerInfo', JSON.stringify(credential))
}

// export const jobSeekerInfoFromStorage = localStorage.getItem('jobSeekerInfo')
//   ? //@ts-ignore
//     JSON.parse(localStorage.getItem('jobSeekerInfo'))
//   : null

const sagaWatcher = [
  takeLatest('REGISTER_JOBSEEKER_REQUEST', registerJobSeekerSaga),
  takeLatest('LOGIN_JOBSEEKER_REQUEST', loginJobSeekerSaga),
]

export default sagaWatcher
