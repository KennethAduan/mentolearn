import React from "react";
import Header from "./Header/header.jsx";
import LeftBar from "./Sidecomponents/LeftBar.jsx";
import RightBar from "./Sidecomponents/RightBar.jsx";
import ProfileIcon from "../../Assets/images/Profile_icon.svg";
import Video from "../../Assets/svg/video.svg";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-around">
        <LeftBar />

        {/* Middle Part */}
        <div className="MiddlePart mt-2  ">
          <div className="UpperPart left-0 top-0 bg-white pr-12 border rounded">
            <div className="flex ml-2 mt-2 ">
              <div>
                <img className="w-20" src={ProfileIcon} alt="Profile" />
              </div>
              <div className="ml-2 mt-4">
                <input
                  type="text"
                  id="small-input"
                  placeholder="Start a post, Angeles?"
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-lg bg-gray-100"
                />
              </div>
            </div>
            {/* Photo and Video SVG */}
            <div className="flex">
              <div className="flex mt-4 ml-6 pb-3">
                <div>
                  {/* Photo */}
                  <svg
                    className="w-8"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g clip-path="url(#clip0_901_1422)">
                        {" "}
                        <path
                          d="M18 22.0315L11 15.0155C10.172 14.1875 9.836 14.1725 9 15.0085L1 23.0005V30.0005C1 30.5525 1.447 31.0005 2 31.0005H30C30.553 31.0005 31 30.5525 31 30.0005V2.00049C31 1.44749 30.553 1.00049 30 1.00049H2C1.447 1.00049 1 1.44749 1 2.00049V19.0005M16 24.0002L23 17.0002C23.836 16.1642 24.172 16.1722 25 17.0002L28 20.0002M23 9.00019C23 10.1042 22.104 11.0002 21 11.0002C19.896 11.0002 19 10.1042 19 9.00019C19 7.89619 19.896 7.00019 21 7.00019C22.104 7.00019 23 7.89619 23 9.00019Z"
                          stroke="#2E59A7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>{" "}
                      <defs>
                        {" "}
                        <clipPath id="clip0_901_1422">
                          {" "}
                          <rect width="32" height="32" fill="white"></rect>{" "}
                        </clipPath>{" "}
                      </defs>{" "}
                    </g>
                  </svg>
                </div>
                {/* Title of Svg Photo */}
                <div className="ml-4 mt-1">
                  <p className="text-sm font-bold">Photo</p>
                </div>
              </div>
              {/* Video SVG */}
              <div className="flex ">
                {/* Video SVG */}
                <div className="ml-8 mt-4">
                  <img className="w-8" src={Video} alt="Video" />
                </div>
                {/* Video word */}
                <div className="mt-6 ml-4">
                  <p className="text-sm font-bold">Video</p>
                </div>
              </div>
            </div>
          </div>
          <div className="blankdiv">
            
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Main;
