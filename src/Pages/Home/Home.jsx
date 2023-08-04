import React,{useEffect} from 'react'
import "./Home.css"
const Home = () => {
  useEffect(()=>{
  window.scrollTo(0,0)
  },[])
  return (
    <div className='Home_case'>
      <div className='The_Intro'>
      <h1>Welcome to,<br /> Hunet Technical Institute</h1>
      <p>
        At Hunet Technical Institute, we are committed to providing top-quality computer courses that empower individuals with the skills they need to excel in today's technology-driven world. Whether you're a beginner looking to explore the world of computers or an experienced professional aiming to enhance your skill set, we have a wide range of courses tailored to your needs.
      </p>
      </div>
      <div className="the_body">
        <h1>Why Choose,<br /> Hunet Technical Institute?</h1>
        <div className='body_cards'>
            <div className='body_card'>
              <h3>Diverse Course Offerings</h3>
              <p>
                Our institute offers a comprehensive selection of computer courses, ranging from programming and software development to networking and cybersecurity. Whatever your interests or career goals, we have a course that suits you.
              </p>
            </div>
            <div className='body_card'>
              <h3>Experienced Instructors</h3>
              <p>
              Our instructors are experts in their respective fields, with years of industry experience. They are dedicated to providing hands-on training and personalized guidance to ensure your success.</p>
            </div>
            <div className='body_card'>
              <h3>Practical Learning</h3>
              <p>
              We believe in learning by doing. Our courses emphasize practical projects, real-world scenarios, and interactive workshops to ensure you gain practical skills that are directly applicable in the industry. </p>
            </div>
            {/* State-of-the-Art Facilities */}
            <div className='body_card'>
              <h3>State-of-the-Art Facilities</h3>
              <p>
              Our institute is equipped with modern computer labs and the latest technology tools. You'll have access to cutting-edge software and hardware to enhance your learning experience.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home