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

export const registerJobSeekerRequest = (email: any, password: any) => {
  return {
    type: REGISTER_JOBSEEKER_REQUEST,
    payload: {
      info: {},
      credentials: {
        email,
        password,
      },
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
      info: {},
      credentials: {
        email,
        password,
      },
    },
  }
}

export const loginJobSeekerSuccess = (employerInfo: Credential) => {
  return {
    type: LOGIN_JOBSEEKER_SUCCESS,
    payload: employerInfo,
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
