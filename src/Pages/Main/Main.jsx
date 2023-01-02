import React from "react";
import Header from "./Header/header.jsx";
import LeftBar from "./Sidecomponents/LeftBar.jsx";
import RightBar from "./Sidecomponents/RightBar.jsx";
import ProfileIcon from "../../Assets/images/Profile_icon.svg";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-column">
        <div className="flex flex-row">
          <LeftBar sizing="sizing md:w-32 lg:w-" />
        </div>
        <div className=" mt-2 ">
          {/* Upper Posting */}
          <div className="post">
            <div className="Posting flex border-rounded bg-white px-80 mt-4 ">
              <img className="w-24" src={ProfileIcon} alt="Profile" />
              <div className="mt-4 ml-4">
                <input
                  className="InputPost bg-slate-200 shadow appearance-none border rounded w-full py-8 border-black px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Posting"
                  type="text"
                  placeholder="Start a post, Angeles?"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <svg
                className="w-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#2e59a7"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g clip-path="url(#clip0_901_3040)">
                    {" "}
                    <path
                      d="M17.9902 22.01L23.0002 17C23.8402 16.16 24.1702 16.17 25.0002 17L31.0002 23V30C31.0002 30.55 30.5502 31 30.0002 31H2.00018C1.45018 31 1.00018 30.55 1.00018 30V23L9.00018 15.01C9.84018 14.17 10.1702 14.19 11.0002 15.02L17.9902 22.01Z"
                      fill="#2e59a7"
                    ></path>{" "}
                    <path
                      d="M31 2V23L25 17C24.17 16.17 23.84 16.16 23 17L17.99 22.01L11 15.02C10.17 14.19 9.84 14.17 9 15.01L1 23V2C1 1.45 1.45 1 2 1H30C30.55 1 31 1.45 31 2Z"
                      fill="#ffffff"
                    ></path>{" "}
                    <path
                      d="M21 7C22.1 7 23 7.9 23 9C23 10.1 22.1 11 21 11C19.9 11 19 10.1 19 9C19 7.9 19.9 7 21 7Z"
                      fill="#2e59a7"
                    ></path>{" "}
                    <path
                      d="M18 22.0315L11 15.0155C10.172 14.1875 9.836 14.1725 9 15.0085L1 23.0005V30.0005C1 30.5525 1.447 31.0005 2 31.0005H30C30.553 31.0005 31 30.5525 31 30.0005V2.00049C31 1.44749 30.553 1.00049 30 1.00049H2C1.447 1.00049 1 1.44749 1 2.00049V19.0005M16 24.0002L23 17.0002C23.836 16.1642 24.172 16.1722 25 17.0002L28 20.0002M23 9.00019C23 10.1042 22.104 11.0002 21 11.0002C19.896 11.0002 19 10.1042 19 9.00019C19 7.89619 19.896 7.00019 21 7.00019C22.104 7.00019 23 7.89619 23 9.00019Z"
                      stroke="#2e59a7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_901_3040">
                      {" "}
                      <rect width="32" height="32" fill="white"></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </g>
              </svg>
            </div>
            <div className="ml-4">
              <h1 className="">Photo</h1>
            </div>
          </div>
        </div>
        {/* Upper end here */}
        <RightBar />
      </div>
    </div>
  );
};

export default Main;
