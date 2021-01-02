import {
  FETCH_JOBSEEKER_REQUEST,
  FETCH_JOBSEEKER_SUCCESS,
  FETCH_JOBSEEKER_FAIL,
  jobseekerActions,
} from '../types'

export const fetchJobseekerRequest = (jobseekerId: string) => {
  return {
    type: FETCH_JOBSEEKER_REQUEST,
    payload: jobseekerId,
  }
}

export const fetchJobseekerSuccess = (data: jobseekerActions) => {
  return {
    type: FETCH_JOBSEEKER_SUCCESS,
    payload: data,
  }
}

export const fetchJobseekerFail = (error: jobseekerActions) => {
  return {
    type: FETCH_JOBSEEKER_FAIL,
    payload: error,
  }
}
