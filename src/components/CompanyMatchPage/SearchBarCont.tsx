import React from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
const SearchBarCont = () => {
    return(
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Seach"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    )
}
export default 'SearchBarCont'