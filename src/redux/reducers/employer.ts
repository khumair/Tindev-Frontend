import {
  EmployerActions,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
} from '../types'

const initialState = {
  credentials: { email: '', password: '' },
  loading: false,
  error: null,
}

const test = (state = initialState, action: EmployerActions) => {
  switch (action.type) {
    case REGISTER_EMPLOYER_REQUEST:
      return { loading: true }
    case REGISTER_EMPLOYER_SUCCESS:
      return { loading: false, credentials: action.payload.credentials }
    case REGISTER_EMPLOYER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default test
