import React, { useState } from "react";
import Header from "../Header/Header";
import LeftSideUI from "./LeftSideUI/LeftSideUI";
import Splitter, { SplitDirection } from "@devbookhq/splitter";
import ReqBody from "./RightSideUI/ApiBody/ReqBody/ReqBody";
import Tabs from "./RightSideUI/ApiBody/Tabs/Tabs";
import NavBody from "./RightSideUI/NavBody/NavBody";
import ResBody from "./RightSideUI/ApiBody/ResBody/ResBody";

const WorkSpace = () => {
  const [tab, setTab] = useState("workspace");
  return (
    <>
      <div className="w-full h-screen max-w-[1825px] mx-auto">
        {/* Header */}
        <Header {...{ setTab, tab }} />
        {tab === "workspace" && (
          <>
            {" "}
            {/* LeftSideUI */}
            <div className="w-full flex h-[90vh] ">
              <Splitter
                direction={SplitDirection.Horizontal}
                initialSizes={[27, 73]}
                minWidths={[75]}
              >
                <LeftSideUI />
                <Splitter
                  direction={SplitDirection.Horizontal}
                  initialSizes={[95, 5]}
                  minWidths={[700]}
                >
                  <Splitter
                    direction={SplitDirection.Vertical}
                    initialSizes={[55, 45]}
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
          </>
        )}
        {/* ===========reports page render============ */}
        {tab === "reports" && <>reports</>}
        {/* ===========reports page render============ */}
        {tab === "explore" && <>explore</>}
      </div>
    </>
  );
};

export default WorkSpace;
