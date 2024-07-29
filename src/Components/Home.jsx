import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import Particle from './Particle1'
import { FaAngleUp } from "react-icons/fa";
import './Style.css'

import {useTypewriter , Cursor} from 'react-simple-typewriter'

const Home = ({sectionRef}) => {
  
  const [showTopBtn, setShowTopBtn] = useState(true);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>220)
        {
          setShowTopBtn(true)
        }
        else{
          setShowTopBtn(false)
        }
    })
  },[])

  const handleScroll = () =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  const[text] = useTypewriter({
    words:['Software Engineer', 'Frontend Expert ', 'React Developer'],
    loop:{},
    typeSpeed:300,
    deleteSpeed:20,
    delaySpeed:3000,
  })
  return (
    <>
    
    <div className='home' ref={sectionRef}>
      {/* <Particle className='particle' /> */}
      <Particle className='particle' />
      <div className='introduction'>
        <h2 className='hello'>Hello, my name is </h2>
        <h1 className='name'>Umang Kumar</h1>
        <h2 className='role'>And I'm a <span className='developer'>{text}</span><span><Cursor/></span> </h2>
        
        {/* <button className='hire' ><a className='' href="mailto:umang5061284@gmail.com" target="_blank"> Appoint Me</a> </button>   */}
      </div>
      {/* <div className='home-photo'>
     <img className='portfolio-image' src='Portfolio-image.png' alt='image' ></img>
     </div> */}
    </div>
    <div >{
      showTopBtn&&<button onClick={handleScroll} className='scroll-up'><FaAngleUp /></button>
     }</div>
    </>
    
  )
}

export default Home
