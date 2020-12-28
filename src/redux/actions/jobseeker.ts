import {
  REGISTER_JOBSEEKER_REQUEST,
  REGISTER_JOBSEEKER_SUCCESS,
  REGISTER_JOBSEEKER_FAIL,
} from '../types'

export const registerJobSeekerRequest = (credentials: {}) => {
  return {
    type: REGISTER_JOBSEEKER_REQUEST,
    payload: credentials,
  }
}

export const registerJobSeekerSuccess = (credentials: Credential) => {
  return {
    type: REGISTER_JOBSEEKER_SUCCESS,
    payload: credentials,
  }
}

export const registerJobSeekerFail = () => {
  return {
    type: REGISTER_JOBSEEKER_FAIL,
  }
}
