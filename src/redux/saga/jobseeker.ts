import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { fetchJobseekerFail } from './../actions/jobseeker'

function* fetchJobseekerSaga(action: any) {
  console.log('fetchJobseekerSaga HITS . . . ')
  try {
    const jobseekerId = action.payload
    console.log('jobseekerId in saga', jobseekerId)
    const response = yield axios.get('jobSeeker')
    console.log('response::: >', response)
  } catch (error) {
    yield put(fetchJobseekerFail(error.message))
  }
}

const sagaWatcher = [takeLatest('FETCH_JOBSEEKER_REQUEST', fetchJobseekerSaga)]

export default sagaWatcher
