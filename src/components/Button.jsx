import React from 'react'

const Button = ({name,bgcolor,textcolour,fn}) => {
  return (
        <button className='bg-[#0057FF] py-2 px-4 text-white rounded-lg w-full' onClick={fn}>{name}</button>
  )
}

export default Button
