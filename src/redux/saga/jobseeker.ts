import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { registerJobseekerDataFail } from './../actions/jobseeker'

function* registerJobseekerDataSaga(credential: Credential) {
  console.log('registerJobseekerDataSaga HITS . . . ')
  try {
    // const jobseekerId = action.payload

    const response = yield axios.post('/jobSeeker', { credential })
    console.log('response::: >', response)
  } catch (error) {
    yield put(registerJobseekerDataFail(error.message))
  }
}

const sagaWatcher = [
  takeLatest('REGISTER_JOBSEEKER_DATA_REQUEST', registerJobseekerDataSaga),
]

export default sagaWatcher
