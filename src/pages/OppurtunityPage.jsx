import React, { useState } from 'react'
import Navbar from '../components/Oppurtunity/Navbar'
import JobListCard from '../components/Oppurtunity/JobListCard'
import jobs from '../MockDatas/jobs'
import scholarships from '../MockDatas/scholarships'
import { Outlet, useSearchParams } from 'react-router-dom'
import OppurtunityDetailCard from '../components/Oppurtunity/OppurtunityDetailCard'
import Footer from '../components/Footer'
import ScholarShipListCard from '../components/Oppurtunity/ScholarShipListCard'
import ScholarShipDetailCard from '../components/Oppurtunity/ScholarShipDetailCard'


const OppurtunityPage = () => {


  return (
    <main className='h-fit'>
        <Navbar/>
        <Outlet/>
    </main>
  )
}

export default OppurtunityPage
