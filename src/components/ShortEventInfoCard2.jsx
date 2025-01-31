import React, { useContext, useState } from 'react'
import EventDetail from './Events/EventDetail'
import { EventContext } from '../context/EventDetailContext' 

const ShortEventInfoCard2 = ({...event}) => {

  const {setEvent} = useContext(EventContext)
  
  return (
<>
<div onClick={()=>{ setEvent(event);console.log(event)}} className='rounded-xl dark w-96 object-cover bg-[white]  text-black dark:bg-black dark:text-white  '>
      {/* img */}
      <img src={event.image} alt="" className='w-full h-40  object-cover rounded-t-xl' />
      <div className=' flex flex-col gap-y-2 h-40 p-5'>
      <h4 className="eventName  font-semibold text-xl">{event.name}</h4>
            <span className='event-venu-and-time text-xs'>{event.venue}</span>
            <span className='event-venu-and-time text-xs'>{event.time}</span>
            <p className='event-description text-xs'>{event.description}</p>
      </div>
    </div>
</>
  )
}

export default ShortEventInfoCard2

