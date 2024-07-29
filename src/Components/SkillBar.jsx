import React, { useState, useEffect } from 'react'
import './Style.css'
import dataServices from './Constant';

const SkillBar = ({value = 0}) => {
    // const[percent, setPercent] = useState(value);
    // useEffect(()=>{
    //  if(percent < 80)
    //     {
    //         setTimeout( ()=>setPercent(newVal=>newVal+1),200 )
    //         console.log("Percent",percent)
    //     }
    // },[percent]);
  return (
    <>
     <div className='skillbar'>
    {
        dataServices.skills.map( ( element ) =>{
            return (<><div className='skill-percentage-container'>
            <div className='skill-name'>{element.title}</div>
            <div className='skill-percentage' style={{fontWeight:'600'}} >{element.percentage}%</div>
          </div>
          <div className='progress' style={{width:`${element.percentage}%`}} ></div>  </> )
        } )
    }
    </div>

    </>
  )
}

export default SkillBar
