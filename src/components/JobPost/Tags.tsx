import React, { useState } from 'react'

import { InputTags } from 'react-bootstrap-tagsinput'
import 'react-bootstrap-tagsinput/dist/index.css'

const Tags = () => {
  const [state, setState] = useState<string[]>([])
  return (
    <div style={{ margin: 10 }}>
      <div className="input-group">
        <InputTags values={state} onTags={value => setState(value.values)} />
      </div>
      <hr />
      <ol>
        {state.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default Tags
