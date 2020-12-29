import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'
import { AppState } from '../types'

import {
  registerEmployerSuccess,
  registerEmployerFail,
  loginEmployerSuccess,
  loginEmployerFail,
} from '../../redux/actions/employer'

const credentials = (state: AppState) => state.employer.credentials
function* registerEmployerSaga() {
  try {
    const credentialData = yield select(credentials)
    const req = yield axios.post('/employer', { credentials: credentialData })
    yield put(registerEmployerSuccess(req.data))
  } catch (error) {
    yield put(registerEmployerFail())
  }
}

function* loginEmployerSaga() {
  try {
    const credentialData = yield select(credentials)
    const config = { headers: { Content_Type: 'Application/json' } }
    const { data } = yield axios.post(
      '/employer/login/local',
      { employerInfo: credentialData },
      config
    )
    yield put(loginEmployerSuccess(data))
  } catch (error) {
    yield put(loginEmployerFail())
  }

  localStorage.setItem('employerInfo', JSON.stringify(credentials))
}

export const employerInfoFromStorage = localStorage.getItem('employerInfo')
  ? //@ts-ignore
    JSON.parse(localStorage.getItem('employerInfo'))
  : null

const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
  takeLatest('LOGIN_EMPLOYER_REQUEST', loginEmployerSaga),
]

export default sagaWatcher
