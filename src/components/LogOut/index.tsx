import React from 'react'
import { Button } from 'react-bootstrap'

const LogOut = () => {
  const deleteTokenFromLocalStorage = async () =>
    await localStorage.removeItem('token')

  return (
    <>
      <Button variant="danger" onClick={() => deleteTokenFromLocalStorage()}>
        LogOut
      </Button>
    </>
  )
}
export default LogOut
