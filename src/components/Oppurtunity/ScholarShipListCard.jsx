import React from 'react'
import { FaPlug, FaPlus, FaRupeeSign } from 'react-icons/fa';

const ScholarShipListCard = ({name,sponsor,eligibility,applicationDeadline,type,amount}) => {
  return (
    <div className='scholarship_list  border-b-2 dark:border-gray-500  flex bg-white text-black dark:bg-black dark:text-white   px-5 py-1 cursor-pointer w-full'>
        <div className='flex-grow'>
                <h4 className='text-blue-600 hover:underline'><strong>{name}</strong></h4>
              <span className='text-sm'>sponsored by {sponsor}</span>
              <div>
                    <strong>Eligibility</strong>
                    <ul>
                        <li className='text-sm'>{eligibility}</li>
                        <li><strong>Type - </strong>{type}</li>
                    </ul>
              </div>
              <span className='text-xs font-thin'>Last date to apply {applicationDeadline}</span>

              <div className='flex items-center justify-between'>
                  <div>
                    <span className="text-blue-600 flex items-center gap-1 ">Amount : <FaRupeeSign className='text-black'/> {amount} </span>
                  </div>
                  <div>
                    <button className='bg-blue-600 text-white px-5 py-1'>Apply</button>
                  </div>
              </div>
        </div>

        <button className=' w-fit h-fit float-right'>
            <span  className=' '><FaPlus className='rotate-45 hover:-rotate-[135deg] transition-all duration-500'/></span>
        </button>
    </div>
  )
}

export default ScholarShipListCard;
