import React from "react";
import ApiBody from "./ApiBody/ApiBody";
import NavBody from "./NavBody/NavBody";

const RightSideUI = () => {
  return (
    <>
      <div className="w-full h-full bg-red-800 flex">
        <ApiBody />
        <NavBody />
      </div>
    </>
  );
};

export default RightSideUI;
