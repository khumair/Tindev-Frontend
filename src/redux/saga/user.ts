import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import LocalStorage from '../../local-storage'
import { LoginUserRequestAction } from '../types'

import { loginUserSuccess, loginUserFail } from '../actions/user'

// function* loginUserSaga() {
//   try {
//     const credentialData = yield select(credential)
//     const res = yield axios.post('/login/local', {
//       email: credentialData.email,
//       password: credentialData.password,
//     })
//     console.log('res', res)

//     yield put(loginUserSuccess(res.data.payload))
//     yield LocalStorage.saveToken(res.data.payload.token)
//   } catch (error) {
//     yield put(loginUserFail())
//   }
// }

function* loginUserSaga(action: LoginUserRequestAction) {
  try {
    const email = yield action.payload.credential.email
    const password = yield action.payload.credential.password
    const history = yield action.payload.history
    const res = yield axios.post('/login/local', { email, password })

    console.log('res', res)
    if (res.status === 200) {
      //@ts-ignore
      yield put(success(res.data))
      if (res.data.role === 'employer') {
        history.push('/company/profile')
      }
      if (res.data.role === 'jobseeker') {
        history.push('/jobseeker/profile')
      }
    }

    yield put(loginUserSuccess(res.data.payload))
    yield LocalStorage.saveToken(res.data.payload.token)
  } catch (error) {
    yield put(loginUserFail())
  }
}

const sagaWatcher = [takeLatest('LOGIN_USER_REQUEST', loginUserSaga)]

export default sagaWatcher
