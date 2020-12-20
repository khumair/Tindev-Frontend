import { combineReducers } from 'redux'
import { employerRegisterReducer } from './employerReducer'
import { numberCollectionReducer, NumberCollectionState } from './numberReducer'

export interface State {
  numberCollection: NumberCollectionState
}

export const rootReducers = () => 
  combineReducers({
  employerRegister: employerRegisterReducer,
})


