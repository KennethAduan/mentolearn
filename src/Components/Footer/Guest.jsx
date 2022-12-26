import React from "react";
import Logo from "../../Assets/images/MentoLearn1.png";
import "./guess.css";
const Guest = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="w-96  ml-4 ">
          <img src={Logo} alt="Mento Learn Logo" />
        </div>
        <hr className=" bg-gray-200 border-0 dark:bg-gray-700 p-0.5"></hr>
      </div>
      <div className="unsubscribe rounded-md bg-white border border-inherit mt-24 ml-12 mr-12">
        <h1 className="pl-8">Unsubscribe</h1>
        <h2 className="pt-8 pl-4">Unsubscribe from MentoLearn Email Communications</h2>
        <p className="pl-8 leading-loose">
          MentoLearn uses email addresses upload by members to make suggestion
          in features like People You May Know. Use this link to <br />
          unsubscribe, you will stop receiving MentoLearn invitations and your
          email will stop being processed by MentoLearn.
        </p>
        <br />
        <h2 className="pl-4">Unsubscribe from MentoLearn SMS Communications</h2>
        <p className="pl-8 leading-loose">
          MentoLearn uses phone numbers uploaded by members to make suggestions
          in features like People You May Know. If you are a <br />
          MentoLearn member, you may also receive select notifications via SMS,
          such as PIN verification codes. Use this link to unsubscribe. <br />
          You will stop receiving MentoLearn SMS and your phone number will stop
          being processed by MentoLearn.
        </p>
      </div>

      <hr className="horizontal bg-gray-200 border-0 dark:bg-gray-700 mt-52 p-0.5"></hr>
    </div>
  );
};

export default Guest;
