import React from "react";
import "./left.css";
import ProfileIcon from "../../../Assets/images/Profile_icon.svg";
import Connections from "../../../Assets/images/Connections.png";
import Events from "../../../Assets/images/Events.png";
import Groups from "../../../Assets/images/Groups.png";

const LeftBar = () => {
  return (
    <div>
      <div className="leftbar w-60 mt-2 ml-2 border rounded">
        <div className="rightContainer">
          <div className="bg-gray-300 border pb-2 text-center text-sm">
            <p className="mt-4 text-sm">BACKGROUND TO COVER PHOTO</p>
          </div>
          <div className="profilePart flex bg-white pb-2">
            <img className="ml-4 w-14 mt-4" src={ProfileIcon} alt="profile" />
            <div className="ml-4 mt-4">
              <h1 className="text-xs">Angeles R. Tabrilla</h1>
              <p className="text-xs">(SAMPLE DESCRIPTION)</p>
            </div>
          </div>
          <div className="belowPart bg-white mt-1 pb-2 pt-2  ">
            <div className="flex flex-row items-center">
              <a href="/">
                <img
                  className="w-14 ml-4 mt-2"
                  src={Connections}
                  alt="Connections"
                />
              </a>
              <p className="ml-4 text-sm"> Connections (100)</p>
            </div>
            <div className="flex flex-row items-center">
              <a href="/">
                <img className="w-10 ml-4 mt-4" src={Events} alt="Events" />
              </a>
              <p className="ml-8 text-sm "> Events +</p>
            </div>
            <div className="flex flex-row items-center">
              <a href="/">
                <img className="w-12 ml-4 mt-4" src={Groups} alt="Groups" />
              </a>
              <p className="ml-6 text-sm"> Groups</p>
            </div>
          </div>
          <div className=" text-center bg-white mt-1 p-2">
            <a href="/">
              {" "}
              <p className="text-xs">Try Premium for 3 days free</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
