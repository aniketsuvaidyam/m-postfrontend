import React from "react";
import Login from "../Auth/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./Protected";
import WorkSpace from "../WorkSpace/WorkSpace";
import Register from "../Auth/Register/Register";
import DataProvider from "../Context/DataProvider";
// import CollectionBody from "../Home/LeftBody/CollectionBody/CollectionBody";
// import ApiBody from "../Home/LeftBody/ApiBody/ApiBody";
// import EnvironmentBody from "../Home/LeftBody/EnvironmentBody/EnvironmentBody";
// import HistoryBody from "../Home/LeftBody/HistoryBody/HistoryBody";
// import SnackBar from "../SnackBar/SnackBar";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/workSpace/" element={<Protected Component={WorkSpace} />}>
              <Route index element={<>collection</>} />
              <Route path="collection" element={<>collection</>} />
              <Route path="api" element={<>Api</>} />
              <Route path="environment" element={<>env</>} />
              <Route path="history" element={<>Histoty</>} />
            </Route>
          </Routes>
          {/* <SnackBar /> */}
        </DataProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;
