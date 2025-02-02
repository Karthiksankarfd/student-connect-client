import { useEffect, useState } from 'react';

import ScholarShipDetailCard from '../components/Oppurtunity/ScholarShipDetailCard';
import ScholarShipListCard from '../components/Oppurtunity/ScholarShipListCard';
import scholarships from '../MockDatas/scholarships';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';

const ScholarshipPage = () => {
  const [scholarShip,setScholarShip] = useState(scholarships[0])
  
  let width = window.innerWidth

  useEffect(()=>{
    console.log(width)
    if(window.innerWidth < 500){
        <Route path='/' element={<HomePage/>}></Route>
    }
  },[width])

  return (
      <div  className='grid grid-cols-1 lg:grid-cols-2 lg:mx-[5%]'>
          <div className='col-span-1'>
              {scholarships.map((scholarship,index)=> <ul>
                <li onClick={()=>setScholarShip(scholarship)} key={scholarship.id}><ScholarShipListCard {...scholarship}/></li>
              </ul>)}
          </div>

          <div className='col-span-1'>
              <ScholarShipDetailCard {...scholarShip}/>
          </div>
    </div>
  );
};

export default ScholarshipPage;

