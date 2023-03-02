import React, { useState } from 'react'
import JSONForm from '../JSONForm'
import QueryForm from '../QueryForm/QueryForm'

const ReqTabs = () => {
    const [currentReqTabs, setcurRentReqTabs] = useState('Params')
    return (
        <>
            <div className="w-full ">
                <div className="w-full flex items-center gap-6 px-3 bg-gray-50">
                    <div className={`w-20 h-7 transition-all text-center cursor-pointer text ${currentReqTabs === 'Params' &&
                        'text-blue5 border-b-2 border-blue'}`} onClick={() => setcurRentReqTabs('Params')}>Params</div>
                    <div className={`w-20 h-7 transition-all text-center cursor-pointer text ${currentReqTabs === 'Headers' &&
                        'text-blue5 border-b-2 border-blue'}`} onClick={() => setcurRentReqTabs('Headers')}>Headers</div>
                    <div className={`w-20 h-7 transition-all text-center cursor-pointer text ${currentReqTabs === 'Body' &&
                        'text-blue5 border-b-2 border-blue'}`} onClick={() => setcurRentReqTabs('Body')}>Body</div>
                </div>
                {/* params */}
                {currentReqTabs === 'Params' && <QueryForm />}
                {/* Headers */}
                {currentReqTabs === 'Headers' && <QueryForm />}
                {/* Body */}
                {currentReqTabs === 'Body' && <JSONForm />}
            </div>
        </>
    )
}

export default ReqTabs