import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { MdOutlineCollectionsBookmark, MdHistory } from "react-icons/md";
import { BiCodeBlock, BiCollapse } from "react-icons/bi";

const LeftNav = () => {
  return (
    <>
      <div className="w-20 flex h-full">
        <div className=" w-full min-w-[80px] px-1 flex flex-col h-full border-r-[1.5px] gap-1 ">
          <NavLink
            to="collection"
            className="w-full  flex flex-col items-center justify-center rounded  mt-1 py-3 text-xs gap-1"
            style={({ isActive }) => ({
              background: isActive ? "#e8eeff" : "",
              color: isActive ? "#2B26FF" : "",
            })}
          >
            <MdOutlineCollectionsBookmark className="text-xl" />
            Collection
          </NavLink>

          <NavLink
            to="api"
            className="text-xs flex flex-col items-center  rounded  justify-center py-3 gap-1"
            style={({ isActive }) => ({
              background: isActive ? " #e8eeff  " : "",
            })}
          >
            <BiCollapse className="text-xl" />
            APIs
          </NavLink>
          <NavLink
            to="environment"
            className="text-xs flex flex-col items-center  rounded  justify-center py-3 gap-1"
            style={({ isActive }) => ({
              background: isActive ? " #e8eeff  " : "",
            })}
          >
            <BiCodeBlock className="text-xl" />
            Environment
          </NavLink>
          <NavLink
            to="history"
            className="text-xs flex flex-col items-center  rounded  justify-center py-3 gap-1"
            style={({ isActive }) => ({
              background: isActive ? " #e8eeff  " : "",
            })}
          >
            <MdHistory className="text-xl" />
            History
          </NavLink>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LeftNav;
