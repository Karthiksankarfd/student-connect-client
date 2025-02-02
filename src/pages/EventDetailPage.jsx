import React, { useContext, useEffect } from 'react'
import EventDetail from '../components/Events/EventDetail'

import { EventContext } from '../context/EventDetailContext' 


const EventDetailPage = () => {
      useEffect(()=>{
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
      },[])
  const{event} = useContext(EventContext)
  return (
        <main className="flex flex-col gap-y-5 mt-5">    
                <nav className='p-3 bg-white/10 border-2 border-b-2 border-black/20 text-black dark:bg-black/10 dark:text-white flex justify-between gap-y-3 '>
                <div className='flex gap-x-5'>
                    {/* <Button name="All"/>
                    <Button name="Category"/>
                    <Button name="Date"/> */}
                    <button className="border-[#0057FF] border-2 text-black  py-1 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white   dark:text-white transition-all delay-50">All</button>

                      <div className='group relative'>
                           <button className="border-[#0057FF] border-2 text-black  py-1 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white   dark:text-white transition-all delay-50">Category</button>

                           <ul className={` clip-path-polygon dark:bg-black/90  dark:text-white bg-white text-black list-none absolute z-50 left-0 mt-2   shadow-lg opacity-0 invisible transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:visible`}>
                                <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap  text-sm">
                                  competitions
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap text-sm">
                                  culturals
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap text-sm">
                                   Games
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap text-sm">
                                   MeetUp
                                </li>
                            </ul>

                      </div>

                    <button className="border-[#0057FF] border-2 text-black  py-1 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white   dark:text-white transition-all delay-50">Date</button>

                </div>
                <button className="border-[#0057FF] border-2 text-black  py-1 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white   dark:text-white transition-all delay-50">Post Event</button>
        </nav>
            <EventDetail {...event}/>
        </main>

  )
}

export default EventDetailPage
