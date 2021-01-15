import React from 'react'

import Skill from '../Skill'
import './Candidate.scss'

type CandidateProps = {
  firstName: string
  lastName: string
  skills: any[]
}

const Candidate = ({ firstName, lastName, skills }: CandidateProps) => {
  return (
    <div>
      <h5>
        {firstName} {lastName}
      </h5>
      <Skill />
    </div>
  )
}

export default Candidate
