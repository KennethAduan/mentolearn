import React from "react";
import Logo from "../../../Assets/images/MentoLearn1.png";
import RegisLogo from "../../../Assets/images/LogoRegistration.png";
import { Link } from "react-router-dom";
import "./Mentor.css";
import Footer from "../../../Components/Footer/footer";
const Mentor = () => {
  
  return (
    
    <div>
      <style>
        
      </style>
      <div className="w-96 mt-4 ml-4 ">
        <a href="/">
          {" "}
          <img src={Logo} alt="MentoLearn Logo" />
        </a>
      </div>
      <div className="headTitle text-center">
        <h1 className="font-bold font-serif text-4xl">
          MENTOR REGISTRATION FORM
        </h1>
        <hr className="line-bottom horizontal bg-gray-300 border-0  mt-2 p-0.5 mr-2 ml-2 "></hr>
      </div>
      <div className="mt-12">
        <h1 className="text-blue-400 font-bold ml-2 text-3xl">
          PERSONAL RECORD APPLICATION
        </h1>
        <hr className="line-bottom horizontal bg-blue-400 border-0  mt-2 p-0.5 mr-2 ml-2 "></hr>
      </div>
      <div className=" flex justify-evenly">
        <div className="steps mt-24 ml-8 font-bold text-slate-700 text-4xl">
          <h1 className="">Step by Step Guide</h1>
          <div className="ml-12 mt-6">
            <p>
              1. Accomplish all fields of the online form correctly and submit.
            </p>
            <p className="mt-8">
              2. Click the link sent to your email to continue with your
              application.{" "}
            </p>
            <p className="mt-2 ml-8">
              Note: The link expires in 5 working days and once it expires, you{" "}
              <br /> need to repeat the registration process.
            </p>
            <p className="mt-8">3. Supply all the required information</p>
          </div>
        </div>
        <div className="logo mt-24 ">
          <img src={RegisLogo} alt="logo" />
        </div>
      </div>
      <div className="startRegister mb-32 mt-12 flex items-center justify-center">
     <Link to='/registrationMentor'>
     <button className="buttonRegister">
          {" "}
          Start Register
          <svg
            viewBox="0 0 16 16"
            class="bi bi-arrow-right"
            fill="currentColor"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
     </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Mentor;
