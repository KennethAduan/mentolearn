import React from "react";
import "./left.css";
import ProfileIcon from "../../../Assets/images/Profile_icon.svg";
import Connections from "../../../Assets/images/Connections.png";
import Events from "../../../Assets/images/Events.png";
import Groups from "../../../Assets/images/Groups.png";

const LeftBar = ({ sizing }) => {
  return (
    <div className={sizing}>
      <div className="leftbar">
        <div className="rightContainer w-96 bg-white mt-2 ml-4 border rounded">
          <div className="bg-gray border h-16 text-center text-sm bg-slate-400">
            <p className="mt-4">BACKGROUND TO COVER PHOTO</p>
          </div>
          <div className="profilePart flex bg-white pb-12">
            <img className="ml-4 w-24 mt-4" src={ProfileIcon} alt="profile" />
            <div className="ml-4 mt-4">
              <h1>Angeles R. Tabrilla</h1>
              <p>(SAMPLE DESCRIPTION)</p>
            </div>
          </div>
          <div className="belowPart bg-white mt-2 pb-12 pt-2 ">
            <div className="flex flex-row items-center">
              <img
                className="w-24 ml-4 mt-2"
                src={Connections}
                alt="Connections"
              />
              <p className="ml-8 "> Connections (100)</p>
            </div>
            <div className="flex flex-row items-center">
              <img className="w-24 ml-4 mt-4" src={Events} alt="Events" />
              <p className="ml-8 "> Events +</p>
            </div>
            <div className="flex flex-row items-center">
              <img className="w-24 ml-4 mt-4" src={Groups} alt="Groups" />
              <p className="ml-8 "> Groups</p>
            </div>
          </div>
          <div className=" bg-white mt-2 text-center p-4">
            <p className="text-base">Try Premium for 3 days free</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
