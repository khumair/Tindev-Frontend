import { combineReducers } from 'redux'

import employer from './employer'
import jobseeker from './jobseeker'

const rootReducer = () => combineReducers({ employer, jobseeker })

export default rootReducer
