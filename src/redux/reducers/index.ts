import { combineReducers } from 'redux'

import employer from './employer'
import jobseeker from './jobseeker'
import resources from './resources'
import skill from './skill'
import user from './user'

const rootReducer = () =>
  combineReducers({ employer, jobseeker, resources, skill, user })

export default rootReducer
