import {
  UPDATE_JOBSEEKER_REQUEST,
  UPDATE_JOBSEEKER_SUCCESS,
  UPDATE_JOBSEEKER_FAIL,
  Credential,
} from '../types'

export const updateJobseekerRequest = (data: Credential) => {
  console.log('Action fired')
  return {
    type: UPDATE_JOBSEEKER_REQUEST,
    payload: data,
  }
}

export const updateJobseekerSuccess = (data: Credential) => {
  return {
    type: UPDATE_JOBSEEKER_SUCCESS,
    payload: data,
  }
}

export const updateJobseekerFail = (error: string) => {
  return {
    type: UPDATE_JOBSEEKER_FAIL,
    payload: error,
  }
}
