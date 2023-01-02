import React from "react";
import "./right.css";
import ProfileIcon from "../../../Assets/images/Profile_icon.svg";
const RightBar = () => {
  return (
    <div>
      <div className="rightContainer w-96 bg-white mt-4 ml-4 border">
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
        <div className="belowPart bg-white mt-2"></div>
      </div>
    </div>
  );
};

export default RightBar;
