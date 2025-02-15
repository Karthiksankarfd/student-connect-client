import React, { createContext, useReducer, useState } from 'react'
export  const DataContext = createContext()
const DataContextProvider = ({children}) => {
    const [jobs, setJobs] = useState(null);
    const [events, setEvents] = useState(null);
    const [mentors, setMentors] = useState(null);
    const [internships, setInternShips] = useState (null);
    const [openSource, setOpenSource] = useState(null)
  return (
    <DataContext.Provider value={{jobs, setJobs}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;
