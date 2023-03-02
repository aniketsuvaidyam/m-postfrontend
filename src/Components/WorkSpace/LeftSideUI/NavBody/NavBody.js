import React from "react";
import CollectionBody from "./CollectionBody/CollectionBody";
import APIsBody from "./APIsBody/APIsBody";
import EnviromentBody from "./EnviromentBody/EnviromentBody";
import History from "./HistoryBody/History";

const NavBody = ({ currentNav }) => {
  return (
    <>
      <div className="w-full h-full ">
        {currentNav === "Collection" && <CollectionBody />}
        {currentNav === "APIs" && <APIsBody />}
        {currentNav === "Enviroment" && <EnviromentBody />}
        {currentNav === "History" && <History />}
      </div>
    </>
  );
};

export default NavBody;
