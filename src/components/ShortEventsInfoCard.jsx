import React from 'react'


const ShortEventsInfoCard = ({eventImgae, eventName, eventDescription,venue,time}) => {
  return (
    <div className='ShortEventsInfoCard p-1 dark  h-52 relative w-96 text-white overflow-hidden group rounded-xl'>
        <img src={eventImgae} alt="eventImage" className='absolute top-0 left-0 -z-[1] h-52 w-full object-cover group-hover:scale-110 transition-all duration-300' />
        <div className='overlay-event-card h-full w-full bg-black/70 absolute top-0 left-0 -z-[0] '></div>
        <div className="overlay-text absolute top-0 h-fit z-[1] p-5 flex flex-col items-start gap-y-2">
            <h4 className="eventName  font-semibold text-xl">{eventName}</h4>
            <p className='event-description text-xs'>{eventDescription}</p>
            <span className='event-venu-and-time text-xs'>{venue}</span>
            <span className='event-venu-and-time text-xs'>{time}</span>
            <button className='bg-blue-500 px-3 py-1 rounded-lg text-sm'>View Event</button>
        </div>



    </div>

  )
}

export default ShortEventsInfoCard
