import {
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
} from '../../types'

export const registerEmployerRequest = (credentials: {}) => {
  return {
    type: REGISTER_EMPLOYER_REQUEST, 
  }
}

export const registerEmployerSuccess = (credentials: any) => {
  return {
    type: REGISTER_EMPLOYER_SUCCESS,
    payload: credentials,
  }
}

export const registerEmployerFail = () => {
  return {
    type: REGISTER_EMPLOYER_FAIL,
  }
}