import React from "react";
import Logo from "../../Assets/images/MentoLearn1.png";
const Header = () => {
  return (
    <div>
      <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        {/* <!-- logo --> */}
        <h1 className="w-3/12">
          <a href="/">
            <img src={Logo} alt="MentoLearn Logo" className="w-48" />
          </a>
        </h1>

        {/* <!-- navigation --> */}
        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 border-teal-500 border-opacity-0 hover:border-opacity-100 hover:text-teal-400 duration-200 cursor-pointer active">
              <a href="/">Home</a>
            </li>
            <li className="p-4 border-b-2 border-teal-500 border-opacity-0 hover:border-opacity-100 hover:text-teal-400 duration-200 cursor-pointer">
              <a href="/">Our Service</a>
            </li>
            <li className="p-4 border-b-2 border-teal-500 border-opacity-0 hover:border-opacity-100 hover:text-teal-400 duration-200 cursor-pointer">
              <a href="/">About</a>
            </li>
            <li className="p-4 border-b-2 border-teal-500 border-opacity-0 hover:border-opacity-100 hover:text-teal-400 duration-200 cursor-pointer">
              <a href="/">Our Team</a>
            </li>
          </ul>
        </nav>

        {/* <!-- buttons ---> */}
        <div className="w-3/12 flex justify-end">
          <a
            className="text-blue-600 border border-blue-600 px-10 py-3 rounded-full duration-300 hover:bg-blue-600 hover:text-white"
            href="/"
          >
            FAQ
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
