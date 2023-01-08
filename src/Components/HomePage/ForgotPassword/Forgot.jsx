import React from "react";
import MentoLearnLogoUpper from "../../../Assets/images/MentoLearn1.png";
import Footer from "../../../Components/Footer/FooterDiff.jsx";
import "./forgot.css";
const Forgot = () => {
  return (
    <div>
      <div className="h-screen">
        {/* Logo */}
        <div className="w-96 mt-4 ml-4">
          <a href="/">
            <img src={MentoLearnLogoUpper} alt="Mento Learn Logo" />
          </a>
        </div>
        <div className="flex justify-center mt-36 ">
          {/* BOX HERE */}
          <form className="holder border rounded  bg-white shadow-md rounded px-12 pt-6 pb-12 mb-4 mt-12 w-96">
            {/* Title */}
            <div className="Forgot">
              <h1 className="font-bold">Forgot Passowrd?</h1>
              <p>Reset Password in two quick steps</p>
            </div>
            {/* Input Email */}
            <div className="mt-12">
              <input
                className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-4xl"
                id="username"
                type="text"
                placeholder="Email or Phone"
              />
            </div>
            {/* Reset Button */}
            <div className="ResetButton flex justify-center mt-12">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-center mr-2 mb-2"
              >
                Reset Password
              </button>
            </div>
            {/* Back button */}
            <div className="back flex justify-center mt-4">
              <a href="/">
                <h1 className="font-bold">Back</h1>
              </a>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Forgot;
