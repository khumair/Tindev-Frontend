import React from 'react'
import { MdSearch } from 'react-icons/md'
const SearchBox = () => {
  return (
    <div className="chat-search-box">
      <div className="input-group">
        <input className="form-control" placeholder="Search" />
        <div className="input-group-btn">
          <button type="button" className="btn btn-info">
            <MdSearch />
          </button>
        </div>
      </div>
    </div>
  )
}
export default SearchBox
