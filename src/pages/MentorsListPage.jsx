import React from 'react'

import ProfileCard from '../components/Mentorship/ProfileCard';

import FilterComponent from '../components/Mentorship/FilterComponent';
const mockUserData = {
    profileImage: 'https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fmentor-dashboard%252Fprofile-picture%252FAjay%2520Yadava%2520-%2520rec9aydndxoYWa17i%3Falt%3Dmedia%26token%3D120366e9-4828-47a1-82a7-4114821db964&w=96&q=75',
    name: 'Ajay Yadava',
    location: 'Karnataka, India',
    languages: ["Tamil",'English', 'Hindi'],
    jobTitle: 'Engineering Leader',
    company: 'Google',
    experience: '18+ Years of Experience',
    previousCompanies: ['The', 'InMobi', 'Identity'],
    description: 'I have extensive experience in hiring from both sides (as an interviewer and...)',
    skills: [
      'Java',
      'Python',
      'System Design',
      'LLD',
      'DSA',
      'Distributed Systems',
      'Leadership & Communication',
      'OOP',
      'HDL',
      'Redis',
      'PubSub',
      'C++',
      'REST',
      'Kafka',
    ],
    targetAudience: 'Working Professional',
    targetDomains: 'Backend Developer',
    price: 25000,
  };
const MentorsListPage = () => {
  return (
<div className="mentors_list w-full gap-0 ">
      <div className='mx-20 grid grid-cols-2'>
            <div className='col-span-2 lg:col-span-1 border-[1px]'>
                <ProfileCard user={mockUserData} />
            </div>
          
          <div className='col-span-2 lg:col-span-1 border-y-[1px]'>
                <FilterComponent/>
          </div>
      </div>
  {/* {mentors.map((mentor) => (
    <MentorCard {...mentor} />
  ))} */}
  {/* <Footer /> */}
</div>

  )
}

export default MentorsListPage
