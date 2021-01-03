import {
  jobseekerDataActions,
  REGISTER_JOBSEEKER_DATA_REQUEST,
  REGISTER_JOBSEEKER_DATA_SUCCESS,
  REGISTER_JOBSEEKER_DATA_FAIL,
} from '../types'

const initState = {
  credentials: {},
  loading: false,
  error: null,
}

const jobseekerReducer = (state = initState, action: jobseekerDataActions) => {
  switch (action.type) {
    case REGISTER_JOBSEEKER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case REGISTER_JOBSEEKER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        credentials: action.payload,
      }
    case REGISTER_JOBSEEKER_DATA_FAIL:
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
