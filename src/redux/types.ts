export const REGISTER_EMPLOYER_REQUEST = 'REGISTER_EMPLOYER_REQUEST'
export const REGISTER_EMPLOYER_SUCCESS = 'REGISTER_EMPLOYER_SUCCESS'
export const REGISTER_EMPLOYER_FAIL = 'REGISTER_EMPLOYER_FAIL'
export const FETCH_JOBSEEKER_REQUEST = 'FETCH_JOBSEEKER_REQUEST'
export const FETCH_JOBSEEKER_SUCCESS = 'FETCH_JOBSEEKER_SUCCESS'
export const FETCH_JOBSEEKER_FAIL = 'FETCH_JOBSEEKER_FAIL'

export type employerActions =
  | RegisterEmployerRequestAction
  | RegisterEmployerSuccessAction
  | RegisterEmployerFailAction

export type jobseekerActions =
  | FetchJobseekerRequestAction
  | FetchJobseekerSuccessAction
  | FetchJobseekerFailAction

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
  email?: string
  password?: string
  firstName?: string
  lastName?: string
  contact?: string
  seniority?: string
}

export type CredentialState = {
  credentials: Credential
  loading: Boolean
  error: any
}

export type AppState = {
  employer: CredentialState
  jobseeker: CredentialState
}

export type FetchJobseekerRequestAction = {
  type: typeof FETCH_JOBSEEKER_REQUEST
  payload: {
    jobSeekerId: string
  }
}

export type FetchJobseekerSuccessAction = {
  type: typeof FETCH_JOBSEEKER_SUCCESS
  payload: {
    firstName: string
    lastName: string
    contact: string
    seniority: string
  }
}

export type FetchJobseekerFailAction = {
  type: typeof FETCH_JOBSEEKER_FAIL
  payload: {
    error: any
  }
}
