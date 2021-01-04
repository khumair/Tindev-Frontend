export const REGISTER_EMPLOYER_REQUEST = 'REGISTER_EMPLOYER_REQUEST'
export const REGISTER_EMPLOYER_SUCCESS = 'REGISTER_EMPLOYER_SUCCESS'
export const REGISTER_EMPLOYER_FAIL = 'REGISTER_EMPLOYER_FAIL'
export const UPDATE_JOBSEEKER_REQUEST = 'UPDATE_JOBSEEKER_REQUEST'
export const UPDATE_JOBSEEKER_SUCCESS = 'UPDATE_JOBSEEKER_SUCCESS'
export const UPDATE_JOBSEEKER_FAIL = 'UPDATE_JOBSEEKER_FAIL'

export type employerActions =
  | RegisterEmployerRequestAction
  | RegisterEmployerSuccessAction
  | RegisterEmployerFailAction

export type jobseekerDataActions =
  | updateJobseekerRequestAction
  | updateJobseekerSuccessAction
  | updateJobseekerFailAction

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
  skills?: any[]
  skillLevel?: string
  duration?: string
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

export type updateJobseekerRequestAction = {
  type: typeof UPDATE_JOBSEEKER_REQUEST
  payload: {
    jobSeekerId: string
  }
}

export type updateJobseekerSuccessAction = {
  type: typeof UPDATE_JOBSEEKER_SUCCESS
  payload: {
    firstName: string
    lastName: string
    contact: string
    seniority: string
  }
}

export type updateJobseekerFailAction = {
  type: typeof UPDATE_JOBSEEKER_FAIL
  payload: {
    error: any
  }
}
