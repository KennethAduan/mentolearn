import React from "react";
// import Footer from "./footer.jsx";
import Logo from "../../Assets/images/MentoLearn2.png";
import "./user.css";
import { useEffect } from "react";
const UserAgree = () => {
  useEffect(() => {
    // Get the button
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, []);
  return (
    <body>
      <div>
        {/* Logo */}
        <div className="logoUpper">
          <div className="w-48  ml-4 ">
            <a href="/">
              {" "}
              <img src={Logo} alt="Mento Learn Logo" />
            </a>
          </div>
        </div>
        <hr className=" bg-gray-200 border-0 dark:bg-gray-700 p-0.5"></hr>
        {/* Title */}
        <div className="UserTitle text-center pt-12 pb-12">
          <h1 className="text-6xl">User Agreement</h1>
        </div>
        <div className="TableContents ml-32 mt-12">
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
        <div className="introductions mt-12 ml-12 mr-12" id="intro">
          <h1 className="text-4xl">Introduction</h1>
          <div className="contract">
            <h2 className="text-black">1.1 Contract</h2>
            <p className="text-justify text-black">
              You agree that by clicking “Join Now”, “Join MentoLearn”, “Sign
              Up” or similar, registering, accessing or using our services
              (described {/* <br /> */}
              below), you are agreeing to enter into a legally binding contract
              with
              {/* MentoLearn (even if you are using our Services on behalf of a <br /> */}
              company). If you do not agree to this contract (“Contract” or
              “User Agreement”), do not click “Join Now” (or similar) and do not
              access or {/* <br /> */}
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
              of our Services are “Members” and unregistered users are
              “Visitors”.
            </p>
          </div>
          <div className="menVis mt-8">
            <h2 className="text-black">1.2 Members and Visitors</h2>
            <p className="text-justify text-black">
              When you register and join the MentoLearn Services, you become a
              Member. If you have chosen not to register for our Services, you
              may access certain features as a “Visitor.”
            </p>
          </div>
          <div className="change mt-8">
            <h2 className="text-black">1.3 Change</h2>
            <p className="text-black text-justify">
              We may modify this Contract, our Privacy Policy and our Cookies
              Policy from time to time. If we make material changes to it, we
              will provide you notice through our Services, or by other means,
              to provide you the opportunity to review the changes before they
              become effective. We agree that changes cannot be retroactive. If
              you object to any changes, you may close your account. Your
              continued use of our Services after we publish or send a notice
              about our changes to these terms means that you are consenting to
              the updated terms as of their effective date.
            </p>
          </div>
        </div>
        <div className="obligations mt-12 ml-12 mr-12" id="obligation">
          <h1 className="text-4xl">2. Obligations</h1>
          <div className="eligibility mt-2">
            <h2 className="text-black">2.1 Service Eligibility</h2>
            <p className="text-black text-justify">
              The Services are not for use by anyone under the age of 16. <br />{" "}
              To use the Services, you agree that: (1) you must be the "Minimum
              Age"(described below) or older; (2) you will only have one
              MentoLearn account, which must be in your real name; and (3) you
              are not already restricted by MentoLearn from using the Services.
              Creating an account with false information is a violation of our
              terms, including accounts registered on behalf of others or
              persons under the age of 16. “Minimum Age” means 16 years old.
              However, if law requires that you must be older in order for
              MentoLearn to lawfully provide the Services to you without
              parental consent (including using of your personal data) then the
              Minimum Age is such older age.
            </p>
          </div>
          <div className="yourAccount mt-8">
            <h2 className="text-black">2.2 Your Account</h2>
            <p className="text-black text-justify">
              Members are account holders. You agree to: (1) use a strong
              password and keep it confidential; (2) not transfer any part of
              your account (e.g., connections) and (3) follow the law and our
              list of Dos and Don’ts and Professional Community Policies. You
              are responsible for anything that happens through your account
              unless you close it or report misuse. As between you and others
              (including your employer), your account belongs to you. However,
              if the Services were purchased by another party for you to use
              (e.g. Recruiter seat bought by your employer), the party paying
              for such Service has the right to control access to and get
              reports on your use of such paid Service; however, they do not
              have rights to your personal account
            </p>
          </div>
          <div className="payment mt-8">
            <h2 className="text-black">2.3 Payment</h2>
            <p className="text-black text-justify">
              If you buy any of our paid Services (“Premium Services”), you
              agree to pay us the applicable fees and taxes and to additional
              terms specific to the paid Services. Failure to pay these fees
              will result in the termination of your paid Services. Also, you
              agree that:
            </p>
            <section className="ml-2 text-justify text-lg">
              <li>
                {" "}
                Your purchase may be subject to foreign exchange fees or
                differences in prices based on location (e.g. exchange rates).
              </li>
              <li>
                {" "}
                We may store and continue billing your payment method (e.g.
                credit card) even after it has expired, to avoid interruptions
                in your Services and to use to pay other Services you may buy.
              </li>
              <li>
                If you purchase a subscription, your payment method
                automatically will be charged at the start of each subscription
                period for the fees and taxes applicable to that period. To
                avoid future charges, cancel before the renewal date. Learn how
                to cancel or suspend your Premium Services.
              </li>
              <li>
                {" "}
                All of your purchases of Services are subject to MentoLearn’s
                refund policy.
              </li>
              <li>
                We may calculate taxes payable by you based on the billing
                information that you provide us at the time of purchase.
              </li>
            </section>
          </div>
          <div className="notice mt-8">
            <h2 className="text-black">2.4 Notices and Messages</h2>
            <p className="text-black text-justify">
              You agree that we will provide notices and messages to you in the
              following ways: (1) within the Service, or (2) sent to the contact
              information you provided us (e.g., email, mobile number, physical
              address). You agree to keep your contact information up to date.
            </p>
          </div>

          <div className="sharing mt-8">
            <h2 className="text-black">2.5 Sharing</h2>
            <p className="text-black text-justify">
              Our Services allow messaging and sharing of information in many
              ways, such as your profile, articles, group posts, links to news
              articles, job postings, messages and InMails. Information and
              content that you share or post may be seen by other Members,
              Visitors or others (including off of the Services). Where we have
              made settings available, we will honor the choices you make about
              who can see content or information (e.g., message content to your
              addressees, sharing content only to MentoLearn connections,
              restricting your profile visibility from search engines, or opting
              not to notify others of your MentoLearn profile update). For job
              searching activities, we default to not notifying your connections
              network or the public. So, if you apply for a job through our
              Service or opt to signal that you are interested in a job, our
              default is to share it only with the job poster.
            </p>
          </div>
        </div>

        <div className="rightsLimits mt-12 ml-12 mr-12" id="rights">
          <h1 className="text-4xl">3. Rights and Limits</h1>
          <h2 className="text-black">3.1 Your License to MentoLearn</h2>
          <p className="text-black text-justify">
            As between you and MentoLearn, you own the content and information
            that you submit or post to the Services, and you are only granting
            MentoLearn and our affiliates the following non-exclusive license:
          </p>
          <p className="text-black text-justify mt-8">
            A worldwide, transferable and sublicensable right to use, copy,
            modify, distribute, publish and process, information and content
            that you provide through our Services and the services of others,
            without any further consent, notice and/or compensation to you or
            others. These rights are limited in the following ways:
          </p>
          <section className="text-lg mt-8">
            <ol>
              <li>
                1.You can end this license for specific content by deleting such
                content from the Services, or generally by closing your account,
                except (a) to the extent you shared it with others as part of
                the Service and they copied, re-shared it or stored it and (b)
                for the reasonable time it takes to remove from backup and other
                systems.
              </li>
              <br />
              <li>
                2. We will not include your content in advertisements for the
                products and services of third parties to others without your
                separate consent (including sponsored content). However, we have
                the right, without payment to you or others, to serve ads near
                your content and information, and your social actions may be
                visible and included with ads, as noted in the Privacy Policy.
                If you use a Service feature, we may mention that with your name
                or photo to promote that feature within our Services, subject to
                your settings.
              </li>
              <br />
              <li>
                3. We will get your consent if we want to give others the right
                to publish your content beyond the Services. However, if you
                choose to share your post as "public, everyone or similar", we
                will enable a feature that allows other Members to embed that
                public post onto third-party services, and we enable search
                engines to make that public content findable though their
                services.{" "}
              </li>
              <br />
              <li>
                4. While we may edit and make format changes to your content
                (such as translating or transcribing it, modifying the size,
                layout or file type or removing metadata), we will not modify
                the meaning of your expression.{" "}
              </li>
              <br />
              <li>
                5. Because you own your content and information and we only have
                non-exclusive rights to it, you may choose to make it available
                to others, including under the terms of a Creative Commons
                license.
              </li>
            </ol>
          </section>
          <div className="serviceAvailability mt-8">
            <h2 className="text-black">3.2 Service availability</h2>
            <p className="text-black text-justify">
              We may change, suspend or discontinue any of our Services. We may
              also modify our prices effective prospectively upon reasonable
              notice to the extent allowed under the law.
              <br />
              <br />
              We don’t promise to store or keep showing any information and
              content that you’ve posted. MentoLearn is not a storage service.
              You agree that we have no obligation to store, maintain or provide
              you a copy of any content or information that you or others
              provide, except to the extent required by applicable law and as
              noted in our Privacy Policy.
            </p>
            <p></p>
          </div>
          <div className="otherContentApps mt-8">
            <h2 className="text-black">3.3 Other Content Apps</h2>
            <p className="text-black text-justify">
              By using the Services, you may encounter content or information
              that might be inaccurate, incomplete, delayed, misleading,
              illegal, offensive or otherwise harmful. MentoLearn generally does
              not review content provided by our Members or others. You agree
              that we are not responsible for others’ (including other Members’)
              content or information. We cannot always prevent this misuse of
              our Services, and you agree that we are not responsible for any
              such misuse. You also acknowledge the risk that you or your
              organization may be mistakenly associated with content about
              others when we let connections and followers know you or your
              organization were mentioned in the news. Members have choices
              about this feature.
              <br />
              <br />
              MentoLearn may help connect Members offering their services
              (career coaching, accounting, etc.) with Members seeking services.
              MentoLearn does not perform nor employs individuals to perform
              these services. You must be at least 18 years of age to offer,
              perform or procure these services. You acknowledge that MentoLearn
              does not supervise, direct, control or monitor Members in the
              performance of these services and agree that (1) MentoLearn is not
              responsible for the offering, performance or procurement of these
              services, (2) MentoLearn does not endorse any particular Member’s
              offered services, and (3) nothing shall create an employment,
              agency, or joint venture relationship between MentoLearn and any
              Member offering services. If you are a Member offering services,
              you represent and warrant that you have all the required licenses
              and will provide services consistent with our Professional
              Community Policies.
              <br />
              <br />
              Similarly, MentoLearn may help you register for and/or attend
              events organized by Members and connect with other Members who are
              attendees at such events. You agree that (1) MentoLearn is not
              responsible for the conduct of any of the Members or other
              attendees at such events, (2) MentoLearn does not endorse any
              particular event listed on our Services, (3) MentoLearn does not
              review and/or vet any of these events, and (4) that you will
              adhere to these terms and conditions that apply to such events.{" "}
            </p>
          </div>
          <div className="limit mt-8">
            <h2 className="text-black">3.4 Limits</h2>
            <p className="text-black text-justify">
              MentoLearn reserves the right to limit your use of the Services,
              including the number of your connections and your ability to
              contact other Members. MentoLearn reserves the right to restrict,
              suspend, or terminate your account if you breach this Contract or
              the law or are misusing the Services (e.g., violating any of the
              Dos and Don’ts or Professional Community Policies).
            </p>
          </div>
          <div className="propertiesRights mt-8">
            <h2 className="text-black">3.5 Intellectual Property Rights</h2>
            <p className="text-black text-justify">
              MentoLearn reserves all of its intellectual property rights in the
              Services. Trademarks and logos used in connection with the
              Services are the trademarks of their respective owners.
              MentoLearn, and “in” logos and other MentoLearn trademarks,
              service marks, graphics and logos used for our Services are
              trademarks or registered trademarks of MentoLearn.
            </p>
          </div>
          <div className="automatedProcess mt-8">
            <h2 className="text-black">3.6 Automated Processing</h2>
            <p className="text-black text-justify">
              We use the information and data that you provide and that we have
              about Members to make recommendations for connections, content and
              features that may be useful to you. For example, we use data and
              information about you to recommend jobs to you and you to
              recruiters. Keeping your profile accurate and up to date helps us
              to make these recommendations more accurate and relevant.{" "}
            </p>
          </div>
        </div>
        <div className="disclaimer mt-12 ml-12 mr-12" id="disclaimer">
          <h1 className="text-4xl">4. Disclaimer and Limit of Liability</h1>
          <h2 className="text-black mt-2">4.1 No Warranty</h2>
          <p className="text-black text-justify">
            MENTOLEARN AND ITS AFFILIATES MAKE NO REPRESENTATION OR WARRANTY
            ABOUT THE SERVICES, INCLUDING ANY REPRESENTATION THAT THE SERVICES
            WILL BE UNINTERRUPTED OR ERROR-FREE, AND PROVIDE THE SERVICES
            (INCLUDING CONTENT AND INFORMATION) ON AN “AS IS” AND “AS AVAILABLE”
            BASIS. TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW,
            MENTOLEARN AND ITS AFFILIATES DISCLAIM ANY IMPLIED OR STATUTORY
            WARRANTY, INCLUDING ANY IMPLIED WARRANTY OF TITLE, ACCURACY OF DATA,
            NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR
            PURPOSE.
          </p>
          <div className="exclusion mt-8">
            <h2 className="text-black">4.2 Exclusion of Liability</h2>
            <p className="text-black text-justify">
              TO THE FULLEST EXTENT PERMITTED BY LAW (AND UNLESS MENTOLEARN HAS
              ENTERED INTO A SEPARATE WRITTEN AGREEMENT THAT OVERRIDES THIS
              CONTRACT), MENTOLEARN, INCLUDING ITS AFFILIATES, WILL NOT BE
              LIABLE IN CONNECTION WITH THIS CONTRACT FOR LOST PROFITS OR LOST
              BUSINESS OPPORTUNITIES, REPUTATION (E.G., OFFENSIVE OR DEFAMATORY
              STATEMENTS), LOSS OF DATA (E.G., DOWN TIME OR LOSS, USE OF, OR
              CHANGES TO, YOUR INFORMATION OR CONTENT) OR ANY INDIRECT,
              INCIDENTAL, CONSEQUENTIAL, SPECIAL OR PUNITIVE DAMAGES.
              <br />
              <br />
              MENTOLEARN AND ITS AFFILIATES WILL NOT BE LIABLE TO YOU IN
              CONNECTION WITH THIS CONTRACT FOR ANY AMOUNT THAT EXCEEDS (A) THE
              TOTAL FEES PAID OR PAYABLE BY YOU TO MENTOLEARN FOR THE SERVICES
              DURING THE TERM OF THIS CONTRACT, IF ANY, OR (B) US $1000.
            </p>
          </div>
          <div className="Basis mt-8">
            <h2 className="text-black">4.3 Basis of the Bargain; Exclusions</h2>
            <p className="text-black text-justify">
              The limitations of liability in this Section 4 are part of the
              basis of the bargain between you and MentoLearn and shall apply to
              all claims of liability (e.g., warranty, tort, negligence,
              contract and law) even if MentoLearn or its affiliates has been
              told of the possibility of any such damage, and even if these
              remedies fail their essential purpose.
              <br /> <br /> These limitations of liability do not apply to
              liability for death or personal injury or for fraud, gross
              negligence or intentional misconduct, or in cases of negligence
              where a material obligation has been breached, a material
              obligation being such which forms a prerequisite to our delivery
              of services and on which you may reasonably rely, but only to the
              extent that the damages were directly caused by the breach and
              were foreseeable upon conclusion of this Contract and to the
              extent that they are typical in the context of this Contract.
            </p>
          </div>
        </div>
        <div className="Termination mt-12 ml-12 mr-12" id="termination">
          <h1 className="text-4xl">5. Termination</h1>
          <p className="text-black">
            Both you and LinkedIn may terminate this Contract at any time with
            notice to the other. On termination, you lose the right to access or
            use the Services. The following shall survive termination:
          </p>
          <br />
          <section className="text-lg">
            <li>Our rights to use and disclose your feedback;</li>
            <br />
            <li>
              {" "}
              Members and/or Visitors’ rights to further re-share content and
              information you shared through the Services;
            </li>
            <br />
            <li> Sections 4, 6, 7, and 8.2 of this Contract;</li>
            <br />
            <li>
              {" "}
              Any amounts owed by either party prior to termination remain owed
              after termination.
            </li>
          </section>
        </div>
        <hr className=" bg-gray-200 border-0 dark:bg-gray-700 mt-24 p-0.5"></hr>
        {/* <Footer /> */}
      </div>
      {/* <!-- Back to top button --> */}
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        class="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
        id="btn-back-to-top"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          class="w-4 h-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
    </body>
  );
};

export default UserAgree;
