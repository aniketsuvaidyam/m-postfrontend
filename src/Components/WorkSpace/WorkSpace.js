import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import LeftSideUI from "./LeftSideUI/LeftSideUI";
import Splitter, { SplitDirection } from "@devbookhq/splitter";
import ReqBody from "./RightSideUI/ApiBody/ReqBody/ReqBody";
import Tabs from "./RightSideUI/ApiBody/Tabs/Tabs";
import NavBody from "./RightSideUI/NavBody/NavBody";
import ResBody from "./RightSideUI/ApiBody/ResBody/ResBody";
import { DataContext } from "../Context/DataProvider";

const WorkSpace = () => {
  const [tab, setTab] = useState("workspace");
  const { currentActive, tabsList } = useContext(DataContext);
  return (
    <>
      <div className="w-full h-screen max-w-[1825px] mx-auto">
        {/* Header */}
        <Header {...{ setTab, tab }} />
        {tab === "workspace" && (
          <>
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
                >
                  <Splitter
                    direction={SplitDirection.Vertical}
                    initialSizes={[8, 92]}
                  >
                    <Tabs />

                    {tabsList.map(
                      (e) =>
                        e._id === currentActive && (
                          <Splitter
                            key={e._id}
                            direction={SplitDirection.Vertical}
                            initialSizes={[55, 45]}
                          >
                            <div>
                              <ReqBody />
                            </div>
                            <ResBody />
                          </Splitter>
                        )
                    )}
                  </Splitter>

                  <Splitter direction={SplitDirection.Horizontal}>
                    <div className="pt-0.5">
                      <NavBody />
                    </div>
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
