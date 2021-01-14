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
        className="btn btn-danger sm-2"
        onClick={() => deleteTokenFromLocalStorage()}
        style={{ marginLeft: '5px' }}
      >
        Log Out
      </button>
    </>
  )
}
export default LogOut
