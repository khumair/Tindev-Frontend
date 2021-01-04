import React from 'react'
import { Button } from 'react-bootstrap'

type RoleProps = {
  text1: string
  text2: string
  handleRole: any
}

const Role = ({ text1, text2, handleRole }: RoleProps) => {
  return (
    <>
      <Button className="employer-role" id="employer" onClick={handleRole}>
        {text1}
      </Button>
      <Button className="jobseeker-role" id="jobseeker" onClick={handleRole}>
        {text2}
      </Button>
    </>
  )
}

export default Role
