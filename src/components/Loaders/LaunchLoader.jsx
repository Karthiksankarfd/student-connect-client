import React from 'react'

const LaunchLoader = () => {
  return (
    <div className='w-full h-dvh relative bg-white align-center flex justify-center '>
        <div className='relative  lg:w-1/2 flex justify-center'>
                <div className='relative top-1/3  h-fit'>
                        <h1 className='text-blue-500 font-bold text-2xl '>Student Connect</h1>
                        <div className='h-fit relative w-full overflow-hidden  bg-gray-300 rounded-full'>
                                <div className="loader_line h-[3px] w-full rounded-full bg-blue-500 animate-scrollX "></div>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default LaunchLoader
