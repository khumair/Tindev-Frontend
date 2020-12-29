export const REGISTER_EMPLOYER_REQUEST = 'REGISTER_EMPLOYER_REQUEST'
export const REGISTER_EMPLOYER_SUCCESS = 'REGISTER_EMPLOYER_SUCCESS'
export const REGISTER_EMPLOYER_FAIL = 'REGISTER_EMPLOYER_FAIL'
export const REGISTER_JOBSEEKER_REQUEST = 'REGISTER_JOBSEEKER_REQUEST'
export const REGISTER_JOBSEEKER_SUCCESS = 'REGISTER_JOBSEEKER_SUCCESS'
export const REGISTER_JOBSEEKER_FAIL = 'REGISTER_JOBSEEKER_FAIL'
export const LOGIN_EMPLOYER_REQUEST = 'LOGIN_EMPLOYER_REQUEST'
export const LOGIN_EMPLOYER_SUCCESS = 'LOGIN_EMPLOYER_SUCCESS'
export const LOGIN_EMPLOYER_FAIL = 'LOGIN_EMPLOYER_FAIL'
export const LOGOUT_EMPLOYER = 'LOGOUT_EMPLOYER'
export const LOGIN_JOBSEEKER_REQUEST = 'LOGIN_JOBSEEKER_REQUEST'
export const LOGIN_JOBSEEKER_SUCCESS = 'LOGIN_JOBSEEKER_SUCCESS'
export const LOGIN_JOBSEEKER_FAIL = 'LOGIN_JOBSEEKER_FAIL'
export const LOGOUT_JOBSEEKER = 'LOGOUT_JOBSEEKER'

export type EmployerActions =
  | RegisterEmployerRequestAction
  | RegisterEmployerSuccessAction
  | RegisterEmployerFailAction
  | LoginEmployerRequestAction
  | LoginEmployerSuccessAction
  | LoginEmployerFailAction
  | LogoutEmployerAction

export type RegisterEmployerRequestAction = {
  type: typeof REGISTER_EMPLOYER_REQUEST
  payload: {
    info: object
    credentials: {
      email: string
      password: string
    }
  }
}

export type RegisterEmployerSuccessAction = {
  type: typeof REGISTER_EMPLOYER_SUCCESS
  payload: {
    employerInfo: {
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

export type LoginEmployerRequestAction = {
  type: typeof LOGIN_EMPLOYER_REQUEST
  payload: {
    info: object
    credentials: {
      email: string
      password: string
    }
  }
}

export type LoginEmployerSuccessAction = {
  type: typeof LOGIN_EMPLOYER_SUCCESS
  payload: {
    employerInfo: {
      email: string
      password: string
    }
  }
}

export type LoginEmployerFailAction = {
  type: typeof LOGIN_EMPLOYER_FAIL
  payload: {
    error: any
  }
}

export type LogoutEmployerAction = {
  type: typeof LOGOUT_EMPLOYER
  payload: {
    error: any
  }
}

export type JobSeekerActions =
  | RegisterJobSeekerRequestAction
  | RegisterJobSeekerSuccessAction
  | RegisterJobSeekerFailAction
  | LoginJobSeekerRequestAction
  | LoginJobSeekerSuccessAction
  | LoginJobSeekerFailAction
  | LogoutJobSeekerAction

export type RegisterJobSeekerRequestAction = {
  type: typeof REGISTER_JOBSEEKER_REQUEST
  payload: {
    info: object
    credentials: {
      email: string
      password: string
    }
  }
}

export type RegisterJobSeekerSuccessAction = {
  type: typeof REGISTER_JOBSEEKER_SUCCESS
  payload: {
    jobSeekerInfo: {
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

export type LoginJobSeekerRequestAction = {
  type: typeof LOGIN_JOBSEEKER_REQUEST
  payload: {
    info: object
    credentials: {
      email: string
      password: string
    }
  }
}

export type LoginJobSeekerSuccessAction = {
  type: typeof LOGIN_JOBSEEKER_SUCCESS
  payload: {
    jobSeekerInfo: {
      email: string
      password: string
    }
  }
}

export type LoginJobSeekerFailAction = {
  type: typeof LOGIN_JOBSEEKER_FAIL
  payload: {
    error: any
  }
}

export type LogoutJobSeekerAction = {
  type: typeof LOGOUT_JOBSEEKER
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
