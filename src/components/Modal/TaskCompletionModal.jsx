import React from 'react'
import { FaCheck } from 'react-icons/fa'

const TaskCompletionModal = ({task,png,btnName,fn}) => {
  return (
    <div className='bg-white rounded-xl p-5 lg:h-60 lg:w-60 flex flex-col items-center justify-center gap-y-5 absolute top-1/2 left-1/2 z-[3]  transform -translate-x-1/2 -translate-y-1/2'>
        <div className='h-10 w-10  grid place-content-center border-2 rounded-full'>
            {png}
        </div>
        <p className='text-green-500 text-sm font-semibold'>{task}</p>
        <button onClick={fn} className='w-full bg-blue-500 rounded-xl text-white'>{btnName}</button>
    </div>
  )
}

export default TaskCompletionModal
