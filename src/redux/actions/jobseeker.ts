import {
  Credential,
  REGISTER_JOBSEEKER_REQUEST,
  REGISTER_JOBSEEKER_SUCCESS,
  REGISTER_JOBSEEKER_FAIL,
  LOGIN_JOBSEEKER_REQUEST,
  LOGIN_JOBSEEKER_SUCCESS,
  LOGIN_JOBSEEKER_FAIL,
  LOGOUT_JOBSEEKER,
} from '../types'

export const registerJobseekerRequest = (email: string, password: string) => {
  return {
    type: REGISTER_JOBSEEKER_REQUEST,
    payload: {
      email,
      password,
    },
  }
}

export const registerJobseekerSuccess = (jobSeekerInfo: Credential) => {
  return {
    type: REGISTER_JOBSEEKER_SUCCESS,
    payload: jobSeekerInfo,
  }
}

export const registerJobseekerFail = () => {
  return {
    type: REGISTER_JOBSEEKER_FAIL,
  }
}

export const loginJobseekerRequest = (email: string, password: string) => {
  return {
    type: LOGIN_JOBSEEKER_REQUEST,
    payload: {
      email,
      password,
    },
  }
}

export const loginJobseekerSuccess = (jobSeekerInfo: Credential) => {
  return {
    type: LOGIN_JOBSEEKER_SUCCESS,
    payload: jobSeekerInfo,
  }
}

export const loginJobseekerFail = () => {
  return {
    type: LOGIN_JOBSEEKER_FAIL,
  }
}

export const logoutJobseeker = () => {
  return {
    type: LOGOUT_JOBSEEKER,
  }
}
