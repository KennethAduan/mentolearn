import React from "react";
import Footer from "./footer.jsx";
import Logo from "../../Assets/images/MentoLearn2.png";
import "./user.css";
const UserAgree = () => {
  return (
    <div>
      {/* Logo */}
      <div className="logoUpper">
        <div className="w-48  ml-4 ">
          <img src={Logo} alt="Mento Learn Logo" />
        </div>
      </div>
      {/* Title */}
      <div className="UserTitle text-center pt-12 pb-12">
        <h1 className="text-6xl">User Agreement</h1>
      </div>
      <div className="TableContents ml-32">
        <h1>Table of Contents:</h1>
        {/* Contents */}
        <div className="contents text-2xl">
          <a href="#intro">
            <span>1.</span>Introduction
          </a>
          <br />
          <a href="#obligation">
            <span>2.</span> Obligation
          </a>
          <br />
          <a href="#rights">
            <span>3.</span> Rights and Limits
          </a>
          <br />
          <a href="#disclaimer">
            <span>4.</span> Disclaimer and Limit of Liability
          </a>
          <br />
          <a href="#termination">
            <span>5.</span> Termination
          </a>
          <br />
        </div>
      </div>
      <div className="introductions mt-12 ml-12" id="intro">
        <h1 className="text-4xl">Introduction</h1>
        <div className="contract">
          <h2 className="text-black">1.1 Contract</h2>
          <p className="text-justify text-black">
            You agree that by clicking “Join Now”, “Join MentoLearn”, “Sign Up”
            or similar, registering, accessing or using our services (described{" "}
            {/* <br /> */}
            below), you are agreeing to enter into a legally binding contract
            with
            {/* MentoLearn (even if you are using our Services on behalf of a <br /> */}
            company). If you do not agree to this contract (“Contract” or “User
            Agreement”), do not click “Join Now” (or similar) and do not access
            or {/* <br /> */}
            otherwise use any of our Services. If you wish to terminate this
            contract, at any time you can do so by closing your account and no{" "}
            {/* <br /> */}
            longer accessing or using our Services.
          </p>
        </div>
        <div className="service mt-8">
          <h2 className="text-black">Services</h2>
          <p className="text-justify text-black">
            This Contract applies to MentoLearn.com, MentoLearn-branded apps,
            MentoLearn Learning and other MentoLearn-related sites, apps,
            communications and other services that state that they are offered
            under this Contract (“Services”), including the offsite collection
            of data for those Services, such as our ads and the “Apply with
            MentoLearn” and “Share with MentoLearn ” plugins. Registered users
            of our Services are “Members” and unregistered users are “Visitors”.
          </p>
        </div>
        <div className="menVis mt-8">
          <h2 className="text-black">1.2 Members and Visitors</h2>
          <p className="text-justify text-black">
            When you register and join the MentoLearn Services, you become a
            Member. If you have chosen not to register for our Services, you may
            access certain features as a “Visitor.”
          </p>
        </div>
        <div className="change mt-8">
          <h2 className="text-black">1.3 Change</h2>
          <p className="text-black text-justify">
            We may modify this Contract, our Privacy Policy and our Cookies
            Policy from time to time. If we make material changes to it, we will
            provide you notice through our Services, or by other means, to
            provide you the opportunity to review the changes before they become
            effective. We agree that changes cannot be retroactive. If you
            object to any changes, you may close your account. Your continued
            use of our Services after we publish or send a notice about our
            changes to these terms means that you are consenting to the updated
            terms as of their effective date.
          </p>
        </div>
      </div>
        <div className="obligations">
          <h1>2. Obligations</h1>
          serviceElig
        </div>
      <Footer />
    </div>
  );
};

export default UserAgree;
