import React from 'react'
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
    // const style = ({ isActive }) => {
    //     return isActive ? "text-blue-600" : "text-red-600";
    //   };
      
  return (
    <nav className='oppurtunity_navbar flex justify-around items-center border-b-2 shadow-xl bg-white text-black dark:bg-black dark:text-white  py-2 w-full '>

            <div className="links flex gap-5">
                <NavLink to="" className='text-sm'>Jobs</NavLink>
                <NavLink   className='text-sm'>Internships</NavLink>
                <NavLink to="scholarships" className='text-sm'>Scholarships</NavLink>
                <NavLink  className='text-sm'>Projects</NavLink>
                {/* <NavLink  className='text-sm'>Mentorship</NavLink> */}
            </div>

            <div className="filter">
                <select name="filter" id="" className='bg-transparent text-sm'>
                    <option value="Filter by">Filter by</option>
                </select>
            </div>
          
    </nav>
  )
}

export default Navbar
