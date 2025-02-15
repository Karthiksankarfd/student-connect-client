import React from 'react'
import { Link } from 'react-router-dom'

const ResultCategoryNavbar = () => {
    const btnTypes  = ["People", "Posts", "Companies", "Jobs" , "Events", "Courses"]
  return (
    <nav className='ResultCategoryNavbar p-5 flex gap-x-5 border-2 border-gray-400 w-auto overflow-auto'>
           {btnTypes.map((btn, index)=> <Link
            className='border-[#0057FF] border-2  dark:text-white text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50'
            key={index} to={`/${btn}`}>{btn}</Link>)} 
    </nav>
  )
}

export default ResultCategoryNavbar
