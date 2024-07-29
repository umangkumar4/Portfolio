import React from 'react'
import './Style.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Input from './Input'
import Footer from './Footer'

const Contact = ({sectionRef}) => {
  return (
    <>

    <div className='contact' ref={sectionRef}>
      <div className='about_me'>Contact</div>
      <div className='about-container'>
        <div className='left-container'>
         <h2>Get in touch</h2>
         <div className='intro' >I have recently completed B.Tech in Electronics and Communication Engineering from Shri Ramswaroop Memorial College of Engineering and Management, Lucknow</div>
         <div className='details-container' >
          <div className='det-logo' ><FaUserAlt /></div>
          <div className='det-cont'>
            <div className='det-title'>Name</div><div className='det-value'>Umang Kumar</div></div>
         </div>
         <div className='details-container' >
          <div className='det-logo' ><FaLocationDot /></div>
          <div className='det-cont'>
            <div className='det-title'>Address</div><div className='det-value'>U.P India</div></div>
         </div>
         <div className='details-container' >
          <div className='det-logo' ><MdEmail />  </div>
          <div className='det-cont'>
            <div className='det-title'>Email</div><div className='det-value'><a className='linkedin' href="mailto:umangk173@gmail.com" target="_blank">umangk173@gmail.com</a></div></div>
         </div><div className='details-container' >
          <div className='det-logo' ><FaLinkedin /></div>
          <div className='det-cont'>
            <div className='det-title'>Linkedin</div><div className='det-value'><a className='linkedin' href='https://www.linkedin.com/in/umang-kumar-aa11a7231/'>umangkumar</a></div></div>
         </div>


        </div>




        <div className='right-container'>
        <Input className='input1' type='text' placeholder='Name'/>
        <Input className='input2' type='email' placeholder='Email'/>
        <Input className='input3' type='text' placeholder='Subject' />
        <Input className='input4' type='text' placeholder='Message' />
        <button className='send-button'>Send Message</button>
        </div>
      </div>
     </div>
     <Footer />

     </>
  )
}

export default Contact
