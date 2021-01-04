import {
  employerActions,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
  JOB_POST_REQUEST,
  JOB_POST_SUCCESS,
  JOB_POST_FAIL,
} from '../types'

const initialState = {
  credentials: '',
  loading: false,
  error: null,
  jobPost: {
    jobTitle: '',
    jobDescription: '',
    city: '',
    country: '',
    skills: [],
  },
}

const test = (state = initialState, action: employerActions) => {
  switch (action.type) {
    case REGISTER_EMPLOYER_REQUEST:
      return { ...state, loading: true, credentials: '' }
    case REGISTER_EMPLOYER_SUCCESS:
      return { ...state, loading: false, credentials: action.payload }
    case REGISTER_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case JOB_POST_REQUEST:
      return { ...state, loading: true, jobPost: action.payload }
    case JOB_POST_SUCCESS:
      return { ...state, loading: false, jobPost: {} }
    case JOB_POST_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default test
