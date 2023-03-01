import React from "react";
import LeftNav from "./LeftNav/LeftNav";
import NavBody from "./NavBody/NavBody";

const LeftSideUI = () => {
  return (
    <>
      <div className="w-full h-[90vh] bg-red-800">
        {/* WorkSpace */}
        <div className="w-full h-[10%] bg-blue-600"></div>
        {/* LeftNav */}
        <div className="w-full flex h-[90%]">
          <LeftNav />
          <NavBody />
        </div>
      </div>
    </>
  );
};

export default LeftSideUI;
