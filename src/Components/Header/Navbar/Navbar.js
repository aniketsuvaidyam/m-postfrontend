import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import WorkSpaceDropDown from "../WorkSpaceDropDown/WorkSpaceDropDown";

const Navbar = ({ setTab, tab }) => {
  const [workSpaceopen, setworkSpaceopen] = useState(false);
  // let menuRef = useRef();
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setopen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });
  return (
    <>
      <div className="flex gap-8 relative "
      // ref={menuRef}
      >
        <Link
          to="/workSpace/collection"
          className="flex items-center gap-2"

        >
          <p onClick={() => setTab('workspace')} className={`cursor-pointer ${tab === 'workspace' && 'text-blue'}`}>Workspace</p>
          <AiFillCaretDown className="text-xs" onClick={() => { setworkSpaceopen(!workSpaceopen) }} />
        </Link>
        <p onClick={() => setTab('reports')} className={`cursor-pointer ${tab === 'reports' && 'text-blue'}`}>Reports</p>
        <p onClick={() => setTab('explore')} className={`cursor-pointer ${tab === 'explore' && 'text-blue'}`}>Explore</p>
        {/* workSpace */}
        {workSpaceopen && <WorkSpaceDropDown {...{ setworkSpaceopen, workSpaceopen }} />}
      </div>
    </>
  );
};

export default Navbar;
