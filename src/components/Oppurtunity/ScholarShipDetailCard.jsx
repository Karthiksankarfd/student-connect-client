import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaArrowRight, FaRupeeSign } from 'react-icons/fa'

const ScholarShipDetailCard = ({name,sponsor,eligibility,applicationDeadline,type,amount,description}) => {
  return (
      <div className=' w-full OppurtunityDetailCard p-5 lg:p-10 bg-white text-black dark:bg-black dark:text-white col-span-1 flex flex-col gap-y-5'>
          <div className="logo_companyname_option_menu flex justify-between items-center">
               <div className='flex items-center gap-5' >
                  {/* <img src={companyImage} alt="loading" className='h-20 w-20 object-cover' /> */}
                  <h4>{sponsor}</h4>
               </div>
               <div className="menu flex gap-5">
                  <BsThreeDotsVertical/>
                  <FaArrowRight/>
               </div>
          </div>
  
          <div className="name">
              <h1 className='text-3xl font-semibold'>{name}</h1>
          </div>
          
          <div className="felx_container flex text-sm gap-5 flex-wrap">
          <span className='salary text-sm font-thin p-1 bg-slate-200 flex items-center dark:bg-[#424242]'><FaRupeeSign/>{amount} </span>
              {/* {type === "Job" ?  : <div className='stipend text-sm font-thin'><span className='mr-3'>{type}</span><span className=' bg-slate-200'>- {stipend}</span></div>  } */}
              <span className=' p-1 bg-slate-200 dark:bg-[#424242]'>{type}</span>
              <span className=' p-1 bg-slate-200 dark:bg-[#424242]'>{eligibility}</span>
          </div>
  
          <div className="call_to_action_btns_container flex gap-5">
              <button className='p-2 bg-blue-500 text-white'>Apply</button>
              <button className='p-2 bg-blue-500 text-white'>save</button>
          </div>
  
          <div className="oppurtunity_about_Section">
              <h4 className='text-xl font-semibold mb-2'>About the {type}</h4>
              <p className='text font-thin'><strong>Overview :{" "}</strong>{description}</p>
          </div>
  
          {/* <div>
              <h6 className='font-semibold mb-2'>Responsibilities</h6>
              <ul className='list-disc ml-10 font-thin'>
                  {responsibilities?.map((responsibility,index)=>{
                      return <li key={index}>{responsibility}</li>
                  })}
  
              </ul>
          </div> */}
  
          {/* <div>
              <h6 className='font-semibold mb-2'>Required Qualifications</h6>
              <ul className='list-disc ml-10  font-thin'>
                  <li>{education}</li>
                  <li>{experienceRequired}</li>
                  {skills?.map((skill,index)=>{
                      return <li key={index}>{skill}</li>
                  })}
              </ul>
          </div> */}
  
      </div>
  )
}

export default ScholarShipDetailCard
