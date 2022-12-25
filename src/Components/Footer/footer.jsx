import React from "react";

const footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow md:flex md:items-center">
      <a href="/" className="flex items-center">
        <img
          src="./Assets/images/MentoLearn2.png"
          className="w-60 "
          alt="MentoLearn Logo"
        />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-400">
          © 2022
        </span>
      </a>
      <ul className="flex flex-wrap items-center mt-3 text-xl text-gray-500 dark:text-gray-400 sm:mt-0 ml-4">
        <li>
          <a href="/" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
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
        {/* <li>
          <a href="/" class="hover:underline">
            Languages
          </a>
        </li> */}
      </ul>
    </footer>
  );
};

export default footer;
