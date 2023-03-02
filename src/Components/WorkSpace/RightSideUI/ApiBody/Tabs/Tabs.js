import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { BiCollection } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineAntDesign } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { AddRequest } from "../../../../Redux/Action/AddRequest";
// import { Tabs } from "../../../../Redux/Action/Tabs";
import { motion } from "framer-motion";
import Http from "../../../../../Service/Http";
// import { OpenEnv } from "../../../../Redux/Action/OpenEnv";
import { useContext } from "react";
import { DataContext } from "../../../../Context/DataProvider";

const Tabs = () => {
  const {
    changeAction,
    workSpaceId,
    tabsList,
    setTabsList,
    currentActive,
    setCurrentActive,
  } = useContext(DataContext);
  const [newEnviroment, setNewEnviroment] = useState([]);
  const local_variable = newEnviroment?.filter((e) => e.name !== "Globals");
  const [recentTablength, setrecentTablength] = useState(0);
  // let showEnv_id = useSelector((state) => state.OpenEnvReducer);
  // let tabs = useSelector((state) => state.TabsReducer);

  const newReqObj = {
    name: "Untitled Request",
    type: "request",
    parent: null,
    details: {
      url: "",
      method: "GET",
      headers: {},
      body: {},
      query: {},
    },
  };

  // const tabsList = [newReqObj, newReqObj];

  const handleNewTab = () => {
    let el = { ...newReqObj, _id: recentTablength };
    el.name = el.name;
    setTabsList([...tabsList, el]);
    setCurrentActive(el._id);
    setrecentTablength(recentTablength + 1);
    // tabs.push(el);
    // dispatch(Tabs(tabs));
    // console.log("tabs.length[handleNewTab]", tabsList.length, tabsList);
  };
  const handleTabClose = (e) => {
    let index = tabsList.findIndex((f) => f._id === e._id);
    tabsList.splice(index, 1);
    setTabsList(tabsList);
    // console.log("tabs.length[handleTabClose]", tabsList.length, tabsList);
    setTimeout(() => {
      if (tabsList.length) {
        setCurrentActive(tabsList[index ? index - 1 : 0]._id);
        // setCurrentActive(tabsList[index ? index - 1 : 0]._id);
      } else {
        setCurrentActive(null);
      }
    }, 5);
    // dispatch(Tabs(tabs));
  };

  // const add = useSelector((state) => state.AddRequestReducer);
  // const dispatch = useDispatch();

  const getDetails = (details) => {
    let method = details?.method ? details?.method.toUpperCase() : "NA";
    let colors = {
      GET: "green",
      POST: "blue",
      PUT: "yellow",
      DELETE: "red",
      NA: "grey",
    };
    return { method, color: colors[method.toUpperCase()] };
  };

  const getData = () => {
    let workSpace_Id = JSON.parse(localStorage.getItem("workSpace"));
    Http({
      method: "get",
      url: `${process.env.REACT_APP_BASEURL}/environment/${workSpace_Id?._id}`,
    })
      .then((res) => {
        setNewEnviroment(res.data.environment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    return () => {
      getData();
    };
  }, [changeAction, workSpaceId, tabsList]);

  return (
    <>
      <div className="w-full h-[8vh] bg-white flex">
        <div className="w-[80%]  flex h-full border-b">
          {tabsList?.map((e) => (
            <div
              key={e._id}
              className={`flex items-center justify-between
              ${e._id === currentActive
                  ? "border-b-2 border-b-blue border-r duration-300"
                  : "border-r"
                }
                w-44 min-w-44 px-1 h-full group cursor-pointer`}
              onClick={() => setCurrentActive(e._id)}
            >
              <div className="flex items-center  w-44 min-w-44 h-full gap-2">
                <p
                  className={`text-xs text-${getDetails(e?.details).color}-600`}
                >
                  {getDetails(e?.details).method === "NA" ? e.type === 'folder' ? <BiCollection /> : (
                    <AiOutlineAntDesign className="text-xl text-gray-500" />
                  ) : (
                    <>{getDetails(e?.details).method}</>
                  )}
                </p>
                <p className="flex items-center text-xs  h-full">{e.name}</p>
              </div>
              <RxDotFilled className="text-2xl text-blue group-hover:hidden block" />
              <IoIosClose
                className="text-2xl cursor-pointer hidden group-hover:block"
                onClick={() => handleTabClose(e)}
              />
            </div>
          ))}
          {/* new Request add btn */}
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="h-full flex items-center ml-1"
          >
            <AiOutlinePlus
              className="cursor-pointer hover:bg-slate-200 w-8 h-8 p-2 rounded-md"
              onClick={handleNewTab}
            />
          </motion.div>
        </div>
        {/* ===========environment selected ===========*/}
        <div className="w-[20%] border-l border-b flex justify-center items-center gap-2 relative">
          <select
            className="w-full h-full outline-none text-sm pl-2"
          //  onChange={(e) => dispatch(OpenEnv(e.target.value))}
          >
            <option value="null" className={`w-full text-sm`}>
              No Enviroment
            </option>
            {local_variable?.map((e) => (
              <option
                // selected={e._id === showEnv_id}
                key={e._id}
                className={`w-full text-sm `}
                value={e._id}
              >
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Tabs;
