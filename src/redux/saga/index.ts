import { all } from 'redux-saga/effects'

import employerWatcher from './employer'
import jobseekerWatcher from './jobseeker'

export default function* rootSaga() {
  yield all([...employerWatcher, ...jobseekerWatcher])
}
