import React from 'react'
import { Form, FormControl } from 'react-bootstrap'

const SearchBarCont = () => {
  return (
    <div className="row justify-content-end mr-5">
      <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
      </Form>
    </div>
  )
}
export default SearchBarCont
