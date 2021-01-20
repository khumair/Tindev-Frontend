import React /*useState */ from 'react'
import { Button } from 'react-bootstrap'

import './CustomToggle.scss'

//@ts-ignore
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
  //const [close, setClose] = useState(false)

  return (
    <Button
      className="toggle-button"
      //@ts-ignore
      ref={ref}
      onClick={e => {
        e.preventDefault()
        onClick(e)
      }}
      //onToggle={setClose(true)}
    >
      {children}
      &#x25bc;
    </Button>
  )
})

export default CustomToggle
