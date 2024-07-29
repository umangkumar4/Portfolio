import Navbar from "./Components/Navbar";
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Skill from './Components/Skill'
import Project from './Components/Projects'
import Contact from './Components/Contact'
import { useState,useEffect,useRef } from "react";
import { MdOutlineMenu } from "react-icons/md"; 


function App() {
  const[menu, setMenu] = useState(false)
  const[menuClick, setMenuClick] = useState(false)
  const[style,setStyle] = useState()
  const[show,setShow] = useState(false);


  const eventHandler1 = (e)=>
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
    const eventHandler2 = (e) =>{
      // console.log("scr",window.innerWidth)
      if(window.innerWidth < 795)
        {
          setMenu(true)
        }
        else{
          setMenu(false)
        }
    }
  useEffect(()=>{
    window.addEventListener('scroll',eventHandler1)
    window.addEventListener('resize',eventHandler2)
  },[])

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const skillSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const sectionScroll = ( ref )=>{
    console.log('ref',ref)
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <>
    <div className='navbar'  
    style={{backgroundColor:show?'#3a98b9':'transparent',
      height:show?'11vh':'12vh',
      transition : show?'0.6s ease-in-out':'none'
    }}  >
    <div className='portfolio-text' >Portfolio</div>
    <div className='nav-items'>
    {/* <span className='nav-item' onClick={()=>sectionScroll(homeSectionRef)} >Home</span>
    <span className='nav-item' onClick={() =>sectionScroll(aboutSectionRef)} >About</span>
    <span className='nav-item' onClick={() =>sectionScroll(servicesSectionRef)}>Services</span>
    <span className='nav-item' onClick={() =>sectionScroll(skillSectionRef)}>Skills</span>
    <span className='nav-item' onClick={() =>sectionScroll(projectSectionRef)}>Projects</span>
    <span className='nav-item' onClick={() =>sectionScroll(contactSectionRef)}>Contact</span>
    <MdOutlineMenu /> */}

    {
      menu?(<>
      <button><MdOutlineMenu className="menu" onClick={()=>{ 
        
        if(menuClick === false)setMenuClick(true)
          else setMenuClick(false)
        
        
        }} /></button>
      <div className="menu-item" style={menuClick ? { visibility: 'visible' } : { visibility: 'hidden' }} >
         <span className='menu-item' onClick={()=>sectionScroll(homeSectionRef)} >Home</span> 
         <span className='menu-item' onClick={() =>sectionScroll(aboutSectionRef)} >About</span>
         <span className='menu-item' onClick={() =>sectionScroll(servicesSectionRef)}>Services</span>
         <span className='menu-item' onClick={() =>sectionScroll(skillSectionRef)}>Skills</span>
         <span className='menu-item' onClick={() =>sectionScroll(projectSectionRef)}>Projects</span>
         <span className='menu-item' onClick={() =>sectionScroll(contactSectionRef)}>Contact</span> 
        </div>
        </>):(<><span className='nav-item' onClick={()=>sectionScroll(homeSectionRef)} >Home</span>
      <span className='nav-item' onClick={() =>sectionScroll(aboutSectionRef)} >About</span>
      <span className='nav-item' onClick={() =>sectionScroll(servicesSectionRef)}>Services</span>
      <span className='nav-item' onClick={() =>sectionScroll(skillSectionRef)}>Skills</span>
      <span className='nav-item' onClick={() =>sectionScroll(projectSectionRef)}>Projects</span>
      <span className='nav-item' onClick={() =>sectionScroll(contactSectionRef)}>Contact</span>
      </>)
    }
    </div>
    </div>

    {/* <Navbar /> */}
    <Home sectionRef={homeSectionRef} />
    <About  sectionRef={aboutSectionRef} />
    <Services sectionRef={servicesSectionRef} />
    <Skill sectionRef={skillSectionRef} />
    <Project sectionRef={projectSectionRef} />
    <Contact sectionRef={contactSectionRef} />
    </>
  );
}

export default App;
