import React from 'react'

import NavBar from '../../components/NavBar'
import CustomCard from '../../components/CustomCard'

const JobSeeker = () => {
  return (
    <div>
      <NavBar />
      <div className="card-container">
        <CustomCard
          title="Front-End Developer"
          skill="AngularJS" // Skills can be mapped or with forEach
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut esse mollitia necessitatibus excepturi sit, nobis inventore eligendi dolore enim."
        />

        <CustomCard
          title="FullStack Developer"
          skill="ReactJs"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut esse mollitia necessitatibus excepturi sit, nobis inventore eligendi dolore enim."
        />

        <CustomCard
          title="Software Developer"
          skill="All Softwares"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut esse mollitia necessitatibus excepturi sit, nobis inventore eligendi dolore enim."
        />
      </div>
    </div>
  )
}

export default JobSeeker
