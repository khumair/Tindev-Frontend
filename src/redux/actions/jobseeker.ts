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

export const registerJobSeekerRequest = (
  info: any,
  email: string,
  password: string
) => {
  return {
    type: REGISTER_JOBSEEKER_REQUEST,
    payload: {
      info,
      email,
      password,
    },
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

export const loginJobSeekerRequest = (email: string, password: string) => {
  return {
    type: LOGIN_JOBSEEKER_REQUEST,
    payload: {
      email,
      password,
    },
  }
}

export const loginJobSeekerSuccess = (jobSeekerInfo: Credential) => {
  return {
    type: LOGIN_JOBSEEKER_SUCCESS,
    payload: jobSeekerInfo,
  }
}

export const loginJobSeekerFail = () => {
  return {
    type: LOGIN_JOBSEEKER_FAIL,
  }
}

export const logoutJobSeeker = () => {
  return {
    type: LOGOUT_JOBSEEKER,
  }
}
