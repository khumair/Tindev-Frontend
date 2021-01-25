import React, { useState } from 'react'
import Incoming from './Incoming'
import Outgoing from './Outgoing'
import { Button } from 'react-bootstrap'
import UsersList from './UsersList'
const ChatBox = () => {
  const [newMessage, setNewMessage] = useState([
    {
      message: 'message',
      id: 1,
    },
  ])
  const [message, sendMessage] = useState('')
  const handleSendMessage = (e: any) => {
    e.preventDefault()
    console.log(message)
  }
  // const [newMessage, setNewMessage] = useState('')

  return (
    <div className="Container">
      <div className="content-wrapper">
        <div className="row gutters">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card m-0">
              <div className="row no-gutters">
                <>
                  <UsersList />
                </>

                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                  <div className="selected-user">
                    <span>
                      To: <span className="name">Dlip</span>
                    </span>
                  </div>
                  <div className="chat-container chat-messages">
                    <ul className="chat-box chatContainerScroll">
                      <Incoming />
                      <Outgoing />
                    </ul>
                  </div>
                  <div className="flex-grow-0 py-3 px-4 border-top">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value={message}
                        onChange={(e: any) => sendMessage(e.target.value)}
                        placeholder="Write message..."
                      />
                      <Button
                        onClick={(e: any) => handleSendMessage(e)}
                        className="btn btn-primary"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChatBox
