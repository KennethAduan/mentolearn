import React from "react";
import "./home.css";
import AnimeFunction from "../Hooks/AnimeFunction";
import MentoLearnLogoUpper from "../../Assets/images/MentoLearn1.png";
import MainLogo from "../../Assets/images/MainLogo.png";
// import Footer from "../Footer/footer.jsx";
import { Link } from "react-router-dom";
const home = () => {
  return (
    <body className="">
      <div>
        <AnimeFunction />
        {/* MentoLearn logo */}
        <div className="w-96 mt-4 ml-4">
          <img src={MentoLearnLogoUpper} alt="Mento Learn Logo" />
        </div>
        <div className="text-center">
          {" "}
          <h1 className="ml11">
            <span className="text-wrapper">
              <span className="line line1"></span>
              <span className="letters">Welcome to your</span>
            </span>
          </h1>
          <h1 className="ml15">
            <span className="word">Professional</span>
            <span className="word ml-10">Community</span>
          </h1>
        </div>
      </div>

      {/* <!-- Login and Main image part --> */}
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img src={MainLogo} className="w-full" alt="Main Logo" />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <div className="antialiased ">
                <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                  <h1 className="text-4xl font-medium">Login</h1>
                  <p className="text-slate-500">Hi, Welcome back 👋</p>

                  <form action="" className="my-10">
                    <div className="flex flex-col space-y-5">
                      <label for="email">
                        <p className="font-medium text-slate-700 pb-2">
                          Email address
                        </p>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                          placeholder="Enter email address"
                        />
                      </label>
                      <label for="password">
                        <p className="font-medium text-slate-700 pb-2">
                          Password
                        </p>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                          placeholder="Enter your password"
                        />
                      </label>
                      <div className="flex flex-row justify-between">
                        <div>
                          <label for="remember" className="">
                            <input
                              type="checkbox"
                              id="remember"
                              className="w-4 h-4 border-slate-200 focus:bg-indigo-600"
                            />
                            <span className="ml-2">Remember me </span>
                          </label>
                        </div>
                        <div>
                          <a href="/" className="font-medium text-indigo-600">
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      <Link to = 'main'>
                      <a
                        href="/main "
                        className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          />
                        </svg>
                        <span>Login</span>
                      </a>
                      </Link>
                      <p className="text-center">
                        Not registered yet?
                        <Link to="/selection">
                          <a
                            href="/"
                            className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                          >
                            <span className="ml-2">Register now </span>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </span>
                          </a>
                        </Link>
                      </p>
                      <div className="my-5">
                        <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                          <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            className="w-6 h-6"
                            alt=""
                          />
                          <span>Login with Google</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default home;
