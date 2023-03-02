import React, { useContext, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { DataContext } from "../../../../Context/DataProvider";
import ReqTabs from "./ReqTabs/ReqTabs";

const ReqBody = () => {
  const { reqData } = useContext(DataContext);
  const [isLoding, setIsLoding] = useState(false);
  const [data, setData] = useState(reqData.details);
  console.log(data)
  return (
    <>
      <div className="w-full min-h-[100vh] ">
        <div className="flex items-center  p-3 relative ">
          {/* dropdown */}
          <div className="   w-28 h-9 border-gray-300 border  rounded-l-md bg-white  b  focus:outline-none">
            <select
              className="bg-white font-medium rounded-l-md text-gray-700  px-4 h-8 focus:outline-none border-none "
              onChange={(e) => {
                setData({ ...data, method: e.target.value });
              }}
            >
              <option value="GET" selected={data.method.toUpperCase() === "GET"}>
                GET
              </option>
              <option
                value="POST"
                selected={data.method.toUpperCase() === "POST"}
              >
                POST
              </option>
              <option value="PUT" selected={data.method.toUpperCase() === "PUT"}>
                PUT
              </option>
              <option
                value="DELETE" selected={data.method.toUpperCase() === "DELETE"}
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
                setData({ ...data, url: e.target.value });
              }}
              defaultValue={data?.url || ""}
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
        {/* tabs */}
        <ReqTabs />
      </div>
    </>
  );
};

export default ReqBody;
