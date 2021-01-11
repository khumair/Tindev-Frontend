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

    if (res.data.status === 200) {
      yield put(loginUserSuccess(res.data.payload))
      yield LocalStorage.saveToken(res.data.payload.token)

      if (res.data.payload.role === 'employer') {
        history.push('/company/profile')
      } else if (res.data.payload.role === 'job seeker') {
        history.push('/jobseeker/profile')
      } else {
        throw new Error()
      }
    }
  } catch (error) {
    const history = yield action.payload.history
    history.push('/')
    yield put(loginUserFail())
  }
}

const sagaWatcher = [takeLatest('LOGIN_USER_REQUEST', loginUserSaga)]

export default sagaWatcher
