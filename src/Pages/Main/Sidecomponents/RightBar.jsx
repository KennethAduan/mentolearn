import React from "react";
import ProfileIcon from "../../../Assets/images/Profile_icon.svg";
import "./right.css";
const RightBar = () => {
  return (
    <div className="mt-2">
      <div className="holder mr-4 border rounded bg-white ">
        <div className="titleRecomended mt-2   text-center">
          <h1 className="font-bold text-sm">Highly Recommeded Mentor</h1>
        </div>
        <div>
          {/* Profile pic for Recommedation James Mortel*/}
          <div className="flex  ml-4 mt-4 pr-2">
            <div className="firstPic">
              <img className="w-12" src={ProfileIcon} alt="Profile Icon" />
            </div>
            <div className=" ml-4">
              <h1 className="text-sm font-bold">James Mortel</h1>
              <p className="text-xs">System Analyst | Web Developer</p>
            </div>
          </div>
          <div className="ml-20  followButton1">
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-small rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              + Follow
            </button>
          </div>
        </div>
        <div>
          {/* Profile pic for Recommedation Jeselle Victoria */}
          <div className="flex  ml-4 mt-4 pr-2">
            <div className="firstPic">
              <img className="w-12" src={ProfileIcon} alt="Profile Icon" />
            </div>
            <div className="ml-4">
              <h1 className="text-sm font-bold">Jeselle Victoria</h1>
              <p className="text-xs">UI/UX | Photographer</p>
            </div>
          </div>
          <div className="ml-20  followButton1">
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-small rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              + Follow
            </button>
          </div>
        </div>
        <div>
          {/* Profile pic for Recommedation Raphael Isla*/}
          <div className="flex  ml-4 mt-4 pr-2">
            <div className="firstPic">
              <img className="w-12" src={ProfileIcon} alt="Profile Icon" />
            </div>
            <div className="ml-4">
              <h1 className="text-sm font-bold">Raphael Isla</h1>
              <p className="text-xs">Java | Python | C# </p>
            </div>
          </div>
          <div className="ml-20  followButton1">
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-small rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              + Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
