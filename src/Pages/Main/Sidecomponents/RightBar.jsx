import React from "react";
import ProfileIcon from "../../../Assets/images/Profile_icon.svg";
import "./right.css";
const RightBar = () => {
  return (
    <div className="flex justify-items-end mt-2 ">
      <div className="holder mr-4 border rounded bg-white ">
        <div className="titleRecomended mt-4 ml-4 pr-4">
          <h1 className="font-bold">Highly Recommeded Mentor</h1>
        </div>
        <div>
          {/* Profile pic for Recommedation James Mortel*/}
          <div className="flex  ml-4 mt-4 ">
            <div className="firstPic">
              <img className="w-24" src={ProfileIcon} alt="Profile Icon" />
            </div>
            <div className="text-center ml-4">
              <h1 className="">James Mortel</h1>
              <p className="text-sm">System Analyst | Web Developer</p>
            </div>
          </div>
          <div className="ml-32 followButton1">
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              + Follow
            </button>
          </div>
        </div>
        <div>
          {/* Profile pic for Recommedation Jeselle Victoria*/}
          <div className="flex  ml-4 mt-4 ">
            <div className="firstPic">
              <img className="w-24" src={ProfileIcon} alt="Profile Icon" />
            </div>
            <div className="text-center ml-4">
              <h1 className="">Jeselle Victoria</h1>
              <p className="text-sm">UI/UX | Photographer</p>
            </div>
          </div>
          <div className="ml-32 followButton1">
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              + Follow
            </button>
          </div>
        </div>
        <div>
          {/* Profile pic for Recommedation Raphael Isla*/}
          <div className="flex  ml-4 mt-4 ">
            <div className="firstPic">
              <img className="w-24" src={ProfileIcon} alt="Profile Icon" />
            </div>
            <div className="text-center ml-4">
              <h1 className="">Raphael Isla</h1>
              <p className="text-sm">Java | Python | C# </p>
            </div>
          </div>
          <div className="ml-32 followButton1">
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              + Follow
            </button>
          </div>
        </div>

        <div className="Recommendations ml-4 pb-8 mt-8 text-neutral-700">
          <a href="/">
            <p className="text-base">View all Recommendations &#8594; </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
