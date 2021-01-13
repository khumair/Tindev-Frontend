import React from 'react'

import AddJobPost from '../../components/AddJobPost'
import JobPostList from '../../components/JobPostList'
import './JobPost.scss'

const JobPost = () => {
  return (
    <>
      <AddJobPost />
      <h2 className="job-posts">Job Posts</h2>
      <div className="job-post-card">
        <JobPostList />
      </div>
    </>
  )
}

export default JobPost
