import { all } from 'redux-saga/effects'
import employerWatcher from './employer'
import jobSeekerWatcher from './jobseeker'
import skillsWatcher from './skills'

export default function* rootSaga() {
  yield all([...employerWatcher, ...jobSeekerWatcher, ...skillsWatcher])
}
