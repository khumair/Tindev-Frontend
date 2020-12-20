import { put, all, takeLatest, select, fork } from 'redux-saga/effects'
import axios from 'axios'

import { watchNewGeneratedNumberRequestStart } from './numberfile'
import { registerEmployerSuccess } from '../../redux/actions/employerActions'

type Credentials = {
  email: string
  password: string
}

const config = {
  headers: {
    'Content_Type': 'application/json'
  }
}

function* sendEmployerCredentialsSaga() {
  try {
    const req = yield axios.post(
       '/employer',
      // { email, password } as Credentials, 
      // config
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
  takeLatest('REGISTER_EMPLOYER_REQUEST', sendEmployerCredentialsSaga),
  takeLatest('*', saveState)
]

export default function* rootSaga() {
  yield all([...sagaWatcher])
}
