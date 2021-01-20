import React from 'react'
import { Button } from 'react-bootstrap'

import './CustomToggle.scss'

//@ts-ignore
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    className="toggle-button"
    //@ts-ignore
    ref={ref}
    onClick={e => {
      e.preventDefault()
      onClick(e)
    }}
  >
    {children}
    &#x25bc;
  </Button>
))

export default CustomToggle
