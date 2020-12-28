const getToken = () => {
  return localStorage.getItem('token')
}

const saveToken = (token: string) => {
  localStorage.setItem('token', token)
}

const removeToken = () => {
  localStorage.removeItem('token')
}

export default {
  getToken,
  saveToken,
  removeToken,
}
