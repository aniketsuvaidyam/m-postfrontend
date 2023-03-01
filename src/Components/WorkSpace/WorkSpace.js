import React from 'react'
import Header from '../Header/Header'
import LeftSideUI from './LeftSideUI/LeftSideUI'
import RightSideUI from './RightSideUI/RightSideUI'

const WorkSpace = () => {
  return (
    <>
      <div className="w-full h-screen max-w-[1825px] mx-auto">
       {/* Header */}
       <Header/>
       {/* LeftSideUI */}
       <div className="w-full flex h-[90vh] ">
         <LeftSideUI/>
         <RightSideUI/>
       </div>
      </div>  
    </>
  )
}

export default WorkSpace