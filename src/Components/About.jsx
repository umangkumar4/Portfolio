import React from 'react'
import './Style.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import resume from './Resume/res.pdf';

const About = ({sectionRef}) => {
    const[text] = useTypewriter({
        words:['Software Engineer', 'Frontend Expert', 'React Developer'],
        loop:{},

    })
  return (
    <>
    <div className='about' ref={sectionRef}>
      <h1 className='about_me'>About me</h1>
     <div className='about-section'>
     <div className=' ab about-photo'>
     <img className='portfolio-image port' src='Portfolio-image.png' alt='image' ></img>

     </div>
     <div className=' ab about-detail'>
        <h1 className='about-typewriter'>I'm  a <span style={{color:'#3a98b9'}}>{text}<span><Cursor/></span></span></h1>
        <div>I am a recent graduate of Electronics and Communication Engineering from Shri Ramswaroop Memorial College of Engineering and Management, Lucknow. With a passion for coding, I specialize in C++. I have completed a three-month internship as a frontend developer at Bucle Labs Pvt. Ltd., Gurgaon. Currently, I am leveraging my skills at Cosmofeed Pvt. Ltd.</div>
         <a href={resume} download='Umang resume' > <button className='download-cv'>Download CV</button></a>
     </div>
    </div>
    
    </div>
    </>
    
  )
}

export default About
