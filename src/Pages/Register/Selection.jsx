import React from "react";
import Footer from "../../Components/Footer/footer.jsx";
import Logo from "../../Assets/images/MentoLearn1.png";
import Student from "../../Assets/images/Student.png";
import Professor from "../../Assets/images/Professor.png";
const Selection = () => {
  return (
    <div>
      <div className="w-96 mt-4 ml-4 ">
        <img src={Logo} alt="Mento Learn Logo" />
      </div>

      <div className="flex flex-row mt-36 ">
        <div className="student basis-1/2 ml-80 mb-12">
          <img src={Student} alt="Student Logo" />
          <button
            type="button"
            className="ml-24 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            STUDENT
          </button>
        </div>
        <div className="professor ">
          <img src={Professor} alt="" />
          <button
            type="button"
            className="ml-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            PROFESSOR
          </button>
        </div>
      </div>
      <hr className=" bg-gray-200 border-0 dark:bg-gray-700 mt-80 p-0.5"></hr>
      <Footer />
    </div>
  );
};

export default Selection;
