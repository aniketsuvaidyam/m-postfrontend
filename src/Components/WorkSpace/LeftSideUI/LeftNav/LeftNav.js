import React from "react";
import { MdOutlineCollectionsBookmark, MdHistory } from "react-icons/md";
import { BiCodeBlock, BiCollapse } from "react-icons/bi";

const LeftNav = ({ currentNav, setcurrentNav }) => {
  return (
    <>
      <div className="w-20 flex h-full">
        <div className=" w-full min-w-[80px] px-1 flex flex-col h-full border-r-[1.5px] gap-1 ">
          <div className={`w-full  flex flex-col items-center justify-center rounded  mt-1 py-3 text-xs gap-1
          cursor-pointer hover:bg-blue6 opacity-60 transition-opacity hover:text-white ${currentNav === 'Collection' &&
            'bg-blue4 opacity-60 transition-opacity text-white'}`} onClick={() => setcurrentNav('Collection')} >
            <MdOutlineCollectionsBookmark className="text-xl" />
            Collection
          </div>
          <div className={`w-full  flex flex-col items-center justify-center rounded  mt-1 py-3 text-xs gap-1
          cursor-pointer hover:bg-blue6 opacity-60 transition-opacity hover:text-white ${currentNav === 'APIs'
            && 'bg-blue4 opacity-60 transition-opacity text-white'}`} onClick={() => setcurrentNav('APIs')} >
            <BiCollapse className="text-xl" />
            APIs
          </div>
          <div className={`w-full  flex flex-col items-center justify-center rounded  mt-1 py-3 text-xs gap-1
          cursor-pointer hover:bg-blue6 opacity-60 transition-opacity hover:text-white ${currentNav === 'Enviroment' &&
            'bg-blue4 opacity-60 transition-opacity text-white'}`} onClick={() => setcurrentNav('Enviroment')} >
            <BiCodeBlock className="text-xl" />
            Enviroment
          </div>
          <div className={`w-full  flex flex-col items-center justify-center rounded  mt-1 py-3 text-xs gap-1
          cursor-pointer hover:bg-blue6 opacity-60 transition-opacity hover:text-white ${currentNav === 'History'
            && 'bg-blue4 opacity-60 transition-opacity text-white'}`} onClick={() => setcurrentNav('History')}>
            <MdHistory className="text-xl" />
            History
          </div>


        </div>
      </div>
    </>
  );
};

export default LeftNav;
