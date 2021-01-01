import React from 'react'
import { Badge } from 'react-bootstrap'

type CandidateProps = {
  firstName: string
  lastName: string
  skills: any[]
}

const Candidate = ({ firstName, lastName, skills }: CandidateProps) => {
  return (
    <div>
      <h5>{firstName} {lastName}</h5>
      {skills.map(skill => {
        return (
        <Badge
          pill
          className="tag-btn btn btn-pill btn-outline-primary ml-2"
        >
          {skill}
        </Badge>
        )
      })}
    </div>
  )
}

export default Candidate
