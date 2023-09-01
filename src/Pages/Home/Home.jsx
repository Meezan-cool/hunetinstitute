import React, { useEffect } from 'react';
import "./Home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseImages = [
    "html-5_5968267.png",
    "course1.png",
    "js_5968292.png",
    "insight_9611677.png",
    "structure_3334886.png",
    "coding_6214206.png"
  ];

  return (
    <div className='Home_case'>
      <div className='The_Intro'>
        <h1>Welcome to,<br /> Hunet Technical Institute</h1>
        <p>
          At Hunet Technical Institute, we are committed to providing top-quality computer courses that empower individuals with the skills they need to excel in today's technology-driven world. Whether you're a beginner or an experienced professional, we have tailored courses to suit your needs.
        </p>
      </div>
      <div className="the_body">
        <h1>Why Choose,<br /> Hunet Technical Institute?</h1>
        <div className='body_cards'>
          {[
            {
              title: "Diverse Course Offerings",
              content: "We offer a wide range of computer courses, catering to various interests and career goals.",
            },
            {
              title: "Experienced Instructors",
              content: "Our experienced instructors provide hands-on training and personalized guidance.",
            },
            {
              title: "Practical Learning",
              content: "Emphasis on practical projects and interactive workshops for real-world skills.",
            },
            {
              title: "State-of-the-Art Facilities",
              content: "Access to modern computer labs and cutting-edge technology tools.",
            },
          ].map((card, index) => (
            <div key={index} className='body_card'>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='the_Course'>
        <h1>COURSES</h1>
        <div className='course_cards'>
          {courseImages.map((image, index) => (
            <div key={index} className='course_card'>
              <img src={require(`./Images/${image}`)} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
// Ane yomenp