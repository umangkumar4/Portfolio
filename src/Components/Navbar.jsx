import React from 'react'
import { useState,useEffect, useRef } from 'react'
import './Style.css'

const Navbar = () => {
const[style,setStyle] = useState()
const[show,setShow] = useState(false);

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const skillSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

const eventHandler = (e)=>
  {
    //console.log(window.scrollY);
    if(window.scrollY>10)
      {
        setShow(true)
      }
      else{
        setShow(false)
      }
  }
useEffect(()=>{
  window.addEventListener('scroll',eventHandler)
},[])

const sectionScroll = ( ref ) =>{
   window.scrollTo({
    // top:ref.current.offsetTop,
    // behavior:'smooth'
   })
}

//const arr = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact']
  return (
    <>
    {/* style={{backgroundColor:show?'#3a98b9':'transparent'} */}
    <div className='navbar'  
    style={{backgroundColor:show?'#3a98b9':'transparent',
      height:show?'11vh':'12vh',
      transition : show?'0.6s ease-in-out':'none'
    }}  >
    <div className='portfolio-text' >Portfolio</div>
    <div className='nav-items'>
    {/* {
        arr.map( (value) => {
            return <span className='nav-item'>{value}</span>
        } )
    } */}
    <span className='nav-item' onClick={sectionScroll(homeSectionRef)} >Home</span>
    <span className='nav-item' onClick={sectionScroll(aboutSectionRef)} >About</span>
    <span className='nav-item' onClick={sectionScroll(servicesSectionRef)}>Services</span>
    <span className='nav-item' onClick={sectionScroll(skillSectionRef)}>Skills</span>
    <span className='nav-item' onClick={sectionScroll(projectSectionRef)}>Projects</span>
    <span className='nav-item' onClick={sectionScroll(contactSectionRef)}>Contact</span>
    </div>
    </div>
    </>
  )
}

export default Navbar
