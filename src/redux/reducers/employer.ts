import {
  EmployerActions,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
  UPDATE_EMPLOYER_REQUEST,
  UPDATE_EMPLOYER_SUCCESS,
  UPDATE_EMPLOYER_FAIL,
  JOB_POST_SUCCESS,
  JOB_POST_REQUEST,
  JOB_POST_FAIL,
  JOB_UPDATE_REQUEST,
  JOB_UPDATE_SUCCESS,
  JOB_UPDATE_FAIL,
  JOB_DELETE_REQUEST,
  JOB_DELETE_SUCCESS,
  JOB_DELETE_FAIL,
} from '../types'

const initialState = {
  credential: { email: '', password: '' },
  employerInfo: {},
  loading: false,
  error: null,
  jobPost: {
    title: '',
    jobDescription: '',
    seniority: '',
    skills: [],
  },
}

const employer = (state = initialState, action: EmployerActions) => {
  switch (action.type) {
    case REGISTER_EMPLOYER_REQUEST:
      return { ...state, loading: true, credential: action.payload }
    case REGISTER_EMPLOYER_SUCCESS:
      return { ...state, loading: false, employerInfo: action.payload }
    case REGISTER_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case UPDATE_EMPLOYER_REQUEST:
      return { ...state, loading: true }
    case UPDATE_EMPLOYER_SUCCESS:
      return {
        ...state,
        loading: false,
        employerInfo: action.payload.companyName,
      }
    case UPDATE_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case JOB_POST_REQUEST:
      return { ...state, loading: true, jobPost: action.payload }
    case JOB_POST_SUCCESS:
      return { ...state, loading: false, jobPost: {} }
    case JOB_POST_FAIL:
      return { ...state, loading: false, error: action.payload }
    case JOB_DELETE_REQUEST:
      return { ...state, loading: true }
    case JOB_DELETE_SUCCESS:
      return { ...state, loading: false }
    case JOB_DELETE_FAIL:
      return { ...state, error: action.payload }
    case JOB_UPDATE_REQUEST:
      return { ...state, loading: true }
    case JOB_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        jobPost: action.payload,
      }
    case JOB_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default employer
