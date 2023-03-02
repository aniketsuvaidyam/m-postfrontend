import React, { useContext } from "react";
import Http from "../../../../../Service/Http";
import { DataContext } from "../../../../Context/DataProvider";

const MoreAction = ({ collection }) => {
    const { collEdit, setCollEdit, colId, setchangeAction, setStatus,
        setMsg, setError, workSpaceId } = useContext(DataContext);

    const deleteData = () => {
        Http({
            url: `${process.env.REACT_APP_BASEURL}/${collection}/${colId._id}`,
            method: "delete",
        })
            .then((res) => {
                setMsg(res.data.message);
                setStatus(res.status);
                setError(true)
                // setchangeAction("C")
            })
            .catch((err) => {
                setMsg(err.response.data.message);
                setStatus(err.response.status);
                setError(true)
            });
    };

    const postData = () => {
        let workSpace_Id = JSON.parse(localStorage.getItem("workSpace"));
        Http({
            url: `${process.env.REACT_APP_BASEURL}/collection`,
            method: "post",
            data: {
                name: "New Request",
                type: "request",
                parent: colId._id,
                workspace_id: workSpace_Id,
                details: { method: "GET", url: "" },
            }
        })
            .then((res) => {
                // setchangeAction("D")
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

    return (
        <>
            <div className="w-48 border bg-gray-100 drop-shadow-md rounded-md">
                <div className="flex flex-col justify-center w-full py-1 ">
                    <div className="w-full px-4 py-1.5 hover:bg-white cursor-pointer text-sm font-normal"
                    >Share</div>
                    <div className="w-full px-4 py-1.5 hover:bg-white cursor-pointer text-sm font-normal"
                        onClick={() => setCollEdit(!collEdit)} >Rename</div>
                    <div className="w-full px-4 py-1.5 hover:bg-white cursor-pointer text-sm font-normal"
                    >Add folder</div>
                    <div className="w-full px-4 py-1.5 hover:bg-white cursor-pointer text-sm font-normal"
                        onClick={postData} >Add request</div>
                    <div className="w-full px-4 py-1.5 hover:bg-white cursor-pointer text-sm font-normal  
                    last:hover:bg-red-500 last:hover:text-white" onClick={deleteData}>Delete</div>
                </div>
            </div>
        </>
    );
};

export default MoreAction;
