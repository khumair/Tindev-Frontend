import {
  CreatingJobActionType,
  JobSuccessActionType,
  JobFailActionType,
  JobPost,
} from '../types'
export const creatingJobPostRequest = (
  jobForm: JobPost
): CreatingJobActionType => {
  return {
    type: 'JOB_POST_REQUEST',
    payload: jobForm,
  }
}
export const registerJobPostSuccess = (): JobSuccessActionType => {
  return {
    type: 'JOB_POST_SUCCESS',
  }
}
export const registerJobPostFail = (error: {
  error: any
}): JobFailActionType => {
  return {
    type: 'JOB_POST_FAIL',
    payload: error,
  }
}
