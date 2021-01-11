import { put, select, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { AppState } from '../types'
import { getSkillsSuccess, getSkillsFail } from '../actions/resources'
import { createSkillSuccess, createSkillFail } from '../actions/skill'

const skillInfo = (state: AppState) => state.skill

function* getSkillsSaga() {
  try {
    const res = yield axios.get('/skills')
    yield put(getSkillsSuccess(res.data))
  } catch (error) {
    yield put(getSkillsFail(error))
  }
}

function* createSkillSaga() {
  try {
    const skill = yield select(skillInfo)
    const res = yield axios.post('/skills', skill)
    console.log(res)
    yield put(createSkillSuccess(res.data))
  } catch (error) {
    yield put(createSkillFail(error))
  }
}

const sagaWatcher = [
  takeLatest('GET_SKILLS_SUCCESS', getSkillsSaga),
  takeLatest('GET_SKILLS_FAIL', getSkillsSaga),
  takeLatest('CREATE_SKILL_SUCCESS', createSkillSaga),
  takeLatest('CREATE_SKILL_FAIL', createSkillSaga),
]

export default sagaWatcher
