import React from 'react'

const CustomGoogleLoginBtn = ({fn}) => {
  return (
    <button onClick={fn}  className='flex justify-between p-2 border-2 border-gray-400'>
      <img className='h-5 w-5' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="googlepng" />
      <span>Login With Google</span>
    </button>
  )
}

export default CustomGoogleLoginBtn
