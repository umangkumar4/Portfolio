import React from 'react'
import dataServices from './Constant'

const Services = ({sectionRef}) => {
  console.log(dataServices)
  return (
    <>
    <div className='services'  ref={sectionRef}>
    <div className='about_me my-services'>My services</div>
    <div className='card-container'>

      {
        dataServices.element.map( ( data ) =>{
          return (<>
          
          <div className='card' >
          <div className='ser logo-services'>  {data.logo}   </div>
          <div className='ser title-services'>  {data.title}   </div>
          <div className='ser desc-services'>   {data.description}  </div>
          </div>
          
          
          </>)
        } )
      }
    </div>
    </div>
    </>

  )
}

export default Services
