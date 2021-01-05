import React from 'react'
import ImageChar from '../../media/male.png'

const ChatBox = () => {
  return (
    <>
      <div className="container p-0">
        <h1 className="h3 mb-3">Messages</h1>

        <div className="card">
          <div className="row g-0">
            <div className="col-12 col-lg-5 col-xl-3 border-right">
              <div className="px-4 d-none d-md-block">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control my-3"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="list-group-item list-group-item-action border-0"
              >
                <div className="badge bg-success float-right">5</div>
                <div className="d-flex align-items-start">
                  <img
                    src={ImageChar}
                    className="rounded-circle mr-1"
                    width="40"
                    height="40"
                  />
                  <div className="flex-grow-1 ml-3">
                    Dilip
                    <div className="small">
                      <span className="fas fa-circle chat-online"></span> Online
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action border-0"
              >
                <div className="badge bg-success float-right">2</div>
                <div className="d-flex align-items-start">
                  <img
                    src={ImageChar}
                    className="rounded-circle mr-1"
                    width="40"
                    height="40"
                  />
                  <div className="flex-grow-1 ml-3">
                    Kirsi
                    <div className="small">
                      <span className="fas fa-circle chat-online"></span> Online
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action border-0"
              >
                <div className="d-flex align-items-start">
                  <img
                    src={ImageChar}
                    className="rounded-circle mr-1"
                    width="40"
                    height="40"
                  />
                  <div className="flex-grow-1 ml-3">
                    Duy
                    <div className="small">
                      <span className="fas fa-circle chat-online"></span> Online
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action border-0"
              >
                <div className="d-flex align-items-start">
                  <img
                    src={ImageChar}
                    className="rounded-circle mr-1"
                    width="40"
                    height="40"
                  />
                  <div className="flex-grow-1 ml-3">
                    BigMan
                    <div className="small">
                      <span className="fas fa-circle chat-offline"></span>{' '}
                      Offline
                    </div>
                  </div>
                </div>
              </a>

              <hr className="d-block d-lg-none mt-1 mb-0" />
            </div>
            <div className="col-12 col-lg-7 col-xl-9">
              <div className="py-2 px-4 border-bottom d-none d-lg-block">
                <div className="d-flex align-items-center py-1">
                  <div className="position-relative">
                    <img
                      src={ImageChar}
                      className="rounded-circle mr-1"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="flex-grow-1 pl-3">
                    <strong>Dlip</strong>
                    <div className="text-muted small">
                      <em>Typing...</em>
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-relative">
                <div className="chat-messages p-4">
                  <div className="chat-message-right pb-4">
                    <div>
                      <img
                        src={ImageChar}
                        className="rounded-circle mr-1"
                        width="40"
                        height="40"
                      />
                      <div className="text-muted small text-nowrap mt-2">
                        2:33 am
                      </div>
                    </div>
                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                      <div className="font-weight-bold mb-1">You</div>
                      Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                      prodesset te vix.
                    </div>
                  </div>

                  <div className="chat-message-right mb-4">
                    <div>
                      <img
                        src={ImageChar}
                        className="rounded-circle mr-1"
                        width="40"
                        height="40"
                      />
                      <div className="text-muted small text-nowrap mt-2">
                        2:40 am
                      </div>
                    </div>
                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                      <div className="font-weight-bold mb-1">You</div>
                      Cum ea graeci tractatos.
                    </div>
                  </div>

                  <div className="chat-message-right mb-4">
                    <div>
                      <img
                        src={ImageChar}
                        className="rounded-circle mr-1"
                        width="40"
                        height="40"
                      />
                      <div className="text-muted small text-nowrap mt-2">
                        2:43 am
                      </div>
                    </div>
                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                      <div className="font-weight-bold mb-1">You</div>
                      Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                      prodesset te vix.
                    </div>
                  </div>

                  <div className="chat-message-left pb-4">
                    <div>
                      <img
                        src={ImageChar}
                        className="rounded-circle mr-1"
                        width="40"
                        height="40"
                      />
                      <div className="text-muted small text-nowrap mt-2">
                        2:44 am
                      </div>
                    </div>
                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                      <div className="font-weight-bold mb-1">BigMan</div>
                      Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                      erat animal commodo.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-grow-0 py-3 px-4 border-top">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message"
                  />
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatBox
