import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/MentoLearn1.png";
import Student from "../../Assets/images/Student.png";
import Professor from "../../Assets/images/Professor.png";
const Selection = () => {
  return (
    <div>
      <div className="w-96 mt-4 ml-4 ">
        <a href="/">
          {" "}
          <img src={Logo} alt="Mento Learn Logo" />
        </a>
      </div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="flex flex-row ml-12">
              <div className="student ">
                <img src={Student} alt="Student Logo" />
                <Link to="/student">
                  <a
                    href="/student"
                    type="button"
                    className="ml-24 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    STUDENT
                  </a>
                </Link>
              </div>
              <div className="professor ml-36">
                <img src={Professor} alt="Professor Logo" />
                <Link to="/clickHere">
                  <a
                    href="/clickHere"
                    type="button"
                    className="ml-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    PROFESSOR
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className=" bg-gray-200 border-0 dark:bg-gray-700  p-0.5"></hr>
    </div>
  );
};

export default Selection;
