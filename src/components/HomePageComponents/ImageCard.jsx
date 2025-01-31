import React from 'react'
import loggedInuser from "../../MockDatas/loggedInuser"
const ImageCard = () => {
  return (
    <section className='ImageCard dark relative   h-fit w-full'>                       
          <img src='https://blog.snappa.com/wp-content/uploads/2024/09/FB-Cover-Photo-Blog-Post-Image-1.jpg' alt='loading' className='col-span-12 max-h-56 h-36 lg:h-36 w-full object-cover rounded-tl-xl rounded-tr-xl'/>
          
          <div className='absolute bottom-1/2 ml-5 top-[110px]  lg:top-[90px] '>
              <img src={loggedInuser.profilePhotoUrl} alt='loading' className={`${loggedInuser?.story ? "border-4 border-blue-500" :"border-none"} rounded-full  h-14 lg:h-24 `}/>
              <h4 className='font-semibold  text-white'>{loggedInuser.name}</h4>
          </div>
          <div className='lg:h-36 h-36  rounded-bl-xl rounded-br-xl w-full'>
           
          </div>
    </section>
  )
}

export default ImageCard