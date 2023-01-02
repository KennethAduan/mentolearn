import React from "react";
import HomeLogo from "../../../Assets/images/home.png";
import MatchingLogo from "../../../Assets/images/match.png";
import NotificationsLogo from "../../../Assets/images/Notification.png";
import ProfileIcon from "../../../Assets/images/Profile_icon.svg";
import "./header.css";
const header = () => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 ">
      <div class="container flex flex-row items-center justify-between mx-auto">
        {/* Search bar */}
        <div>
          <div class="">
            <div class="flex border-2 rounded">
              <button class="flex items-center justify-center px-4 border-r">
                <svg
                  class="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
              </button>
              <input type="text" class="px-4 py-2 w-80" placeholder="Search" />
            </div>
          </div>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {/* icons */}
        <div class="hidden w-full md:block md:w-auto " id="navbar-default">
          <div className="flex mr-8 ">
            <div className="home">
              <a href="/">
                <img
                  className="w-12"
                  src={HomeLogo}
                  alt="Home logo"
                  title="Home"
                />
              </a>
            </div>
            <div className="matching ml-2">
              <a href="/">
                <img
                  className="w-24"
                  src={MatchingLogo}
                  alt="Matching logo"
                  title="Matching"
                />
              </a>
            </div>
            <div className="notif">
              <a href="/">
                <img
                  className="w-12 ml-4"
                  src={NotificationsLogo}
                  alt="Notifications logo"
                  title="Notifications"
                />
              </a>
            </div>
            <div className="profile">
              <a href="">
                <img
                  className="w-14 ml-4"
                  src={ProfileIcon}
                  alt="Profile Icon"
                  title="Profile"
                />
              </a>
            </div>
            <div className="ml-4">
              <div class="vl"></div>
            </div>
            <div className="Premium text-center ml-2 mt-4 ">
              <p className="text-sm">
                Try Premium for <br /> 3 days free
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default header;
