import { put, all, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import { registerEmployerSuccess } from '../../redux/actions/employerActions'
import { url } from '../../App'

function* registerEmployerSaga(email: any, password: any) {
  try {
    const req = yield axios.post(
       `${url}/employer`,
       { email, password }
    )
      yield put(registerEmployerSuccess(req.data))
  } catch (error) {
    console.log(error)
  }
}

function* saveState() {
  const state = yield select()
  yield localStorage.setItem('initState', JSON.stringify(state))
}

const sagaWatcher = [
  /* @ts-ignore */
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
  takeLatest('*', saveState)
]

export default function* rootSaga() {
  yield all([...sagaWatcher])
}
