import React from 'react'
import { Badge } from 'react-bootstrap'
const TagBadges = () => {
  return (
    <>
      <Badge pill className="tag-btn btn btn-pill btn-outline-primary ml-2">
        JavaScript
      </Badge>
      <Badge pill className="tag-btn btn btn-pill btn-outline-primary ml-2">
        ReactJs
      </Badge>
    </>
  )
}
export default TagBadges
