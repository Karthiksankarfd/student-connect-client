
import React, { Children, useState } from 'react'
import { createContext } from 'react'
// create context 
export const ModalContext =  createContext()

const ModalContextProvider = ({children}) => {
  const[isModalActive, setIsModalActive] = useState(false)
  const[isUploadModal, setIsUploadModal] =useState(false)
  const[isUploading, setIsUploading] =useState(false)
  const[isUploaded, setIsUploaded] =useState(false)
  const[isUploadFailed, setIsUploadFailed] = useState(false)
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const openEventModal = () => setIsEventModalOpen(true);
  const closeEventModal = () => setIsEventModalOpen(false);
  return (
    <ModalContext.Provider value={{isUploadModal, setIsUploadModal,isUploading, setIsUploading,isUploaded, setIsUploaded,isUploadFailed, setIsUploadFailed,isModalActive, setIsModalActive,isEventModalOpen, setIsEventModalOpen,openEventModal,closeEventModal}}>{children}</ModalContext.Provider>
  )
}

export default ModalContextProvider;
