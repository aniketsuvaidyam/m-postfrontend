import React, { useState } from "react";
import Log_bg from "../../../Assets/login-Bg.png";
import Logo from "../../../Assets/Vector.png";
import google from "../../../Assets/google.png";
import github from "../../../Assets/github.png";
import SOS from "../../../Assets/SOS.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";

const Login = () => {
  // email and setEmail is used for storing email information for login pourpose
  const [email, setEmail] = useState("");
  // password and setPassword is used for storing Possword information for login pourpose
  const [password, setPassword] = useState("");
  // checkbox is for agree terms and condition and activating Login button
  const [check, setCheck] = useState(true);
  //  open and set open is for viewing entered password by user
  const [open, setOpen] = useState(false);
  // use navigate is used for navigation form tegistered to nextStep
  const navigate = useNavigate();

  // Api for Login
  const login = () => {
    // axios is because http server need token
    axios
      .post(`${process.env.REACT_APP_BASEURL}/auth/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        if (res.data.token) {
          setTimeout(() => {
            navigate("/workSpace");
          }, 2000);
          // here toke is get from response
          let token = res.data.token;
          // the important data of user is extracted hear from token
          let payload = token.split(".");
          let data = atob(payload[1]);
          // data of user saved to session storage
          sessionStorage.setItem("paylode", data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="w-full h-screen ">
        <div className="w-full h-full max-w-[1720px] mx-auto flex relative">
          {/* left side component  */}
          <div className="w-3/5 flex gap-10 flex-col justify-center h-full items-center px-16">
            <div className="w-full flex justify-between">
              <img src={Logo} alt="" className="w-10" />
              <div className="text-sm">
                New user ?
                <Link to="/register" className="text-blue px-1">
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h1 className="text-3xl font-medium">Welcome Back</h1>
              <p className="text-xs font-medium">
                Pleace enter following information to continue
              </p>
            </div>
            <div className="w-full flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium">
                  Email or Usename
                </label>
                <input
                  type="text"
                  id="email"
                  className="border-2 outline-none w-full py-1 px-2"
                  placeholder="Enter Email or Username"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  type={open === true ? "text" : "password"}
                  id="password"
                  className="border-2 outline-none w-full py-1 px-2"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {open === true ? (
                  <AiOutlineEye
                    className="absolute bottom-2 cursor-pointer right-2 text-xl"
                    onClick={() => setOpen(!open)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute bottom-2 cursor-pointer right-2 text-xl"
                    onClick={() => setOpen(!open)}
                  />
                )}
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    id="check"
                    className="border-2 outline-none"
                    placeholder="Enter Password"
                    onClick={() => setCheck(!check)}
                  />
                  <label htmlFor="check" className="text-sm cursor-pointer">
                    I agree with{" "}
                    <span className="text-red-500">terms & conditions</span>
                  </label>
                </div>
                {/* <Link  className="text-sm text-blue-600" onClick={()=>setOpenForgetPopUp(!openForgetPopUp)}>
            Forget Password?
          </Link> */}
              </div>
              <div className="w-full flex justify-end">
                <button
                  disabled={check}
                  className={`${
                    check === false ? "bg-blue" : "bg-blue opacity-20"
                  }
                  py-2 text-white text-sm px-10 rounded-sm`}
                  onClick={login}
                >
                  LOGIN
                </button>
              </div>
            </div>

            <div className="w-full relative border-b-2 flex justify-center">
              <p className="absolute -top-3.5 bg-white px-2 text-sm font-medium">
                or login using
              </p>
            </div>
            <div className="w-full flex justify-center gap-2">
              <div className="w-10 h-10 border flex justify-center items-center p-2 cursor-pointer">
                <img src={google} alt="" />
              </div>
              <div className="w-10 h-10 border flex justify-center items-center p-2 cursor-pointer">
                <img src={github} alt="" />
              </div>
              <div className="w-10 h-10 border flex justify-center items-center p-2 cursor-pointer">
                <img src={SOS} alt="" />
              </div>
            </div>
          </div>
          {/* right side of page */}
          <div className="w-2/5 bg-blue flex flex-col items-center justify-center">
            <p className="text-white text-xl">Collect all your APIs</p>
            <p className="text-white text-xl">in one place</p>
            <img className="w-full object-cover" src={Log_bg} alt="" />
          </div>
          <div className="w-full absolute">
            {/* {openForgetPopUp===true &&  <FrogetPassword {...{setOpenForgetPopUp}}/>} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
