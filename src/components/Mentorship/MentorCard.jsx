import React from 'react';
import { FaLanguage } from 'react-icons/fa';

const MentorCard = ({ id, name, expertise, experience, about, profileImage, rating, availableSlots,bio ,location,languages,country}) => {
  return (
    <div className="mentor_card bg-white text-black shadow-lg dark:bg-black dark:text-white p-5 flex gap-x-5 lg:w-[calc(100%-70%)]" key={id} >
      {/* Image Section */}
      {/* <div className="details_container_main"> */}
        <img src={profileImage} alt={name} className="mentor_image items-stretch object-cover" />
      {/* </div> */}
              {/* Details Section */}
            <div className="detail_mentor">
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-sm text-gray-500">{expertise} - {experience}</p>

          {/* Location & Rating */}
          <div className="location_language flex items-center gap-2 mt-2">
            <span className="text-yellow-500 text-xs">⭐ {rating}</span>
            <span className='text-xs'>{location} - {country}</span>
            <span className='text-xs flex items-center gap-3'> <FaLanguage/>{languages.map((i)=> i + " | " )}</span>
          </div>

          {/* About Section */}
          <p className="mentor_bio mt-2 text-sm text-black-700">{bio}</p>

          {/* Available Slots */}
          <div className="available_slots mt-4 ">
            <h3 className="font-bold text-sm">Available Slots:</h3>
            <ul className="list-disc list-inside flex gap-3" >
              {availableSlots && availableSlots.length > 0 ? (
                availableSlots.map((slot, index) => {
                  return(
                  <div className='border-blue-400 border-[1px] p-2 w-16'>
                      <li className='w-1/3 list-none text-xs font-semibold' key={index}>{slot.day.substring(0,3)}</li>
                      <li className=' w-1/3 list-none text-xs font-semibold' key={index}>{slot.time}</li>
                      <li className='w-1/3 list-none text-xs font-semibold' key={index}>{slot.session}</li>
                    </div>
                  )
                
              })
              ) : (
                <li>No available slots</li>
              )}
            </ul>
          </div>
        </div>
    </div>
  );
};

export default MentorCard;
