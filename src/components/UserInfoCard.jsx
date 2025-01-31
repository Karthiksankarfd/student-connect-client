import React, { useContext } from 'react'
import user from "../MockDatas/UserData"
import { SignupContext } from '../context/SignupContext'
import loggedInuser from '../MockDatas/loggedInuser'

const UserInfoCard = () => {
        // const {loggedInuser} = useContext(SignupContext)
  return (
    <section className='p-5 lg:max-w-[250px] sm:w-full rounded-lg h-fit  shadow-xl'>

        {/* <h4 className='user-name text-2xl'>Karthik</h4> */}
        <div className="profile-photo-and-user-name-section  flex gap-x-3 items-center">
                <img className="h-10 w-10 object-cover bg-slate-400 rounded-full" src={loggedInuser.profilePhotoUrl} alt=""  />
                <p>{loggedInuser.name}</p>
        </div>

        <p className="institute-name font-thin text-sm">student@ ICAT college of design and media</p>

        <div>
            {/* <p>{`${loggedInUser?.city},${user[0]?.state}`}</p> */}
            <p>Hvae to update in schema</p>
        </div>
        
    </section>
  )
}

export default UserInfoCard
