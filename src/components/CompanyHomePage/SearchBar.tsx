import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

const SearchBar = () => {
  return (
    <div className="d-flex flex-row-reverse mb-4 mt-4">
      <div id="custom-search-input">
        <div className="input-group col-md-10">
          <InputGroup className="mb-3 search-bar">
            <FormControl placeholder="Recipient's username" />
            <InputGroup.Append></InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    </div>
  )
}
export default SearchBar
