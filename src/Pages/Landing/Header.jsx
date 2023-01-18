import React, { useEffect } from "react";
import Logo from "../../Assets/images/MentoLearn1.png";
const Header = () => {
  useEffect(() => {
    /*=====================================
      Sticky
      ======================================= */
    window.onscroll = function () {
      var header_navbar = document.querySelector(".navigation");
      var sticky = header_navbar.offsetTop;

      if (window.pageYOffset > sticky) {
        header_navbar.classNameList.add("sticky");
      } else {
        header_navbar.classNameList.remove("sticky");
      }

      // show or hide the back-top-top button
      var backToTop = document.querySelector(".back-to-top");
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    };

    // Get the navbar

    // for menu scroll
    var pageLink = document.querySelectorAll(".page-scroll");

    pageLink.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(elem.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          offsetTop: 1 - 60,
        });
      });
    });

    // section menu active
    function onScroll(event) {
      var sections = document.querySelectorAll(".page-scroll");
      var scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      for (var i = 0; i < sections.length; i++) {
        var currLink = sections[i];
        var val = currLink.getAttribute("href");
        var refElement = document.querySelector(val);
        var scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          document.querySelector(".page-scroll").classNameList.remove("active");
          currLink.classNameList.add("active");
        } else {
          currLink.classNameList.remove("active");
        }
      }
    }

    window.document.addEventListener("scroll", onScroll);

    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    document.querySelectorAll(".page-scroll").forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classNameList.remove("active");
        navbarCollapse.classNameList.remove("show");
      })
    );
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classNameList.toggle("active");
      navbarCollapse.classNameList.toggle("show");
    });
  }, []);
  return (
    <div>
      {/* <!-- Header Area wrapper Starts --> */}
      <header id="header-wrap" className="relative">
        {/* <!-- Navbar Start -->       */}
        <div className="navigation fixed top-0 left-0 w-full z-30 duration-300">
          <div className="container">
            <nav className="navbar py-2 navbar-expand-lg flex justify-between items-center relative duration-300">
              <a className="navbar-brand" href="/home">
                <img classNameName="w-72" src={Logo} alt="Logo" />
              </a>
              <button
                className="navbar-toggler focus:outline-none block lg:hidden"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse hidden lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
                  <li className="nav-item">
                    <a className="page-scroll active" href="#hero-area">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#feature">
                      feature
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#testimonial">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-btn hidden sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
                <a
                  className="text-blue-600 border border-blue-600 px-10 py-3 rounded-full duration-300 hover:bg-blue-600 hover:text-white"
                  href="#feature"
                >
                  FAQ
                </a>
              </div>
            </nav>
          </div>
        </div>
        {/* <!-- Navbar End --> */}
      </header>
      {/* <!-- Header Area wrapper End --> */}
      {/* <!-- Go to Top Link --> */}
      <a
        href="#header-wrap"
        className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg z-20 duration-300 hover:bg-blue-400"
      >
        <i className="lni lni-arrow-up"></i>
      </a>
    </div>
  );
};

export default Header;
