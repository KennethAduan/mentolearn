import React from "react";
import Logo from "../../../Assets/images/MentoLearn1.png";
import "./Registration.css";
const Registration = () => {
  return (
    <div>
      {" "}
      <div className="w-96 mt-4 ml-4 ">
        <a href="/">
          {" "}
          <img src={Logo} alt="MentoLearn Logo" />
        </a>
      </div>
      <div className="headTitle text-center">
        <h1 className="font-bold font-serif text-4xl">
          MENTOR REGISTRATION FORM
        </h1>
        <hr className="line-bottom horizontal bg-gray-300 border-0  mt-2 p-0.5 mr-2 ml-2 "></hr>
      </div>
      <div className="mt-12">
        <h1 className="text-blue-400 font-bold ml-2 text-3xl">
          PERSONAL RECORD APPLICATION
        </h1>
        <hr className="line-bottom horizontal bg-blue-400 border-0  mt-2 p-0.5 mr-2 ml-2 "></hr>
      </div>
      <div>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[700px] ">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  for="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  for="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div> */}
              </div>

              <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                  Address Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="area"
                        id="area"
                        placeholder="Enter area"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter city"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="Enter state"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="post-code"
                        id="post-code"
                        placeholder="Post Code"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 
              <div>
                <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Book Appointment
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      <div className="security">
        <h1 className="text-blue-400 font-bold ml-2 text-3xl">Security</h1>
        <hr className="line-bottom horizontal bg-blue-400 border-0  mt-2 p-0.5 mr-96 ml-2 "></hr>
      </div>
      <div className="notRobot mt-8 ml-8">
        <div class="rc-anchor rc-anchor-normal rc-anchor-light">
          <div class="rc-anchor-content">
            <div class="rc-inline-block">
              <div class="rc-anchor-center-container">
                <div class="rc-anchor-center-item rc-anchor-checkbox-holder">
                  <span
                    class="recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox recaptcha-checkbox-clearOutline"
                    role="checkbox"
                    aria-checked="false"
                    id="recaptcha-anchor"
                    tabindex="0"
                    dir="ltr"
                    aria-labelledby="recaptcha-anchor-label"
                  >
                    <div
                      class="recaptcha-checkbox-border"
                      role="presentation"
                    ></div>
                    <div
                      class="recaptcha-checkbox-borderAnimation"
                      role="presentation"
                    ></div>
                    <div
                      class="recaptcha-checkbox-spinner"
                      role="presentation"
                    ></div>
                    <div
                      class="recaptcha-checkbox-spinnerAnimation"
                      role="presentation"
                    ></div>
                    <div
                      class="recaptcha-checkbox-checkmark"
                      role="presentation"
                    ></div>
                  </span>
                </div>
              </div>
            </div>
            <div class="rc-inline-block">
              <div class="rc-anchor-center-container">
                <label
                  class="rc-anchor-center-item rc-anchor-checkbox-label"
                  id="recaptcha-anchor-label"
                >
                  I'm not a robot
                </label>
              </div>
            </div>
          </div>
          <div class="rc-anchor-normal-footer">
            <div class="rc-anchor-logo-portrait" role="presentation">
              <div class="rc-anchor-logo-img rc-anchor-logo-img-portrait"></div>
              <div class="rc-anchor-logo-text">reCAPTCHA</div>
            </div>
            <div class="rc-anchor-pt">
              <a
                href="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
              >
                Privacy
              </a>{" "}
              -{" "}
              <a
                href="https://www.google.com/intl/en/policies/terms/"
                target="_blank"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 mt-12 ml-8">
        <div class="form-check">
          <input
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            class="form-check-label inline-block text-gray-800 font-bold"
            for="flexCheckDefault"
          >
            I certify that above information are true and correct
          </label>
        </div>
      </div>
      <hr className="line-bottom horizontal bg-blue-400 border-0  mt-2 p-0.5 mr-96 ml-2 "></hr>
      <div className="submitClearbtn mt-12 ml-8 mb-24 ">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-4xl leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit
        </button>
        <button
          type="button"
          class="ml-12 inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-4xl leading-tight uppercase  shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Registration;
