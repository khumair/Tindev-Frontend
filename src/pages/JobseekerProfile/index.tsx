import React from 'react'

import Tabs from '../../components/Tabs'
import JobseekerProfileForm from '../../components/JobseekerProfileForm'
import MatchCardJobseeker from '../../components/MatchCardJobseeker'

const JobseekerProfile = () => {
  return (
    <div className="page">
      <Tabs
        formComponent={<JobseekerProfileForm />}
        matchComponent={<MatchCardJobseeker />}
      />
    </div>
  )
}

export default JobseekerProfile
