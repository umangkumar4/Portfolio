import React from 'react'
import './Style.css'
import dataServices from './Constant'

const Projects = ({sectionRef}) => {
  return (
    <div className='project' ref={sectionRef}>
      <div className='about_me project-text'  style={{color:'white'}} >Project</div>
      
      <div className='project-container'>

       {
        dataServices.projects.map( ( value ) => {
          return ( <> 
        <div className='project-card'> 
        <div><img className='project-card-image' src={value.url} alt='logo'></img></div>
        <div className='project-card-title'> {value.title} </div>
        <div className='project-card-desc'>{value.description}</div>
        </div>
           </> )
        })
       }
        
        
        </div>      

    </div>
  )
}

export default Projects
