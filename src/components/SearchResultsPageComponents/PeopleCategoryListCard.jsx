import React from 'react'

const PeopleCategoryListCard = ({...person}) => {
  return (
    <div className='PeopleCategoryListCard p-3 dark:bg-black dark:text-white text-black bg-white w-full'>
         <div className='flex justify-start gap-3 '>
            <img src={person?.profilePhotoUrl || "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"} alt="profiephoto" className='h-14 w-14 rounded-full object-cover aspect-square' />
            <div className='PeopleCategoryListCard-detail w-full'>
                  <h4 className='text-blue-500 font-semibold'>{person?.name.toUpperCase() || "no name"}</h4>
                  <p>{person?.about}</p>
                  <p className='text-sm font-light'><span>{person?.location?.state }</span> , <span>{person?.location?.country }</span></p>
                  <hr className='flex-grow'/>
            </div>
         </div>
         
    </div>
  )
}

export default PeopleCategoryListCard

