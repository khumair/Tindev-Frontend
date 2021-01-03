import {
  REGISTER_JOBSEEKER_DATA_REQUEST,
  REGISTER_JOBSEEKER_DATA_SUCCESS,
  REGISTER_JOBSEEKER_DATA_FAIL,
  Credential,
} from '../types'

export const registerJobseekerDataRequest = (data: Credential) => {
  console.log('Action fired')
  return {
    type: REGISTER_JOBSEEKER_DATA_REQUEST,
    payload: data,
  }
}

export const registerJobseekerDataSuccess = (data: Credential) => {
  return {
    type: REGISTER_JOBSEEKER_DATA_SUCCESS,
    payload: data,
  }
}

export const registerJobseekerDataFail = (error: string) => {
  return {
    type: REGISTER_JOBSEEKER_DATA_FAIL,
    payload: error,
  }
}
