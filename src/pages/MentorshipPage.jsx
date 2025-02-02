import React from 'react'
import HeroSection from '../components/Mentorship/HeroSection'
import Footer from '../components/Footer'


const MentorshipPage = () => {
      
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
