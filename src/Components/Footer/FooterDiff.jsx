import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "../../Assets/images/MentoLearn2.png";

const footer = () => {
  return (
    <div className="">
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 ">
        <div className="flex items-center justify-center ">
          <ul className="flex items-center mb-6 text-xl text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about">
                {" "}
                <a href="/" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link to="/guest">
                <a href="/" className="mr-4 hover:underline md:mr-6">
                  Guest Controls
                </a>
              </Link>
            </li>
            <li>
              <Link to="/userAgree">
                <a href="/" className="mr-4 hover:underline md:mr-6">
                  User Agreement
                </a>
              </Link>
            </li>
            <div className="">
              <input type="checkbox" id="sortbox" className="hidden absolute" />
              <label
                for="sortbox"
                className="flex items-center space-x-1 cursor-pointer"
              >
                <a href="/" className="text-lg">
                  Language
                </a>
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
                <div className="logo">
                  <a href="/">
                    <img
                      src="https://bluebits.dev/wp-content/uploads/2020/06/cropped-logo-1.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="lang-menu">
                  <div className="selected-lang">English</div>
                  <ul>
                    <li>
                      <a href="/" className="de">
                        German
                      </a>
                    </li>
                    <li>
                      <a href="/" className="en">
                        English
                      </a>
                    </li>
                    <li>
                      <a href="/" className="fr">
                        French
                      </a>
                    </li>
                    <li>
                      <a href="/" className="ar">
                        Arabic
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ul>
        </div>
       
        <a href="/" className="flex items-center justify-center mt-12">
          <img src={LogoFooter} className="w-60 " alt="MentoLearn Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-400">
            © 2022
          </span>
        </a>
      </footer>
    </div>
  );
};

export default footer;
