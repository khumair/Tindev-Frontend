export const REGISTER_EMPLOYER_REQUEST = 'REGISTER_EMPLOYER_REQUEST'
export const REGISTER_EMPLOYER_SUCCESS = 'REGISTER_EMPLOYER_SUCCESS'
export const REGISTER_EMPLOYER_FAIL = 'REGISTER_EMPLOYER_FAIL'
export const JOB_POST_REQUEST = 'JOB_POST_REQUEST'
export const JOB_POST_SUCCESS = 'JOB_POST_SUCCESS'
export const JOB_POST_FAIL = 'JOB_POST_FAIL'

export type employerActions =
  | RegisterEmployerRequestAction
  | RegisterEmployerSuccessAction
  | RegisterEmployerFailAction
  | CreatingJobActionType
  | JobFailActionType
  | JobSuccessActionType

export type RegisterEmployerRequestAction = {
  type: typeof REGISTER_EMPLOYER_REQUEST
  payload: {
    credentials: {
      email: string
      password: string
    }
  }
}

export type RegisterEmployerSuccessAction = {
  type: typeof REGISTER_EMPLOYER_SUCCESS
  payload: {
    credentials: {
      email: string
      password: string
    }
  }
}

export type RegisterEmployerFailAction = {
  type: typeof REGISTER_EMPLOYER_FAIL
  payload: {
    error: any
  }
}

export type Credential = {
  email: string
  password: string
}

export type CredentialState = {
  credentials: {}
  loading: Boolean
  error: any
  jobPost: {
    title: string
    jobDescription: string
    seniority: string
    skills: any[]
  }
}

export type AppState = {
  employer: CredentialState
}

// jobPost to create and update
// ** All the types goes down here ** //
export type JobPost = {
  title: string
  jobDescription: string
  seniority: string
  skills: any[]
}

export type CreatingJobActionType = {
  type: typeof JOB_POST_REQUEST
  payload: JobPost
}
export type JobSuccessActionType = {
  type: typeof JOB_POST_SUCCESS
}
export type JobFailActionType = {
  type: typeof JOB_POST_FAIL
  payload: {
    error: any
  }
}
