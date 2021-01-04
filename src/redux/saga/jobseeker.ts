import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  updateJobseekerFail,
  updateJobseekerSuccess,
} from './../actions/jobseeker'

function* updateJobseekerSaga(credential: Credential) {
  try {
    const response = yield axios.patch('/jobSeeker', { credential })
    console.log('response::: >', response)
    yield put(updateJobseekerSuccess(response.data))
  } catch (error) {
    yield put(updateJobseekerFail(error.message))
  }
}

const sagaWatcher = [
  takeLatest('UPDATE_JOBSEEKER_REQUEST', updateJobseekerSaga),
]

export default sagaWatcher
