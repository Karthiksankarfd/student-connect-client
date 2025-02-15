import React, { useContext } from 'react'
import { SignupContext } from '../../context/SignupContext'
import useSignup from '../../hooks/useSignup'

const PersonalInformation = () => {
    const {signUpUser, setSignUpUser} = useContext(SignupContext)
    const{createUser} = useSignup()
    console.log(signUpUser)
  return (
<div className='flex justify-center items-center h-auto '>
<section className='border-2  rounded-lg lg:w-1/2 p-5 my-5 shadow-lg   bg-[#FAF9F9] grid  relative'>
          {/* <div className='col-span-full grid place-items-end'>
            <button className='border-[#0057FF] border-2 text-black py-2 px-5 rounded-0 text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50'>X</button>
          </div> */}



          <form className='personal_data grid w-full '>
          <div className="profile_and_cover relative h-fit w-full ">
                <img src={ signUpUser.coverPhoto? URL.createObjectURL(signUpUser.coverPhoto) : ""} alt="No_cover_photo" className=" backdrop-filter-blur bg-gray-400 profile_image rounded-md h-40 w-full object-cover mb-5" />
                
                <img src={ signUpUser.profilePhoto ? URL.createObjectURL(signUpUser.profilePhoto) : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"} alt="" className="top-7 left-7 absolute profile_image rounded-full h-20 w-20 object-cover mb-5" />
        </div>
       
                <div className='grid lg:grid-cols-12 grid-cols-1 grid-flow-row gap-y-3 gap-x-3'>
                        <div className='lg:col-span-6 col-span-12'>
                            <input type="file" id='profile'  className="border-2 border-gray-400 rounded-lg px-4 py-1 w-full text-black focus:outline-none hidden" onChange={(e)=>setSignUpUser( (prevUser)=>({...prevUser, profilePhoto:e.target.files[0]}))} />
                            {signUpUser.profilePhoto ? ( <><label className=" text-white text-center rounded-lg text-sm font-medium bg-blue-600 p-2 block" htmlFor="profile">Change Profile</label> <br /></>) : (<><label className=" text-white text-center rounded-lg text-sm font-medium bg-blue-600 p-2 block" htmlFor="profile">Upload profile photo</label> <br /></>) }
                            {/* <label className=" text-white text-center rounded-lg text-sm font-medium bg-blue-600 p-2 block" htmlFor="profile">Upload profile photo</label> <br /> */}
                        </div>
                        <div className='lg:col-span-6 col-span-12'>
                            <input type="file" id='cover' className="border-2 border-gray-400 rounded-lg px-4 py-1 text-black focus:outline-none hidden"  onChange={(e)=>setSignUpUser( (prevUser)=>({...prevUser, coverPhoto:e.target.files[0]}))}/>
                            {signUpUser.coverPhoto ? ( <><label className=" text-white text-center rounded-lg text-sm font-medium bg-blue-600 p-2 block" htmlFor="profile">Change Cover Photo</label> <br /></>) : (<><label className=" text-white text-center rounded-lg text-sm font-medium bg-blue-600 p-2 block" htmlFor="profile">Upload cover photo</label> <br /></>) }
                        </div>
                         <p className='col-span-full text-xs font-semibold text-blue-500 w-full block'>The name you fill in the *Name field will be shown as your user name </p>
                        
                        <div className='lg:col-span-12 col-span-12 '>
                            <label className=" text-gray-500 text-sm font-medium col-span-3" htmlFor="name">Name </label> <br />
                            <input type="text"   placeholder='How you want others to identify ?' className="border-2 border-gray-400 w-full block rounded-lg px-4 py-1 text-black focus:outline-none" onChange={(e)=>setSignUpUser((prevUser)=>({...prevUser, name:e.target.value}))} />
                        </div>
                        
                        {/* <div className='lg:col-span-6 col-span-12'>
                            <label htmlFor="contactdetails">Email</label> <br />
                            <input type="phone" placeholder='exampleuser@gmail.com'  className="border-2 w-full block border-gray-400 rounded-lg px-4 py-1 text-black focus:outline-none" />
                        </div> */}

                        {/* <div className='lg:col-span-4 col-span-12'>
                            <label className=" text-gray-500 text-sm font-medium" htmlFor="name">Full Name</label> <br />
                            <input type="text" className="border-2 border-gray-400 rounded-lg px-4 py-1 text-black focus:outline-none" />
                        </div> */}


                        {/* <div className='lg:col-span-3 col-span-12'>
                            <label className=" text-gray-500 text-sm font-medium" htmlFor="name">Gender</label>  <br />
                              <input type="radio" id="male" name="male" value="male"/>
                              <label for="male">male</label> 
                              <input type="radio" id="female" name="female" value="female"/>
                              <label for="male">female</label> 
                        </div> */}

                        {/* <p className='contact_details col-span-full text-xs font-semibold text-blue-500'>The contact details you provide here will be visible for public</p> */}

                        {/* <div className='lg:col-span-6 col-span-12'>
                            <label htmlFor="contactdetails">Phone</label> <br />
                            <input type="tel"  className="border-2 w-full block border-gray-400 rounded-lg px-4 py-1 text-black focus:outline-none" placeholder="65464-54654" pattern="[6-9]{1}-[0-9]{9}" title="Enter a valid 10-digit Indian mobile number starting with 6-9"
                            />

                        </div> */}

                        {/* <div className="location_city lg:col-span-4 col-span-12">
                            <label htmlFor="city" className='text-gray-500 '>City</label> <br />
                            <select name="location" id="city" className='border-2 w-full block border-gray-400 py-1 rounded-lg'>
                                <option value="select-location">select-location</option>
                                <option value="Bangalore">Bangalore</option>
                            </select>
                        </div>

                        <div className="location_state lg:col-span-4 col-span-12">
                            <label htmlFor="State" className='text-gray-500 '>State</label> <br />
                            <select name="location" id="State" className='border-2 w-full block border-gray-400 py-1 rounded-lg'>
                                <option value="select-location">select-location</option>
                                <option value="Bangalore">karnataka</option>
                            </select>
                        </div>

                        <div className="location_state lg:col-span-4 col-span-12">
                            <label htmlFor="State" className='text-gray-500 '>city</label> <br />
                            <select name="location" id="State" className='border-2 w-full block border-gray-400 py-1 rounded-lg'>
                                <option value="select-location">select-location</option>
                                <option value="Bangalore">karnataka</option>
                            </select>
                        </div> */}
                        <p className='contact_details col-span-full text-xs font-semibold text-blue-500'>The  details you provide here will be visible for public</p>
                        <div className='lg:col-span-12 col-span-12 '>
                            <label htmlFor="about " className='text-gray-500'>Bio</label>
                            <textarea placeholder="About your self" id="about" value={signUpUser.about} className="bio_field border-2  border-gray-500 text-black rounded-lg col-span-full p-3 h-fit w-full  block" onChange={(e)=>setSignUpUser((prevUser)=>({...prevUser, about:e.target.value}))}>
                            </textarea>        
                        </div>


                        <button  className='col-span-12 bg-blue-600 text-white py-2 justify-center rounded-lg' onClick={createUser}>complete signup</button>

                </div>
          </form>
    </section>
</div>
  )
}

export default PersonalInformation
