import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
// import WorkSpaceDropDwon from "../WorkSpaceDropDwon/WorkSpaceDropDown";
import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";

const Navbar = ({setTab,tab}) => {
  const {workSpaceopen, setworkSpaceopen}=useContext(DataContext)
  // const [open, setopen] = useState(false);

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
          <p onClick={()=>setTab('workspace')} className={`cursor-pointer ${tab==='workspace' && 'text-blue-600'}`}>Workspace</p> 
          <AiFillCaretDown className="text-xs"  onClick={() => {  setworkSpaceopen(!workSpaceopen)}}/>
        </Link>
        <p onClick={()=>setTab('reports')} className={`cursor-pointer ${tab==='reports' && 'text-blue-600'}`}>Reports</p>
        <p onClick={()=>setTab('explore')} className={`cursor-pointer ${tab==='explore' && 'text-blue-600'}`}>Explore</p>
        {/* workSpace */}
        {/* {workSpaceopen && <WorkSpaceDropDwon />} */}
      </div>
    </>
  );
};

export default Navbar;
