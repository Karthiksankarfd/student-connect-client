import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import events from '../MockDatas/events';
import ShortEventInfoCard2 from '../components/ShortEventInfoCard2';
import { ModalContext } from '../context/ModalContext';

const Events = () => {
  const {openEventModal} = useContext(ModalContext)
  return (
    <div>
        <nav className='p-3 bg-white/10 text-black dark:bg-black/10 dark:text-white flex justify-between gap-y-3 '>
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
                <button  onClick={openEventModal}  className="border-[#0057FF] border-2 text-black  py-1 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white   dark:text-white transition-all delay-50">Post Event</button>
        </nav>

      <Swiper className="custom-swiper lg:h-[350px] h-[200px]"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}>
            <SwiperSlide>
                <img  className='lg:h-[350px] h-[200px] w-full object-cover' src="https://media.licdn.com/dms/image/v2/C511BAQHi6nmILtEHDQ/company-background_10000/company-background_10000/0/1583764960473/designup_conference_cover?e=2147483647&v=beta&t=V56rcxHXWyr43Ph6hnM29UJWshfrD8EiYoSZJ229KEI" alt="" />
            </SwiperSlide>
            
            
            <SwiperSlide>
                <img  className='lg:h-[350px] h-[200px] w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/638476bc795c4e5410b55317/d4893c7d-700c-434c-8fba-608de39e3656/website+banner.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img  className='lg:h-[350px] h-[200px] w-full object-cover' src="https://i.ytimg.com/vi/nqzE4u0X52o/maxresdefault.jpg" alt="" />
            </SwiperSlide>
      </Swiper>

      {/* <h4 className='text-center sticky top-0 bg-white py-2'>Upcoming Events</h4> */}
      <div className=" upcoming_events  h-auto rounded-lg dark:bg-transparent  flex flex-wrap  gap-5  gap-y-3 m-auto justify-center lg:mx-40 lg:my-5 ">
          
          {events.map((event,index)=>{
              return <Link to="detail"><ShortEventInfoCard2  key={index} {...event}/></Link>
          })}
                    {/* {events.map((event,index)=>{
              return <ShortEventInfoCard2  key={index} eventImgae={event.image}  eventName={event.name} eventDescription={event.description} venue={event.venue} time={event.time}/>
          })} */}
      </div>
 
     

    </div>

  );
};

export default Events;
