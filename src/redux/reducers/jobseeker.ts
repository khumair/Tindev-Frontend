import {
  jobseekerActions,
  FETCH_JOBSEEKER_FAIL,
  FETCH_JOBSEEKER_REQUEST,
  FETCH_JOBSEEKER_SUCCESS,
} from '../types'

const initState = {
  credentials: {},
  loading: false,
  error: null,
}

const jobseekerReducer = (state = initState, action: jobseekerActions) => {
  switch (action.type) {
    case FETCH_JOBSEEKER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_JOBSEEKER_SUCCESS:
      return {
        ...state,
        loading: false,
        credentials: action.payload,
      }
    case FETCH_JOBSEEKER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default jobseekerReducer
