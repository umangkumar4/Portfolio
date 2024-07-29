import React from 'react'
import './Style.css'
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
      <span>Created By <span style={{color:'#3a98b9'}}>Umang Kumar</span> | <FaRegCopyright /> All rights reserved.</span>
    </div>
  )
}

export default Footer
