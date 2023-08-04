import React,{useEffect} from 'react'
import "./About.css"
const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
    },[])
  return (
    <div className='About_case'>
      About</div>
  )
}

export default About