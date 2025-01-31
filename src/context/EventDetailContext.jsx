import React, { createContext, useState } from 'react'

export  const EventContext = createContext()

const EventDetailContext = ({children}) => {
    const[event, setEvent]=useState()
    console.log(event)
  return (
    <EventContext.Provider value={{event, setEvent}}>{children}</EventContext.Provider>
  )
}

export default  EventDetailContext
