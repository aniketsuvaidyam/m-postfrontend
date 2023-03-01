import React from 'react'
import ReqBody from './ReqBody/ReqBody'
import ResBody from './ResBody/ResBody'
import Tabs from './Tabs/Tabs'

const ApiBody = () => {
  return (
    <>
      <div className="w-[95%] h-full bg-green-500">
        {/* tabs list */}
        <Tabs/>
        {/* request body */}
        <ReqBody/>
        <ResBody/>
        </div>  
    </>
  )
}

export default ApiBody