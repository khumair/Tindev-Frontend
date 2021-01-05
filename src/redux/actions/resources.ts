import {
  GET_SKILLS_REQUEST,
  GET_SKILLS_SUCCESS,
  GET_SKILLS_FAIL,
  GetSkillsSuccessAction,
} from '../types'

export const getSkillsRequest = () => {
  return {
    type: GET_SKILLS_REQUEST,
  }
}

export const getSkillsSuccess = (skills: GetSkillsSuccessAction) => {
  return {
    type: GET_SKILLS_SUCCESS,
    payload: skills,
  }
}

export const getSkillsFail = (error: string) => {
  return {
    type: GET_SKILLS_FAIL,
    payload: error,
  }
}
