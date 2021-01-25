import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
const Outgoing = () => {
  const [outgoingMsgs, setOutgoingMsgs] = useState([
    { text: 'I need more information about Developer Plan.', id: 1 },
    { text: 'I need more information about Developer Plan.', id: 2 },
  ])
  return (
    <>
      <li className="chat-right">
        <div className="chat-hour">
          08:56 <span className="fa fa-check-circle"></span>
        </div>
        <div className="chat-text">
          {outgoingMsgs.map(outgoingMsg => {
            return (
              <span key={outgoingMsg.id}>
                {' '}
                {outgoingMsg.text} <br />
              </span>
            )
          })}
        </div>
        <div className="chat-avatar">
          <Image
            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
            alt="avatar"
          />
          <div className="chat-name">Sam</div>
        </div>
      </li>
    </>
  )
}
export default Outgoing
