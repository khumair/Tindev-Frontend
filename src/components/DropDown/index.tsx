import React, { useState } from 'react'
import { /*useDispatch,*/ useSelector } from 'react-redux'
import { Dropdown } from 'react-bootstrap'

import CustomMenu from '../CustomMenu'
import CustomToggle from '../CustomToggle'
import { AppState } from '../../redux/types'
//import { addSkill } from '../../redux/actions/skill'

//const skills = [{id: '1', name: 'JavaScript'}, {id: '2', name: 'TypeScript'}, {id: '3', name: 'Nodejs'}, {id: '4', name: 'C++'}, {id: '5', name: 'Reactjs'}]

const DropDown = () => {
  const [skill, setSkill] = useState({ id: null, name: '' })

  const skills = useSelector((state: AppState) => state.resources.skills)
  //const inProfile = useSelector((state: AppState) => state.skill.inProfile)

  //const dispatch = useDispatch()

  const handleSelect = (e: any) => {
    let jobPostSkills: { id: number }[]
    jobPostSkills = []
    const id = e
    const jobPostSkill = setSkill({
      id: id,
      name: skills.find(s => s.id === skill.id && s.name),
    })
    console.log('jobPostSkill', jobPostSkill)
    //@ts-ignore
    jobPostSkills.concat(jobPostSkill)
    console.log('jobPostSkills', jobPostSkills)
    // dispatch(
    //   addSkill({
    //     id: skill.id
    //   })
    // )
    // inProfile.concat(id)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Skills
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {skills &&
          skills.map(skill => {
            return (
              <Dropdown.Item
                //name={String(skill.name)}
                key={skill.id}
                eventKey={skill.id}
                //value={skill.name}
                onSelect={handleSelect}
              >
                {skill.name}
              </Dropdown.Item>
            )
          })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown
