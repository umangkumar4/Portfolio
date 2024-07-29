import React, { useEffect, useState } from 'react'
import './Style.css'

import SkillBar from './SkillBar'

const Skill = ({sectionRef}) => {
  const[progress, setProgress] =  useState(0);

 useEffect( ()=>{
  setInterval( ()=>{
    setProgress( (val=>val+1) )
    // console.log('progr',progress)
  },100 )
 },[] )

  return (
    <div className='skills' ref={sectionRef}> 
      <div className='about_me'>Skills</div>
      <div className='cont'>
        <div className='skill-left-container'>
          <div class='contain' >
            <div className='creative'>My creative skills & experiences.</div>
            <div className='creative-title'>"My creative skills and experiences include Web design, photo editing, and web Development. As a Web Developer, I have developed various websites, web pages, and web Apps in different projects. I have also made thumbnil for social media platforms like YouTube channels and Linkedin. Additionally, I am a skilled Coder and have solved many questions on Codechef, Leetcode, GFG, Code Studio and on other several online platforms. My problem solving skills and observation skills has improved by Solving DSA Questions."</div>
            <button className='read-more-button'>Read more</button>
          </div>
        </div>









        <div className='skill-right-container'>
        <SkillBar value={progress} />
        </div>
      </div>
    </div>
  )
}

export default Skill
