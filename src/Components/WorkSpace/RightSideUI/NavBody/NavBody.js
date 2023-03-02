import React, { useState } from "react";
import { BsCaretRight, BsCode } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { motion } from "framer-motion";
// import ModelBox from "../../ModelBox/ModelBox";

const RightBar = () => {
  const [open, setOpenn] = useState(false);

  const envirmentOpen = () => {
    setOpenn(!open);
  };

  return (
    <>
      <div className=" h-[90vh] bg-orange-500  relative shadow-md">
        <div className="flex flex-col justify-between items-center w-12 min-w-[48px] bg-white h-full py-1.5">
          <div className="flex flex-col gap-1">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className={`hover:bg-blue-200 w-8 h-8 flex justify-center items-center
                             cursor-pointer rounded-md  group ${
                               open === true ? "bg-blue-200" : null
                             }`}
              onClick={envirmentOpen}
            >
              {/* <ModelBox {...{ set: setOpenn }} /> */}
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.75 }}
              className="hover:bg-blue-200 w-8 h-8 flex justify-center items-center 
                             rounded-md cursor-pointer group"
            >
              <BsCode className=" group-hover:text-blue-600" />
            </motion.div>
          </div>
          <div className="flex flex-col gap-0.5">
            <div
              className="hover:bg-blue-200 w-8 h-8 flex justify-center items-center 
                             rounded-md cursor-pointer group"
            >
              <BsCaretRight className=" group-hover:text-blue-600" />
            </div>
            <p className="text-[10px] w-full flex justify-center">Runner</p>
            <div
              className="hover:bg-blue-200 w-8 h-8 flex justify-center items-center 
                             rounded-md cursor-pointer group"
            >
              <FiTrash2 className=" group-hover:text-blue-600" />
            </div>
            <p className="text-[10px] w-full flex justify-center">Trash</p>
            <div
              className="hover:bg-blue-200 w-8 h-8 flex justify-center items-center 
                             rounded-md cursor-pointer group"
            >
              <BiHelpCircle className=" group-hover:text-blue-600" />
            </div>
            <p className="text-[10px] w-full flex justify-center">Help</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBar;
