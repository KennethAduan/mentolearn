import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/MentoLearn1.png";
import Student from "../../Assets/images/Student.png";
import Professor from "../../Assets/images/Professor.png";
import Footer from "../../Components/Footer/footer";
const Selection = () => {
  return (
    <div>
      <div className="w-96 mt-4 ml-4 ">
        <a href="/">
          {" "}
          <img src={Logo} alt="Mento Learn Logo" />
        </a>
      </div>
      <section className="flex justify-evenly mt-32">
        <div className="student">
          <img className="w-64" src={Student} alt="Student" />
          <Link to="/student">
            <button
              href="/student"
              type="button"
              className="ml-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              STUDENT
            </button>
          </Link>
        </div>
        <div className="mentor ml-12 mt-10">
          <img className="w-72" src={Professor} alt="Professor" />
          <Link to="/clickHere">
                  <button
                    href="/clickHere"
                    type="button"
                    className="ml-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    PROFESSOR
                  </button>
                </Link>
        </div>
      </section>
      <div className="pb-96 "></div>
      <hr className=" bg-gray-200 border-0 dark:bg-gray-700   p-0.5"></hr>
      <Footer />
    </div>
  );
};

export default Selection;
