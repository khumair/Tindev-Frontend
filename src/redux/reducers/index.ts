import { combineReducers } from 'redux'
import test from './employer'
import jobSeekerRegister from './jobseeker'

const rootReducer = () =>
  combineReducers({ employer: test, jobSeeker: jobSeekerRegister })

export default rootReducer
