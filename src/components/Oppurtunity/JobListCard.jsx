import React from 'react'
import { FaPlus } from 'react-icons/fa'


const JobListCard = (  {
    title,
    companyImage,
    about,
    type,
    workTime,
    company,
    city,
    state,
    country,
    applyLink,
    postedOn,
    responsibilities,
    experienceRequired,
    skills,
    salaryRange,
    education,
    workMode,
    stipend
  }) => {

  return (
    <div  className='job_list_card text-black bg-white dark:bg-black dark:text-white px-5 py-3 flex gap-5  w-full cursor-pointer col-span-1'>
            {companyImage && <img src={companyImage} alt="loading" className='w-20 h-20 object-cover' />}
            <div className='job_card_details w-[90%]'>
                <strong className='text-blue-600 hover:underline'>{title}</strong> <br />
                <span>{company}</span> <br />
                {type === "Job" ? <span className='salary text-sm font-thin '>{salaryRange}</span> : <div className='stipend text-sm font-thin'><span className='mr-3'>{type}</span><span className=' '>- {stipend}</span></div>  }
                <div className='job_location_detail'>
                    <ul className='list-none flex text-sm font-thin'>
                        <li>{city} , </li>
                        <li>{state} , </li>
                        <li>{country} , </li>
                    </ul>
                </div>
                <span className='text-xs'>{postedOn}</span>
            </div>
            <button className='flex-grow w-fit h-fit'>
                <span  className='p-3 '><FaPlus className='rotate-45 hover:-rotate-[135deg] transition-all duration-500'/></span>
            </button>
    </div>
  )
}

export default JobListCard
