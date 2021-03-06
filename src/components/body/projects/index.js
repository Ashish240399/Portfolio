import React from 'react'
import Separator from '../../common/separator'
import { ProjectData } from '../../data/projects'
import ProjectCard from './project-card'
import "./projects.css"
function Project() {
  const data=ProjectData
  return (
    <div className='projects'>
      <Separator/>
      <label className='section-title'>Projects</label>
      <div>
        {data.map((project)=>(
          <ProjectCard project={project}/>
        ))}
      </div>
      <div id="Contact"></div>
    </div>
  )
}

export default Project