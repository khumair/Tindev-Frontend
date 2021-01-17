import React from 'react'
import { useSelector } from 'react-redux'

import JobPost from '../../components/JobPost'
import './JobPostList.scss'
import { AppState } from '../../redux/types'

const JobPostList = () => {
  // testing
  //   const jobPosts = [
  //     {
  //        id: 1,
  //        title: "fullstack developer",
  //        jobDescription: "full stack development",
  //        seniority: "Junior",
  //        startingDate: "{\"day\":31,\"month\":1,\"year\":2021}",
  //        skills: ["javascript", "reactjs", "nodejs"]
  //     },
  //     {
  //        id: 2,
  //        title: "fullstack developer",
  //        jobDescription: "job",
  //        seniority: "Junior",
  //        startingDate: "{\"day\":29,\"month\":1,\"year\":2021}",
  //        skills: ["javascript", "reactjs", "nodejs"]
  //     },
  //   ]

  const jobPosts = useSelector((state: AppState) => state.employer.jobPosts)

  return (
    <>
      <div className="">
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
