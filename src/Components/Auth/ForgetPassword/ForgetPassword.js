import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosHelpCircleOutline } from "react-icons/io";
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { MdClose, MdOutlineDone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Stepper, Step, StepTitle } from "react-progress-stepper";
import "./Forget.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import http from "../../../Services/http";
import { DataContext } from "../../Context/DataProvider";
import { useContext } from "react";

const FrogetPassword = ({ setOpenForgetPopUp }) => {
  let [step, setstep] = useState(0);
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [password, setPassword] = useState("");

  const [vissiable, setvissiable] = useState(false);
  const validate =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const incrementStep = () => {
    step === 0 && FirstStep();
    step === 1 && OTP.length === 4 && SecondStep();
    step === 2 && ThirdStep();
  };
  const FirstStep = () => {
    http({
      method: "post",
      url: `${process.env.REACT_APP_BASEURL}/auth/otp`,
      data: {
        email: email,
      },
    })
      .then((res) => {
        setstep(step + 1);

        setMsg(res.data.message);
        setStatus(res.status);
        setError(true);
      })
      .catch((err) => {
        setMsg(err.response.data.message);
        setStatus(err.response.status);
        setError(true);
      });
  };
  const SecondStep = () => {
    http({
      method: "post",
      url: `${process.env.REACT_APP_BASEURL}/auth/verifyotp`,
      data: {
        email: email,
        otpCode: OTP,
      },
    })
      .then((res) => {
        if (res.data.message === "OTP verifyed") {
          setstep(step + 1);
        }

        setMsg(res.data.message);
        setStatus(res.status);
        setError(true);
      })
      .catch((err) => {
        setMsg(err.response.data.message);
        setStatus(err.response.status);
        setError(true);
      });
  };
  const ThirdStep = () => {
    http({
      method: "post",
      url: `${process.env.REACT_APP_BASEURL}/auth/forgetpassword`,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        setstep(step + 1);
        setMsg(res.data.message);
        setStatus(res.status);
        setError(true);
      })
      .catch((err) => {
        setMsg(err.response.data.message);
        setStatus(err.response.status);
        setError(true);
      });
  };

  const decrementStep = () => {
    setstep(step === 0 ? (step = 0) : step - 1);
  };

  return (
    <>
      <div className="w-full h-screen">
        <div
          className="w-full h-full p-4 flex inset-0 bg-gray-500 bg-opacity-75 transition-opacity 
         justify-center"
        >
          {/* stepper */}
          <div className="w-[470px] h-full  bg-white p-2 rounded-md drop-shadow-lg">
            <Link to="/" className=" h-8 rounded-md flex justify-between">
              <IoIosArrowRoundBack
                className="text-3xl cursor-pointer"
                onClick={decrementStep}
              />
              <p className="font-medium text-gray-600">Recover Password</p>
            </Link>
            <div className="w-full h-[95%] flex flex-col items-center ">
              <Stepper step={step}>
                <Step>
                  <StepTitle>Email</StepTitle>
                </Step>
                <Step>
                  <StepTitle>Otp</StepTitle>
                </Step>
                <Step>
                  <StepTitle>Password</StepTitle>
                </Step>
              </Stepper>
              <div className="w-full h-full flex justify-center px-8">
                {/*=============== Email verify =================*/}
                {step === 0 && (
                  <>
                    <div className="w-full pt-5 flex flex-col items-center mt-6 gap-5">
                      <div className="w-32 h-32 rounded-full bg-blue-300 flex justify-center items-center relative">
                        <AiFillLock className="text-7xl text-blue-600" />
                        <p className="absolute right-6 text-red-500 bottom-6 text-3xl">
                          <IoIosHelpCircleOutline />
                        </p>
                      </div>
                      <p className="text-gray-600 text-center text-sm tracking-wider font-medium px-5">
                        Please Enter Your Email Address to Recieve a
                        verifycation Otp
                      </p>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className={`block py-1.5 w-full text-sm
                       text-gray-600 bg-transparent border-0 border-b border-gray-700 appearance-none 
                       dark:border-gray-600 focus:outline-none focus:ring-0
                         peer ${
                           email.match(validate)
                             ? "border-blue-600"
                             : "border-red-600"
                         }`}
                          placeholder=" "
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {email.match(validate) && (
                          <MdOutlineDone className="absolute right-0 top-3 cursor-pointer text-green-600" />
                        )}
                        <label
                          htmlFor="email"
                          className="font-medium absolute  text-gray-700 
                      duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0
                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                        peer-focus:scale-75 peer-focus:-translate-y-6 text-sm"
                        >
                          Email Address{" "}
                        </label>
                      </div>
                    </div>
                  </>
                )}
                {/* ===============Otp verify ===========*/}
                {step === 1 && (
                  <>
                    <div className="w-full pt-5 flex flex-col items-center mt-6 gap-5 ">
                      <div className="w-32 h-32 rounded-full bg-blue-300 flex justify-center items-center ">
                        <CiMail className="text-7xl text-blue-500" />
                      </div>
                      <p className="text-gray-600 text-center text-sm tracking-wider font-medium px-5">
                        Please Enter The 4 Digit Code Sent To{" "}
                        <span className="text-blue-500">{email}</span>
                      </p>
                      <OTPInput
                        value={OTP}
                        onChange={setOTP}
                        autoFocus
                        OTPLength={4}
                        otpType="number"
                        disabled={false}
                      />
                      <ResendOTP
                        onResendClick={() => console.log("Resend clicked")}
                      />
                    </div>
                  </>
                )}
                {/* password verify */}
                {step === 2 && (
                  <>
                    <div className="w-full pt-5 flex flex-col items-center mt-6 gap-5 ">
                      <div className="w-32 h-32 rounded-full bg-blue-300 flex justify-center items-center relative">
                        <AiFillLock className="text-7xl text-blue-500" />
                        <p
                          className="absolute right-7 text-green-500 bottom-6 w-6 h-6 border-2 rounded-full 
                      flex justify-center items-center border-green-500"
                        >
                          <MdOutlineDone className="text-2xl" />
                        </p>
                      </div>
                      <p className="text-gray-600 text-center text-sm tracking-wider font-medium px-5">
                        Your New Password Must Be Differnt from Previously Used
                        Password
                      </p>
                      {/* new password */}
                      <div className="relative z-0 w-full mb-3 group">
                        <input
                          type={vissiable === true ? "text" : "password"}
                          name="password"
                          id="password"
                          className="block py-1.5 w-full text-sm
                       text-gray-600 bg-transparent border-0 border-b border-gray-700 appearance-none 
                       dark:border-gray-600 focus:outline-none focus:ring-0
                        focus:border-blue-600 peer"
                          placeholder=" "
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <label
                          htmlFor="password"
                          className="font-medium absolute  text-gray-700 
                           duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] 
                           peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                           peer-focus:scale-75 peer-focus:-translate-y-6 text-sm"
                        >
                          New Password{" "}
                        </label>
                        {vissiable === true ? (
                          <AiOutlineEye
                            className="absolute right-0 top-3 cursor-pointer"
                            onClick={() => setvissiable(!vissiable)}
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            className="absolute right-0 top-3 cursor-pointer"
                            onClick={() => setvissiable(!vissiable)}
                          />
                        )}
                      </div>
                      {/* confrom Password */}
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="password"
                          name="confrompassword"
                          id="confrompassword"
                          className="block py-1.5 w-full text-sm
                       text-gray-600 bg-transparent border-0 border-b border-gray-700 appearance-none 
                       dark:border-gray-600 focus:outline-none focus:ring-0  focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="confrompassword"
                          className="font-medium absolute  text-gray-700 
                      duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0
                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                        peer-focus:scale-75 peer-focus:-translate-y-6 text-sm"
                        >
                          Confrom Password
                        </label>
                      </div>
                    </div>
                  </>
                )}
                {/* verify success */}
                {step === 3 && (
                  <>
                    <div className="w-full h-full pt-5 flex flex-col justify-center items-center gap-2">
                      <p className="text-2xl font-medium text-gray-500">
                        PASSWORD UPDATED
                      </p>
                      <div className="w-24 h-24 bg-green-500 rounded-full flex justify-center items-center">
                        <MdOutlineDone className="text-6xl text-white" />
                      </div>
                      <p className="text-sm">Your password has been updated</p>
                      <button
                        className="w-36 h-9 bg-blue-500 text-white"
                        onClick={() => setOpenForgetPopUp(false)}
                      >
                        LOGIN
                      </button>
                    </div>
                  </>
                )}
              </div>
              {step !== 3 && (
                <div className="w-full h-full flex justify-between p-8">
                  <button
                    onClick={incrementStep}
                    className="bg-blue-500 w-full h-9 
                 text-white "
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
          <p
            className="w-10 h-10 rounded-full bg-blue-300 bg-opacity-100 transition-opacity
          flex justify-center cursor-pointer items-center"
          >
            <MdClose
              className="text-2xl"
              onClick={() => setOpenForgetPopUp(false)}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default FrogetPassword;
