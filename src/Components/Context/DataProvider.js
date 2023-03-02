import React, { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext("");

const DataProvider = ({ children }) => {
  // const [topBarData, setTopBarData] = useState("");
  // const [tabData, setTabData] = useState([]);
  // const [paramsData, setParamsData] = useState([]);
  // const [headersData, setHeadersData] = useState([]);
  // const [enviroment, SetEnviroment] = useState([]);
  // const [jsonText, setJsonText] = useState("");
  // const [collEdit, setCollEdit] = useState(false);
  // const [colId, setcolId] = useState(null);
  const [Msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const [status, setStatus] = useState('200');
  const [tabsList, setTabsList] = useState([]);
  const [currentActive, setCurrentActive] = useState('');
  // const [responseData, setResponseData] = useState([]);
  // const [changeAction, setchangeAction] = useState('');
  const [url, setUrl] = useState('');
  // workspce id provide to filtter to all task
  const [workSpaceId, setWorkSpaceId] = useState({});

  return (
    <>
      <DataContext.Provider
        value={{
          // setTopBarData,
          // topBarData,
          // tabData,
          // setTabData,
          // paramsData,
          // setParamsData,
          // headersData,
          // setHeadersData,
          // jsonText,
          // setJsonText,
          // collEdit,
          // setCollEdit,
          // colId,
          // setcolId,
          setMsg,
          Msg,
          error,
          setError,
          status,
          setStatus,
          tabsList,
          setTabsList,
          currentActive,
          setCurrentActive,
          // responseData,
          // setResponseData,
          // SetEnviroment,
          // enviroment,
          // changeAction,
          // setchangeAction,
          url,
          setUrl,
          setWorkSpaceId,
          workSpaceId,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
