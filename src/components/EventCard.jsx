import React from 'react'
import { FaClock, FaTimes } from 'react-icons/fa'

// image={event.image}  name={event.name} eventDescription={event.description} venue={event.venue} time={event.time}
const EventCard = ({image,name,date,venue,eventDescription,time}) => {
  return (
    <div className='bg-white shadow-black/30 shadow-xl text-black dark:bg-gray-900 dark:text-white p-2 w-auto h-fit flex items-center justify-between  m-2 rounded-xl border-2 border-gray-400'> 
        <div className="text-area">
            <h4>{name}</h4>
            {/* <p className='text-xs'>{eventDescription}</p    > */}
            <span className='text-xs'>{venue}</span>
            <span className='flex items-center gap-x-2 text-xs'><FaClock />{time}</span>
        </div>
        <img src={image} alt="eventimage" className='w-14 pl-2 h-14 object-cover items-baseline' />
    </div>
  )
}

export default EventCard
