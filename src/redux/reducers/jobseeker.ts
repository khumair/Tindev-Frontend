import {
  JobSeekerActions,
  REGISTER_JOBSEEKER_REQUEST,
  REGISTER_JOBSEEKER_SUCCESS,
  REGISTER_JOBSEEKER_FAIL,
} from '../types'

const initialState = {
  credentials: '',
  loading: false,
  error: null,
}

const jobSeekerRegister = (state = initialState, action: JobSeekerActions) => {
  switch (action.type) {
    case REGISTER_JOBSEEKER_REQUEST:
      return { ...state, loading: true, credentials: '' }
    case REGISTER_JOBSEEKER_SUCCESS:
      return { ...state, loading: false, credentials: action.payload }
    case REGISTER_JOBSEEKER_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default jobSeekerRegister
