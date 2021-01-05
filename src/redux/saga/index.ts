import { all } from 'redux-saga/effects'
import employerWatcher from './employer'
import jobSeekerWatcher from './jobseeker'

export default function* rootSaga() {
  yield all([...employerWatcher, ...jobSeekerWatcher])
}
