import {
  Credential,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
  UPDATE_EMPLOYER_REQUEST,
  UPDATE_EMPLOYER_SUCCESS,
  UPDATE_EMPLOYER_FAIL,
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

export const updateEmployerRequest = (data: Credential) => {
  return {
    type: UPDATE_EMPLOYER_REQUEST,
    payload: {
      data,
    },
  }
}

export const updateEmployerSuccess = (data: Credential) => {
  return {
    type: UPDATE_EMPLOYER_SUCCESS,
    payload: data,
  }
}

export const updateEmployerFail = (error: string) => {
  return {
    type: UPDATE_EMPLOYER_FAIL,
    payload: error,
  }
}
