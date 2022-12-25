import React from "react";
import Logo from "../../Assets/images/MentoLearn1.png";
const About = () => {
  return (
    <div>
      <div className="w-96 mt-4 ml-4">
        <img src={Logo} alt="Mento Learn Logo" />
      </div>
      <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="content text-center">
        <div className="about  ">
          <h1>About MentoLearn</h1>
          <p>
            Welcomee to MentoLearn, the world's largest professional network
            with more than 875 million <br /> members n more than 200 countries
            and territories worldwide.
          </p>
        </div>
        <div className="vision mt-12">
          <h1>Vision</h1>
          <p>
            Create economic opportunity for every member of the global
            workforce.
          </p>
        </div>
        <div className="mission mt-12">
          <h1>Mission</h1>
          <p>
            Mento Learn is a community-based mission to help you to learn more
            about the world.
          </p>
        </div>
        <div className="WhoAreWe mt-12">
          <h1>Who Are We?</h1>
          <p>
            Mento Learn began in co-founder John Kenneth Aduan living room in
            2022
            <br />
            and was official launched on January 15, 2023.
            <br />
            <br />
            Today, MentoLearn leads a diversified business with revenues from{" "}
            <br />
            membership subscriptions, advertising sales and recruitment <br />
            solutions under the leadership of Kenneth Aduan Lorem ipsum dolor
            sit amet consectetur adipisicing elit. <br />

          </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;