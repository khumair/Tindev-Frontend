import {
  jobseekerDataActions,
  UPDATE_JOBSEEKER_REQUEST,
  UPDATE_JOBSEEKER_SUCCESS,
  UPDATE_JOBSEEKER_FAIL,
} from '../types'

const initState = {
  credentials: {},
  loading: false,
  error: null,
}

const jobseekerReducer = (state = initState, action: jobseekerDataActions) => {
  switch (action.type) {
    case UPDATE_JOBSEEKER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_JOBSEEKER_SUCCESS:
      return {
        ...state,
        loading: false,
        credentials: action.payload,
      }
    case UPDATE_JOBSEEKER_FAIL:
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
