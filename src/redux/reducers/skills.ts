import {
  GET_SKILLS_REQUEST,
  GET_SKILLS_SUCCESS,
  GET_SKILLS_FAIL,
  SkillsState,
  SkillsActions,
} from '../types'

export const skills = (
  state: any = {
    skills: [],
    loading: false,
    error: null,
  },
  action: SkillsActions
): SkillsState => {
  switch (action.type) {
    case GET_SKILLS_REQUEST:
      return {
        ...state,
        loading: true,
        skills: [],
      }
    case GET_SKILLS_SUCCESS:
      return {
        ...state,
        loading: false,
        skills: action.payload,
      }
    case GET_SKILLS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default skills
