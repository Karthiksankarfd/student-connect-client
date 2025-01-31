import React from 'react'
import user from "../MockDatas/UserData"
import Button from './Button'
const ReleventUsers = () => {
  return (
    <section className='hidden lg:block p-5  rounded-lg h-96 overflow-y-scroll sm:w-full bg-white'>
          {user.map((user,index)=>{
            return <div key={index} className='  relevent_people_card grid grid-rows-[auto_1fr] mb-2 rounded-lg shadow-lg p-2  border-2'>
                <div className='grid grid-cols-[auto_1fr] items-center gap-4'>
                    <img className='h-10 w-10 rounded-full object-cover' src={user.profileImage} alt="" />
                    <h4 className="w-fit font-medium">{user.name}</h4>
                </div>
                <div>
                    <p className="text-sm text-gray-600">{user.bio}</p>
                </div>
                <div className='Follow-btn'>
                    <Button name ="follow"/>
                </div>
            </div>
          })}
    </section>
  )
}

export default ReleventUsers
