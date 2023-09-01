import React from 'react'
import "./Navbar.css"
import { menu } from './data'
import { useLocation,useNavigate } from 'react-router-dom'
import {FaBars} from "react-icons/fa"
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
  
   <nav className='navbar'>
    <div className='sub_navbar'>
    <div className='hunet_heading'>
      <h1>
        HUNET <span> TECH</span>
      </h1>
    </div>
    <div className='menu_container'>
    {menu.map((item,id)=>{
      return(
        <div key={item.id} className='list'>
          <div className={location.pathname===item.url? 'active':'a'} onClick={()=>navigate(item.url)}>
             {item.name}
          </div>
        </div>
      )
    })}
    </div>
    <div className='bar_logo'>
    <FaBars/>
    </div>
    </div>
   </nav>
  )
}

export default Navbar