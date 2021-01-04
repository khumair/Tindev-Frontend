import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import { AppState } from '../types'
import LocalStorage from '../../local-storage'

import {
  registerEmployerSuccess,
  registerEmployerFail,
  loginEmployerSuccess,
  loginEmployerFail,
} from '../../redux/actions/employer'

const credential = (state: AppState) => state.employer.credential
function* registerEmployerSaga() {
  try {
    const credentialData = yield select(credential)
    const req = yield axios.post('/employer', { credential: credentialData })
    yield put(registerEmployerSuccess(req.data))
  } catch (error) {
    yield put(registerEmployerFail())
  }
}

function* loginEmployerSaga() {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/employer/login/local', {
      email: credentialData.email,
      password: credentialData.password,
    })
    yield console.log(res)
    yield put(loginEmployerSuccess(res))
    //yield localStorage.setItem('employerInfo', JSON.stringify(res.data))
    yield LocalStorage.saveToken(res.data.payload.token)
  } catch (error) {
    // TODO: Fix error handling
    yield put(loginEmployerFail())
  }
}

// export const employerInfoFromStorage = localStorage.getItem('employerInfo')
//   ? //@ts-ignore
//     JSON.parse(localStorage.getItem('employerInfo'))
//   : null

const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
  takeLatest('LOGIN_EMPLOYER_REQUEST', loginEmployerSaga),
]

export default sagaWatcher
