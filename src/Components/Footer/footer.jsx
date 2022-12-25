import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "../../Assets/images/MentoLearn2.png";
const footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow md:flex md:items-center">
      <a href="/" className="flex items-center">
        <img src={LogoFooter} className="w-60 " alt="MentoLearn Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-400">
          © 2022
        </span>
      </a>
      <ul className="flex flex-wrap items-center mt-3 text-xl text-gray-500 dark:text-gray-400 sm:mt-0 ml-4">
        <li>
          <Link to="/about">
            {" "}
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </Link>
        </li>
        <li>
          <a href="/" className="mr-4 hover:underline md:mr-6">
            Guest Controls
          </a>
        </li>
        <li>
          <a href="/" className="mr-4 hover:underline md:mr-6">
            User Agreement
          </a>
        </li>
        <div className="">
          <input type="checkbox" id="sortbox" className="hidden absolute" />
          <label
            for="sortbox"
            className="flex items-center space-x-1 cursor-pointer"
          >
            <span className="text-lg">Language</span>
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </label>
          <div
            id="sortboxmenu"
            className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10"
          >
            <ul className="block text-right text-gray-900">
              <li>
                <a href="/" className="block px-3 py-2 hover:bg-gray-200">
                  English
                </a>
              </li>
              <li>
                <a href="/" className="block px-3 py-2 hover:bg-gray-200">
                  Japanese
                </a>
              </li>
              <li>
                <a href="/" className="block px-3 py-2 hover:bg-gray-200">
                  Chinese
                </a>
              </li>
              <li>
                <a href="/" className="block px-3 py-2 hover:bg-gray-200">
                  French
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <li>
          <a href="/" className="hover:underline" data-dropdown-toggle="dropdown">
            Languages
          </a>
        </li> */}
      </ul>
    </footer>
  );
};

export default footer;
