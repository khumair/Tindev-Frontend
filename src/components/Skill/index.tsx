import React from 'react'
import { Badge } from 'react-bootstrap'

const Skill = () => {
  const skills = ['javascript', 'reactjs']
  return (
    <>
      {skills.map((skill, index) => {
        return (
          <Badge
            pill
            key={index}
            className="tag-btn btn btn-pill btn-outline-primary ml-2"
          >
            {skill}
          </Badge>
        )
      })}
    </>
  )
}

export default Skill
