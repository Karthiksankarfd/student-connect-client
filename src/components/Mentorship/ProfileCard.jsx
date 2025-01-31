import React from 'react';
import { FaLanguage } from 'react-icons/fa';
import Footer from '../Footer';

const ProfileCard = ({ user }) => {
  return (
    <div className="  mb-3 bg-white dark:bg-black text-black dark:text-white  p-4 h-full">
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
                    <img
                    src={user.profileImage}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-2 border-gray-300"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        {/* <p className="text-gray-500 dark:text-gray-400">{user.location}</p> */}
                        {/* <p className="text-sm">💬 {user.languages.join(', ')}</p> */}
                                {/* Location & Rating */}
                                <div className="location_language flex items-center gap-2 mt-2">
                                {/* <span className="text-yellow-500 text-xs">⭐ {rating}</span> */}
                                <span className='text-xs'>{user.location}</span>
                                <span className='text-xs flex items-center gap-3'> <FaLanguage className=''/>{user.languages.map((i)=> i + " | " )}</span>
                            </div>
                    </div> 
        </div>

      {/* Experience Section */}
      <div className="mt-6">
        <p className="flex items-center text-sm bg-yellow-100 dark:bg-yellow-600 rounded-full px-3 py-1 w-fit">
          🚀 {user.jobTitle} at {user.company}
        </p>
        <p className="text-lg font-semibold mt-2">{user.experience}</p>
        <p className="text-gray-500 dark:text-gray-400">{user.previousCompanies.join(' ')}</p>
      </div>

      {/* Description */}
      <div className="mt-4">
        <p className="text-sm">
          {user.description}{' '}
          <span className="text-blue-500 cursor-pointer">Read More</span>
        </p>
      </div>

      {/* Skills Section */}
   
        <div className='mt-6'>
            <h4 className='font-semibold mb-3'>Skills</h4>
            <div className=" flex flex-wrap gap-4">
                {user.skills.map((skill) => (
                <span
                    key={skill}
                    className=" w-fit border-black dark:bg-gray-800 text-xs font-semibold border-[1px] px-2 py-1 text-gray-600 dark:text-gray-300"
                >
                    {skill}
                </span>
                ))}
            </div>
        </div>

      {/* Footer */}
      <div className="grid grid-cols-2 items-center mt-6">
        
        <div className="text-sm col-span-full lg:col-span-1">
          <p><strong>For : </strong> {user.targetAudience}</p>
          <p><strong>Targeting Domains : </strong> {user.targetDomains}</p>
        </div>


      </div>

      <div className='col-span-full lg:col-span-1 flex  mt-4  '>
          <div className='flex flex-wrap items-center gap-5'>
            <p className="text-sm lg:text-lg font-semibold rounded-full  px-4 py-1 border-2 border-blue-400">Starting at ₹{user.price}/Month</p> 
            <button className="text-sm lg:text-lg  bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600">
              Book a Free Trial
            </button>
          </div>
      </div>

    </div>
  );
};

export default ProfileCard;
