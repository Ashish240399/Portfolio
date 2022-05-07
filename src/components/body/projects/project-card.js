import React from 'react'
import "./project-card.css";
function ProjectCard({project}) {
  return (
    <div className='project-card'>
        <div className='project-info'>
            <label className='project-title'>{project.title}</label>
            
            <p>{project.about}</p>
            <div className='project-tags'>
                {project.tags.map((tag)=>(
                    <label className='tag'>{tag}</label>
                ))}
            </div>
            <div className='project-links'>
                {project.demo&&(<a target="_blank" className='project-link' href={project.demo}>
                    <div className='link-button'>
                        <i class="fi fi-rr-globe"></i>Demo
                    </div>
                    </a>)}
                    {project.github&&(<a target="_blank" className='project-link' href={project.github}>
                    <div className='link-button'>
                        <i class="devicon-github-original colored"></i>GitHub
                    </div>
                    </a>)}
            </div>
        </div>
        
        <img src={project.image} className='project-photo'></img>
        
    </div>
  )
}

export default ProjectCard