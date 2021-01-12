import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import {
  RegisterEmployerRequestAction,
  AppState,
  DeletingRequestActionType,
  UpdateJobPostRequestAction,
} from './../types'
import {
  registerEmployerSuccess,
  registerEmployerFail,
  updateEmployerSuccess,
  updateEmployerFail,
} from '../../redux/actions/employer'
import {
  registerJobPostSuccess,
  registerJobPostFail,
  updateJobPostSuccess,
  updateJobPostFail,
  deleteJobPostFail,
  deleteJobPostSuccess,
} from '../actions/jobpost'

const credential = (state: AppState) => state.employer.credential
const jobPostFormData = (state: AppState) => state.employer.jobPost
const companyName = (state: AppState) => state.employer.employerInfo.companyName

function* registerEmployerSaga(action: RegisterEmployerRequestAction) {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/employer', {
      credential: credentialData,
    })
    yield put(registerEmployerSuccess(res.data))
    const history = action.payload.history
    if (res.data.status === 201) {
      yield history.push('/login')
    }
  } catch (error) {
    yield put(registerEmployerFail())
  }
}

function* updateEmployerSaga() {
  const res = yield axios.patch('/employer', companyName)
  try {
    yield put(updateEmployerSuccess(res.data.payload.employerInfo.companyName))
  } catch (error) {
    yield put(updateEmployerFail(error))
  }
}

function* creatingJobPostSaga() {
  try {
    const job = yield select(jobPostFormData)
    const res = yield axios.post('/employer/jobs', job)
    console.log(res)
    yield put(registerJobPostSuccess())
  } catch (e) {
    yield put(registerJobPostFail(e))
  }
}

function* updateJobPostSaga(action: UpdateJobPostRequestAction) {
  const jobPostId = yield action.payload
  const res = yield axios.patch(`/employer/jobs/${jobPostId}`)
  try {
    yield put(updateJobPostSuccess(res.data))
  } catch (error) {
    yield put(updateJobPostFail(error))
  }
}

function* deletingJobPostSaga(action: DeletingRequestActionType) {
  try {
    const jobPostId = yield action.payload
    yield axios.delete(`/employer/jobs/${jobPostId}`)
    yield put(deleteJobPostSuccess())
  } catch (e) {
    yield put(deleteJobPostFail(e))
  }
}
const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
  takeLatest('UPDATE_EMPLOYER_REQUEST', updateEmployerSaga),
  takeLatest('JOB_POST_REQUEST', creatingJobPostSaga),
  takeLatest('JOB_UPDATE_REQUEST', updateJobPostSaga),
  takeLatest('JOB_DELETE_REQUEST', deletingJobPostSaga),
]

export default sagaWatcher
