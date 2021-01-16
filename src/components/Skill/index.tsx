import React from 'react'
import { Badge } from 'react-bootstrap'

type SkillProps = {
  skills: any[]
}
const Skill = ({ skills }: SkillProps) => {
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
