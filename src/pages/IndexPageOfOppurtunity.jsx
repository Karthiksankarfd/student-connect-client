import React, { useState } from 'react'
import OppurtunityDetailCard from '../components/Oppurtunity/OppurtunityDetailCard';
import jobs from '../MockDatas/jobs';
import { useSearchParams } from 'react-router-dom';
import JobListCard from '../components/Oppurtunity/JobListCard';

const IndexPageOfOppurtunity = () => {
    const [searchParams, setSearchParams] = useSearchParams("CURRENTJOBID");
    // const CURRENTJOBID = searchParams.get("CURRENTJOBID")
    const[currentJob,  setCurrentJob] = useState(jobs[0])
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-fit'>
            <div className='w-auto   overflow-y-scroll '>
                <ul>
                    {jobs.map((job)=>{
                    return <li className='border-b-2 border-r-2 dark:border-gray-500' onClick={()=>{setSearchParams({CURRENTJOD :job.id,TYPE:"job"});setCurrentJob(job)}} key={job.id}><JobListCard {...job}/></li>
                    })}
                </ul>
            </div>
            
            <div className='w-auto  overflow-y-scroll'>
                    <OppurtunityDetailCard {...currentJob}/>
            </div>
    </div>
  )
}

export default IndexPageOfOppurtunity
