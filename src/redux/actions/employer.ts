import {
  Credential,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
  LOGIN_EMPLOYER_REQUEST,
  LOGIN_EMPLOYER_SUCCESS,
  LOGIN_EMPLOYER_FAIL,
  LOGOUT_EMPLOYER,
} from '../types'

export const registerEmployerRequest = (email: string, password: string) => {
  return {
    type: REGISTER_EMPLOYER_REQUEST,
    payload: {
      email,
      password,
    },
  }
}

export const registerEmployerSuccess = (employerInfo: Credential) => {
  return {
    type: REGISTER_EMPLOYER_SUCCESS,
    payload: employerInfo,
  }
}

export const registerEmployerFail = () => {
  return {
    type: REGISTER_EMPLOYER_FAIL,
  }
}

export const loginEmployerRequest = (email: string, password: string) => {
  return {
    type: LOGIN_EMPLOYER_REQUEST,
    payload: {
      email,
      password,
    },
  }
}

export const loginEmployerSuccess = (employerInfo: Credential) => {
  return {
    type: LOGIN_EMPLOYER_SUCCESS,
    payload: employerInfo,
  }
}

export const loginEmployerFail = () => {
  return {
    type: LOGIN_EMPLOYER_FAIL,
  }
}

export const logoutEmployer = () => {
  return {
    type: LOGOUT_EMPLOYER,
  }
}
