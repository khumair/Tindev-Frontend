import React from 'react'
import { Image } from 'react-bootstrap'
import SearchBox from './SearchBox'
const UsersList = () => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
      <div className="users-container">
        <SearchBox />
        <ul className="users">
          <li className="person" data-chat="person1">
            <div className="user">
              <Image
                src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
                alt="avatar"
              />
              <span className="status busy"></span>
            </div>
            <p className="name-time">
              <span className="name">Dlip</span>
              <span className="time">4/01/2021</span>
            </p>
          </li>
          <li className="person" data-chat="person1">
            <div className="user">
              <Image
                src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
                alt="avatar"
              />
              <span className="status offline"></span>
            </div>
            <p className="name-time">
              <span className="name">Kirsi</span>
              <span className="time">4/01/2021</span>
            </p>
          </li>

          <li className="person active-user" data-chat="person2">
            <div className="user">
              <Image
                src="https://www.bootdey.com/img/Content/avatar/avatar2.png"
                alt="avatar"
              />
              <span className="status away"></span>
            </div>
            <p className="name-time">
              <span className="name">BigMan</span>
              <span className="time">4/01/2021</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UsersList
