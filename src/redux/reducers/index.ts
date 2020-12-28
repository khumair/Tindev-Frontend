import { combineReducers } from 'redux'
import employer from './employer'
import jobSeeker from './jobseeker'

const rootReducer = () => combineReducers({ employer, jobSeeker })

export default rootReducer
