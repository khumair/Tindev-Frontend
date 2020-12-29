export const REGISTER_EMPLOYER_REQUEST = 'REGISTER_EMPLOYER_REQUEST'
export const REGISTER_EMPLOYER_SUCCESS = 'REGISTER_EMPLOYER_SUCCESS'
export const REGISTER_EMPLOYER_FAIL = 'REGISTER_EMPLOYER_FAIL'
export const REGISTER_JOBSEEKER_REQUEST = 'REGISTER_JOBSEEKER_REQUEST'
export const REGISTER_JOBSEEKER_SUCCESS = 'REGISTER_JOBSEEKER_SUCCESS'
export const REGISTER_JOBSEEKER_FAIL = 'REGISTER_JOBSEEKER_FAIL'

export type EmployerActions =
  | RegisterEmployerRequestAction
  | RegisterEmployerSuccessAction
  | RegisterEmployerFailAction

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

export type JobSeekerActions =
  | RegisterJobSeekerRequestAction
  | RegisterJobSeekerSuccessAction
  | RegisterJobSeekerFailAction

export type RegisterJobSeekerRequestAction = {
  type: typeof REGISTER_JOBSEEKER_REQUEST
  payload: {
    credentials: {
      email: string
      password: string
    }
  }
}

export type RegisterJobSeekerSuccessAction = {
  type: typeof REGISTER_JOBSEEKER_SUCCESS
  payload: {
    credentials: {
      email: string
      password: string
    }
  }
}

export type RegisterJobSeekerFailAction = {
  type: typeof REGISTER_JOBSEEKER_FAIL
  payload: {
    error: any
  }
}

export type Credential = {
  email: any
  password: any
}

export type CredentialState = {
  credentials: {}
  loading: Boolean
  error: any
}

export type AppState = {
  employer: CredentialState
  jobSeeker: CredentialState
}
