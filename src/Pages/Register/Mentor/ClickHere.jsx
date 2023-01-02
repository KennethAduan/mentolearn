import React from "react";
import Logo from "../../../Assets/images/MentoLearn1.png";
import { Link } from "react-router-dom";
import Footer from "../../../Components/Footer/footer";
const ClickHere = () => {
  return (
    <div>
      <div className="w-96 mt-4 ml-4 ">
        <a href="/">
          {" "}
          <img src={Logo} alt="Mento Learn Logo" />
        </a>
      </div>
      <div className="titleMessage text-center mt-24">
        <p className="text-6xl font-bold leading-relaxed">
          You can now register as an Mentor through our <br />
          online facility!
        </p>
      </div>
      <div className="clickHere text-center">
        <Link to="/mentor">
          <a href="/mentor">
            <h1 className="text-6xl font-bold mt-12 text-blue-500">
              Click here
            </h1>
            <hr className="line-bottom horizontal bg-gray-200 border-0 dark:bg-gray-700 mt-12 p-0.5 mr-12 ml-12 mb-32"></hr>
          </a>
        </Link>
      </div>
      <br />

      <hr className="line-bottom horizontal bg-gray-200 border-0 dark:bg-gray-700 mt-96 p-0.5"></hr>
      <Footer/>
    </div>
  );
};

export default ClickHere;
