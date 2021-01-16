import React from 'react'
import { useSelector } from 'react-redux'

import JobPost from '../../components/JobPost'
import './JobPostList.scss'
import { AppState } from '../../redux/types'

const JobPostList = () => {
  const jobPosts = useSelector((state: AppState) => state.employer.jobPosts)

  return (
    <>
      {/* <h2 className="job-posts">Job Posts</h2> */}
      <div className="job-post-card">
        {jobPosts.map(jp => {
          return (
            <JobPost
              key={jp.id}
              title={jp.title}
              jobDescription={jp.jobDescription}
              seniority={jp.seniority}
              startingDate={jp.startingDate}
              skills={jp.skills}
            />
          )
        })}
      </div>
    </>
  )
}

export default JobPostList
