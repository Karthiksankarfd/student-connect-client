import React from 'react'
import { FaHamburger, FaSearch } from 'react-icons/fa'

const NavbarTwo = () => {
  return (
    <div className=' navbar-two grid grid-flow-col grid-cols-12 bg-white p-3 w-full col-span-12 gap-x-5'>
    <div className='lg:col-span-2 col-span-12'><FaHamburger className='lg:hidden'/></div>
    <div className='w-full h-fit  block relative lg:col-span-4 col-span-12'>
        <input type='text' placeholder='serach ... ' className="col-span-6  w-full py-1 px-3 border-2 rounded-xl" />
        <button><FaSearch className='w-full absolute top-1/2 left-[95%] -translate-x-1/2 -translate-y-1/2 '/></button>
    </div>
    {/* show only when user logged in */}
    <button className='lg:col-span-4 col-span-12 text-white bg-black rounded-lg px-5' >Log out</button>  

    <div className='lg:col-span-4 col-span-12 bg-black'>
        <label htmlFor="dark-light-switch" className='text-white'>Dark Light</label>
        {/* <input type="checkbox" id='dark-light-switch' className='block w-full h-full'/>  */}
    </div>
    <div className='lg:col-span-4 col-span-12'></div>
</div>
  )
}

export default NavbarTwo

