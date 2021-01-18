import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { logoutUser } from '../redux/actions'

const useLogin = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const validateToken = async () => {
    const res = await axios.get('/token/validate')
    const status = res.data.status
    if (status === 401) {
      dispatch(logoutUser(history))
    }
  }

  useEffect(() => {
    validateToken()
  })
}

export default useLogin
