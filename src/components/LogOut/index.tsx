import LocalStorage from '../../local-storage'
import { useHistory } from 'react-router-dom'

const LogOut = () => {
  const history = useHistory()
  const deleteTokenFromLocalStorage = async () => {
    await LocalStorage.removeToken()
    await history.push('/')
  }

  return (
    <>
      <button
        className="btn btn-outline-dark"
        onClick={() => deleteTokenFromLocalStorage()}
      >
        LogOut
      </button>
    </>
  )
}
export default LogOut
