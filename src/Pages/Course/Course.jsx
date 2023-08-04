import React,{useEffect} from 'react'
import "./Course.css"

const Course = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
    },[])
  return (
    <div className='Course_case'>
      Course</div>
  )
}

export default Course