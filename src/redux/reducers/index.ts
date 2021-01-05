import { combineReducers } from 'redux'

import employer from './employer'
import jobseeker from './jobseeker'
import skills from './skills'
import skill from './skill'

const rootReducer = () =>
  combineReducers({ employer, jobseeker, skills, skill })

export default rootReducer
