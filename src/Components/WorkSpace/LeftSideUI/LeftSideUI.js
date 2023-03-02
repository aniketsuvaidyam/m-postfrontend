import React, { useContext, useState } from "react";
import LeftNav from "./LeftNav/LeftNav";
import NavBody from "./NavBody/NavBody";
import { GrFormAdd } from "react-icons/gr";
import { TbDownload } from "react-icons/tb";
import { motion } from "framer-motion";
import { ThreeDots } from "react-loader-spinner";
import { useEffect } from "react";
import { DataContext } from "../../Context/DataProvider";

const LeftSideUI = () => {
  const { workSpaceId } = useContext(DataContext);
  const [workSpaceName, setworkSpaceName] = useState("");
  const [currentNav, setcurrentNav] = useState(
    localStorage.getItem("currentNav")
  );
  localStorage.setItem("currentNav", currentNav);

  let workSpace_Id = JSON.parse(localStorage.getItem("workSpace"));
  useEffect(() => {
    setworkSpaceName("");
    setTimeout(() => {
      setworkSpaceName(workSpace_Id.name);
    }, 600);
  }, [workSpaceId]);
  return (
    <>
      <div className="w-full h-[90vh] ">
        {/* WorkSpace */}
        <div className="w-full h-[8%] flex items-center">
          <div className="w-full h-10 flex justify-between items-center px-3 border-b">
            <div className="text-sm font-medium truncate pr-2">
              {workSpaceName ? (
                <>{workSpaceName}</>
              ) : (
                <div className="pl-6">
                  {" "}
                  <ThreeDots
                    height="60"
                    width="60"
                    radius="9"
                    color="#2563EB"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />{" "}
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="w-6 h-6 bg-yellow-200 rounded-full flex justify-center items-center 
        cursor-pointer"
              >
                <GrFormAdd />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="w-6 h-6 bg-yellow-200 rounded-full flex justify-center items-center 
        cursor-pointer"
              >
                <TbDownload />
              </motion.button>
            </div>
          </div>
        </div>
        {/* LeftNav */}
        <div className="w-full flex h-[92%]">
          <LeftNav {...{ currentNav, setcurrentNav }} />
          <NavBody {...{ currentNav }} />
        </div>
      </div>
    </>
  );
};

export default LeftSideUI;
