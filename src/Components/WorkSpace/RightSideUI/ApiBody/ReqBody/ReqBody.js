import React, { useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const ReqBody = () => {
  const [isLoding, setIsLoding] = useState(false);
  return (
    <>
      <div className="w-full min-h-[100vh] bg-slate-400">
        <div className="flex pt-2.5  items-center  px-3 relative ">
          {/* dropdown */}
          <div className="   w-28 h-9 border-gray-300 border  rounded-l-md bg-white  b  focus:outline-none">
            <select
              className="bg-white font-medium rounded-l-md text-gray-700  px-4 h-8 focus:outline-none border-none "
              onChange={(e) => {
                // setData({ ...data, method: e.target.value });
              }}
            >
              <option value="GET" >
                GET
              </option>
              <option
                value="POST"
              >
                POST
              </option>
              <option value="PUT" >
                PUT
              </option>
              <option
                value="DELETE"
              >
                DELETE
              </option>
            </select>
          </div>

          {/* input field */}
          <div className="w-full  input-container ">
            <input
              placeholder="Entet Request URL"
              type="url"
              className="text-xs font-semibold px-2 h-9 w-full border-gray-300 border
             bg-white focus:outline-none"
              onChange={(e) => {
                // setData({ ...data, url: e.target.value });
              }}
            // defaultValue={data?.url || ""}
            />

          </div>
          {/* button */}
          <div className="h-9">
            <button
              className="bg-blue hover:bg-blue7 text-white font-semibold py-1.5 px-4 rounded-r-md "
            // onClick={onSendClick}
            >
              SEND
            </button>
          </div>
          <div>
            <ul className="flex gap-3 pl-3 text-xl">
              <li>
                {isLoding === true ? (
                  <p className="flex items-center text-gray-400">
                    <AiOutlineSave />
                    ..
                  </p>
                ) : (
                  <AiOutlineSave
                    className=" cursor-pointer"
                  // onClick={tabData.parent ? Save : () => setopen(true)}
                  />
                )}
              </li>
              <li>
                <BsThreeDots className=" cursor-pointer" />
              </li>
            </ul>
          </div>
          {/* {open === true ? <NewRequest setopen={setopen} details={data} /> : null} */}
        </div>
      </div>
    </>
  );
};

export default ReqBody;
