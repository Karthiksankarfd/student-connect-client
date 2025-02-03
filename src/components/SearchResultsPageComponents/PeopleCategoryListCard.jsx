import React from 'react'

const PeopleCategoryListCard = ({people}) => {
  return (
    <div className='PeopleCategoryListCard p-3 dark:bg-black dark:text-white text-black bg-white'>
         <div className='flex items-start '>
            <img src={people?.profilePhoto  || "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"} alt="profiephoto" />
            <div className='PeopleCategoryListCard-detail'>
                  <h4 className='text-blue-500'><strong>{people?.name || "no name"}</strong></h4>
            </div>
         </div>
    </div>
  )
}

export default PeopleCategoryListCard

