import {
  EmployerActions,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
} from '../types'

const initialState = {
  credentials: { email: '', password: '' },
  employerInfo: {},
  loading: false,
  error: null,
}

const employer = (state = initialState, action: EmployerActions) => {
  switch (action.type) {
    case REGISTER_EMPLOYER_REQUEST:
      return { ...state, loading: true, credentials: action.payload }
    case REGISTER_EMPLOYER_SUCCESS:
      return { ...state, employerInfo: action.payload, loading: false }
    case REGISTER_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default employer
