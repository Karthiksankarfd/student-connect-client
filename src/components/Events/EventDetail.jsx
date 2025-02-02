import React, { useEffect } from 'react';

const EventDetail = ({...event}) => {

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    },[])

  return (
<div className="event_detail_container bg-white  text-black dark:bg-black dark:text-white rounded-lg shadow-md  lg:w-[calc(100%-30%)] mx-auto grid grid-cols-12 gap-5 mb-5">
    <div className="col-span-full relative ">

        {/* Content goes here */}

        <img className='h-96 backdrop-blur-md absolute in w-full object-cover' src={event.image} alt="loading" />
        <div className='overlay_for_event_banner absolute backdrop-blur-lg inset-0 bg-black/25'></div>
        <img className='w-auto h-96 backdrop-blur-md mx-auto object-contain' src={event.image} alt="" />
    </div>

    {/* second section of the event card */}

    <div className='col-span-full block w-full px-5 '>
        <div className='flex flex-wrap justify-between'>
            <div>
                <h1 className='text-lg'><strong>{event.name}</strong></h1> 
                <span>{event.category} | {event.duration}</span>
            </div>

            <div className='h-fit w-fit bg-blue-500'>
                <button className='items-stretch p-3 bg-purple-600  hover:bg-transparent transition-all text-white text-lg'>
                        Register Now
                </button>
            </div>
        </div>
        <hr className='flex-grow my-3' />
        <span>{event.venue}</span>
    </div>

    {/* third section */}

    <div className='col-span-12 lg:col-span-4 mx-5 lg:m-5  flex flex-col gap-y-3'>
       {event?.hostImage && <img src={event?.hostImage} alt="loading" className='h-20 w-20 rounded-full shadow-xl object-contain' />}   
       <h6 className='text-sm'>Conducted By - {event.conductedBy}</h6>
    </div>

    {/* fourth section  */}
    <div className='col-span-12 lg:col-span-5 m-5 flex flex-col gap-y-3'>
        <h6 className='text-sm'><strong>Eligebility</strong></h6>
        <ul>
            <li  className='text-sm'>Only college students are allowed </li>
        </ul>

        <details>
            <summary className='text-sm'><strong>Terms and conditions</strong></summary>
            <ol className='list-decimal text-sm ml-8 leading-8'>
                <li>Tickets once booked cannot be exchanged or refunded</li>

                <li>An Internet handling fee per ticket may be levied. Please check the total amount before payment</li>

                <li>We recommend that you arrive at-least 30 minutes prior at the venue for a seamless entry </li>

                <li>It is mandatory to wear masks at all times and follow social distancing norms</li>

                <li>Please do not purchase tickets if you feel sick</li>
            </ol>
        </details>

        <details>
             <summary className='text-sm'><strong>About</strong></summary>
             <p className='_event_aboutv text-sm ml-8 leading-8'> {event?.about} </p>
        </details>

    </div>

    {/* fifth section  */}
    <div className='col-span-12 lg:col-span-3 m-5 bg-white'>
    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0606987705546!2d77.6275443757225!3d12.90381851635937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f7928e6ee3%3A0xbed158cdd9b74fe0!2sICAT%20DESIGN%20%26%20MEDIA!5e0!3m2!1sen!2sin!4v1736364711477!5m2!1sen!2sin" width="200" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>

  );
};

export default EventDetail;