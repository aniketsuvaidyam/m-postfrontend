import React, { useContext, useEffect, useState } from "react";
import Http from "../../../../../Service/Http";
import BodyHead from "../BodyHead/BodyHead";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoCheckmarkDoneCircleOutline, IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import MoreAction from "../MoreAction/MoreAction";
import { DataContext } from "../../../../Context/DataProvider";
// import { CollectionLoader } from "../../../Loader/Loader";
import EditAction from "../MoreAction/EditAction";
// import { Scrollbars } from 'react-custom-scrollbars';
// import { OpenEnv } from "../../../../Redux/Action/OpenEnv";

const EnvironmentBody = () => {
    const [newEnviroment, setNewEnviroment] = useState([]);
    const [loader, setLoader] = useState(true);
    const { setcolId, collEdit, changeAction, setchangeAction, setMsg, tabsList, setTabsList,
        setCurrentActive, setError, workSpaceId, setStatus } = useContext(DataContext);
    const global_variable = newEnviroment?.filter(e => e.name === 'Globals')
    const local_variable = newEnviroment?.filter(e => e.name !== 'Globals')
    // let showEnv_id = useSelector((state) => state.OpenEnvReducer);
    // let tabs = useSelector((state) => state.TabsReducer);


    const postData = () => {
        let workSpace_Id = JSON.parse(localStorage.getItem('workSpace'));
        Http({
            url: `${process.env.REACT_APP_BASEURL}/environment`,
            method: "post",
            data: {
                name: 'New Environment',
                workspace_id: workSpace_Id._id
            }
        })
            .then((res) => {
                // setchangeAction('A')
                setMsg(res.data.message);
                setStatus(res.status);
                setError(true)
            })
            .catch((err) => {
                setMsg(err.response.data.message);
                setStatus(err.response.status);
                setError(true)
            });
    };

    const getData = () => {
        setLoader(true)
        let workSpace_Id = JSON.parse(localStorage.getItem('workSpace'));
        Http({
            method: "get",
            url: `${process.env.REACT_APP_BASEURL}/environment/${workSpace_Id?._id}`,
        })
            .then((res) => {
                setTimeout(() => {
                    setLoader(false);
                }, 1000);
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
    }, [changeAction, workSpaceId]);
    const handleRequest = (e) => {
        if (tabsList.findIndex((f) => f._id === e._id) < 0) {
            setTabsList([...tabsList, e]);
            // dispatch(OpenEnv(e._id));
            setCurrentActive(e._id);
        }
    };
    const openRequest = (ce) => {
        ce.openRequest = !ce.openRequest;
        setNewEnviroment([...newEnviroment]);
    };
    return (
        <div className="w-full">
            <BodyHead {...{ postData, title: "Create environment" }} />
            {loader === true ? (
                <>
                    {/* {newEnviroment?.map((e) => (
                        <CollectionLoader key={e._id} />
                    ))} */}
                </>
            ) : (
                <>
                    <div className="w-full relative">
                        {/* global */}
                        <div className=" w-full">
                            {global_variable?.map((ce) => (<div key={ce._id}>
                                <div className="w-full h-11 flex cursor-pointer items-center px-2" >
                                    <div className="flex items-center gap-2 w-full h-11 border-b" onClick={() => handleRequest(ce)} >
                                        <p className={`w-full text-xs font-medium pl-4 hover:bg-gray-200 h-8 flex items-center
                      
                      }`}> {ce.name}</p>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                        {/* local */}
                        <div className="w-full h-[85vh] min-h-[63vh]">
                            <div className=" w-full pt-1">
                                {local_variable?.map((ce) => (<div key={ce._id}>
                                    <div className={`w-full h-8  relative group flex cursor-pointer items-center hover:bg-gray-200
                                 border-b py-1 px-2 `} >
                                        <div className="flex items-center gap-2 w-full h-8 " onClick={() => handleRequest(ce)} >
                                            <p className="text-xs font-normal pl-4"> {ce.name}</p>
                                        </div>
                                        {
                                            // ce._id === showEnv_id ? 
                                            true ? < IoCheckmarkDoneCircleSharp className="cursor-pointer mr-8
                                        text-gray-500 text-2xl"  /> :
                                                <IoCheckmarkDoneCircleOutline className="cursor-pointer hidden group-hover:block mr-8
                                       text-gray-500 text-2xl"
                                                //    onClick={() => dispatch(OpenEnv(ce._id))}
                                                />}
                                        <p className="hidden group-hover:block absolute right-2" onClick={() => setcolId(ce)}  >
                                            <BiDotsHorizontalRounded className="cursor-pointer" onClick={() => openRequest(ce)} />
                                        </p>
                                        {/* moreaction */}
                                        {ce.openRequest ? (
                                            <div className="absolute z-50 right-3 top-9">
                                                <MoreAction {...{ collection: 'environment' }} />
                                            </div>) : null}
                                    </div>
                                </div>))}
                            </div>
                        </div>
                    </div>
                </>
            )}
            {collEdit === true ? <EditAction {...{ apiUrl: 'environment' }} /> : null}
        </div>
    );
};

export default EnvironmentBody;
