import React from 'react'

import JobPost from '../../components/JobPost'
import './JobPostList.scss'

const JobPostList = () => {
  return (
    <>
      {/* <h2 className="job-posts">Job Posts</h2> */}
      <div className="job-post-card">
        <JobPost />
      </div>
    </>
  )
}

export default JobPostList
