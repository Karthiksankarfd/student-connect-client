import React from 'react'
import API from '../services/API'

const useFetchDatas = () => {

  const fetchdata = (param) =>{
    // if( param){

    // }

    try{
      const fetchEvents = API.get("/events" ,  {headers: {
        "Collection": 'Events',
        'Content-Type': 'application/json'
      }})
    }catch(e){
      console.log(e)
    }
  }

  
  return (
    <div>
      
    </div>
  )
}

export default useFetchDatas
