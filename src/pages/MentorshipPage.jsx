import React from 'react'
import HeroSection from '../components/Mentorship/HeroSection'
import mentors from '../MockDatas/mentors'
import MentorCard from '../components/Mentorship/MentorCard'
import Footer from '../components/Footer'
import ProfileCard from '../components/Mentorship/ProfileCard'
import { useNavigate } from "react-router";
const MentorshipPage = () => {
      const navigate = useNavigate()
  return (
    <main className='h-auto'>

           <HeroSection/>

            {/* {mentors.map((mentor)=>{
              return (<MentorCard {...mentor}/> ) 
            })} */}
             {/* <ProfileCard user = {mockUserData}/> */}
            <Footer/>
            
    </main>
  )
}

export default MentorshipPage
