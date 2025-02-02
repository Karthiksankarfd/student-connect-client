import React from 'react'
import Navbar from '../components/Oppurtunity/Navbar'
import { Outlet} from 'react-router-dom'



const OppurtunityPage = () => {


  return (
    <main className='h-fit'>
        <Navbar/>
        <Outlet/>
    </main>
  )
}

export default OppurtunityPage
