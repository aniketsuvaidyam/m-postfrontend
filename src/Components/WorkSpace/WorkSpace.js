import React from "react";
import Header from "../Header/Header";
import LeftSideUI from "./LeftSideUI/LeftSideUI";
import Splitter, { SplitDirection } from "@devbookhq/splitter";
import ReqBody from "./RightSideUI/ApiBody/ReqBody/ReqBody";
import Tabs from "./RightSideUI/ApiBody/Tabs/Tabs";
import NavBody from "./RightSideUI/NavBody/NavBody";
import ResBody from "./RightSideUI/ApiBody/ResBody/ResBody";

const WorkSpace = () => {
  return (
    <>
      <div className="w-full h-screen max-w-[1825px] mx-auto">
        {/* Header */}
        <Header />
        {/* LeftSideUI */}
        <div className="w-full flex h-[90vh] ">
          <Splitter direction={SplitDirection.Horizontal}>
            <Splitter
              direction={SplitDirection.Horizontal}
              initialSizes={[27, 73]}
            >
              <LeftSideUI />
              <Splitter
                direction={SplitDirection.Vertical}
                initialSizes={[50, 50]}
              >
                <div>
                  <Tabs />
                  <ReqBody />
                </div>
                <Splitter direction={SplitDirection.Horizontal}>
                  <ResBody />
                </Splitter>
              </Splitter>
              <Splitter direction={SplitDirection.Horizontal}>
                <NavBody />
              </Splitter>
            </Splitter>
          </Splitter>
        </div>
      </div>
    </>
  );
};

export default WorkSpace;
