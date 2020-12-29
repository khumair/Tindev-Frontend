import {
  Credential,
  REGISTER_JOBSEEKER_REQUEST,
  REGISTER_JOBSEEKER_SUCCESS,
  REGISTER_JOBSEEKER_FAIL,
} from '../types'

export const registerJobSeekerRequest = (email: any, password: any) => {
  return {
    type: REGISTER_JOBSEEKER_REQUEST,
    payload: email,
    password,
  }
}

export const registerJobSeekerSuccess = (jobSeekerInfo: Credential) => {
  return {
    type: REGISTER_JOBSEEKER_SUCCESS,
    payload: jobSeekerInfo,
  }
}

export const registerJobSeekerFail = () => {
  return {
    type: REGISTER_JOBSEEKER_FAIL,
  }
}
