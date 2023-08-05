import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Plx from "react-plx";
import Home from '../Pages/Home/Home';
import About from '../Pages/Aboutus/About';
import Course from '../Pages/Course/Course';
import Services from '../Pages/Services/Services';
// import Footer from '../Components/Footer/Footer';
const Routing = () => {
  return (
    <Router>
        <Navbar/>
        <Plx
        parallaxData={[
          {
            start: 0,
            end: 600,
            properties: [
              {
                startValue: 0,
                endValue: .7,
                property: "opacity"
              },
              {
                startValue:1,
                endValue:2.38,
                property:'scale'
              },
            //   {
            //     startValue: 0,
            //     endValue: 90, // Rotate by 45 degrees
            //     property: "rotate" // Add rotate property
            // }
            ]
          },{
            start:600,
            end:1200,
            properties:[
              {
                startValue: .7,
                endValue: .5,
                property: "opacity"
              },
              {
               startValue:2.38,
               endValue:1.88,
               property:"scale"
              },
              // {
              //     startValue: 90,
              //     endValue: 180, // Rotate by 45 degrees
              //     property: "rotate" // Add rotate property
              // }
            ]
          },
          {
            start:1200,
            end:1800,
            properties:[
              {
                startValue: .5,
                endValue: 0,
                property: "opacity"
              },
              {
               startValue:1.88,
               endValue:0.98,
               property:"scale"
              },
              // {
              //     startValue: 180,
              //     endValue: 360, // Rotate by 45 degrees
              //     property: "rotate" // Add rotate property
              // }
            ]
          },
          {
            start:1800,
            end:3000,
            properties:[
              {
                startValue: 0,
                endValue: .5,
                property: "opacity"
              },
              {
               startValue:.98,
               endValue: 1.98,
               property:"scale"
              },
              // {
              //     startValue: 180,
              //     endValue: 360, // Rotate by 45 degrees
              //     property: "rotate" // Add rotate property
              // }
            ]
          }

        ]}
        className='logo_hunet'
        // style={{
        //   position: "fixed",
        //   left: "50%",
        //   top: "50%",
        //   top: "20%",
            // left: "35%",
            // transform: "translate(-50%, -50%)"
          // width: "100%"
          // width:"30vw"
        // }}
      >
       
        <img
        className="text_image"
          style={{
            // width: "30vw",
            // position:"fixed",
            width:"30vw",
            pointerEvents: "none",
            // top:"20%",
          }}
          src={require('./20230804_142555_0000.png')} 
          alt="Goonies"
        />
        </Plx>
        <Routes>
           <Route exact path='/' element={<Home/>}/>
           <Route  path='/about' element={<About/>}/>
           <Route  path='/course' element={<Course/>}/>
           <Route  path='/services' element={<Services/>}/>
        </Routes>
        
      </Router>
  )
}
export default Routing