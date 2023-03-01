import React, { useState } from "react";
import Log_bg from "../../../Assets/login-Bg.png";
import Logo from "../../../Assets/Vector.png";
import google from "../../../Assets/google.png";
import github from "../../../Assets/github.png";
import SOS from "../../../Assets/SOS.png";
import { Link } from "react-router-dom";
import Http from "../../../Service/Http";
// import RegisterForm from "./RegisterForm";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setCheck] = useState(true);
  //  User Register API
  const Register = () => {
    let newUserDeteils = { name, email, password, gender };
    Http({
      url: `${process.env.REACT_APP_BASEURL}/auth/Register`,
      method: "post",
      data: newUserDeteils,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full max-w-[1720px] mx-auto flex">
          {/* right side UI */}
          <div className="w-2/5 bg-blue flex flex-col items-center justify-center">
            <p className="text-white text-xl">
              Collect all your APIs in one place
            </p>
            <img className="w-full object-cover" src={Log_bg} alt="" />
          </div>
          {/* left side UI*/}
          <div className="w-3/5 flex gap-3 flex-col justify-center overflow-y-scroll h-full items-center px-16 pt-2">
            <div className="w-full flex justify-between mt-2">
              <img src={Logo} alt="" className="w-10" />
              <div className="text-sm">
                Already Have An Account ?
                <Link to="/" className="text-blue  px-1">
                  Sign In
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h1 className="text-3xl font-medium">Welcome Back</h1>
              <p className="text-xs font-medium">
                Pleace enter following information to continue
              </p>
            </div>
            {/* Register Form start from hear */}
            <div className="w-full h-full overflow-hidden overflow-y-scroll scrollbar-hide flex flex-col gap-5">
              <div className="flex  flex-col gap-1">
                <label htmlFor="name" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-2 outline-none w-full py-1 px-2"
                  placeholder="Enter Name "
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="border-2 outline-none w-full py-1 px-2"
                  placeholder="Enter Email "
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex  flex-col gap-1">
                <label htmlFor="gender" className="font-medium">
                  Gender
                </label>
                <select
                  id="gender"
                  className="border-2 outline-none w-full py-1 px-2"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" defaultValue>
                    Choose Your Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border-2 outline-none w-full py-1 px-2"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="repassword" className="font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="repassword"
                  className="border-2 outline-none w-full py-1 px-2"
                  placeholder="Enter RePassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
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
            </div>
            <div className="w-full flex justify-end">
              <button
                disabled={check}
                className={`${
                  check === false ? "bg-blue " : "bg-blue bg-opacity-20"
                }
                py-2 text-white text-sm px-10 rounded-sm`}
                onClick={Register}
              >
                SIGNUP
              </button>
            </div>
            <div className="w-full relative border-b-2 flex justify-center">
              <p className="absolute -top-3.5 bg-white px-2 text-sm font-medium">
                or signup using
              </p>
            </div>
            <div className="w-full flex justify-center gap-2 mb-2">
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
        </div>
      </div>
    </>
  );
};

export default Register;
