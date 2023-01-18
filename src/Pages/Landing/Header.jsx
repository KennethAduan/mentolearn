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
        header_navbar.classList.add("sticky");
      } else {
        header_navbar.classList.remove("sticky");
      }

      // // show or hide the back-top-top button
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
          document.querySelector(".page-scroll").classList.remove("active");
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      }
    }

    window.document.addEventListener("scroll", onScroll);

    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    document.querySelectorAll(".page-scroll").forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove("show");
      })
    );
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
      navbarCollapse.classList.toggle("show");
    });
  }, []);
  return (
    <div>
      {/* <!-- Header Area wrapper Starts --> */}
      <header id="header-wrap" class="relative">
        {/* <!-- Navbar Start -->       */}
        <div class="navigation fixed top-0 left-0 w-full z-30 duration-300">
          <div class="container">
            <nav class="navbar py-2 navbar-expand-lg flex justify-between items-center relative duration-300">
              <a class="navbar-brand" href="/home">
                <img className="w-72" src={Logo} alt="Logo" />
              </a>
              <button
                class="navbar-toggler focus:outline-none block lg:hidden"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div
                class=" lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav mr-auto justify-center items-center lg:flex">
                  <li class="nav-item">
                    <a class="page-scroll active" href="#hero-area">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#services">
                      Services
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#feature">
                      feature
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#team">
                      Team
                    </a>
                  </li>
                  {/* <li class="nav-item">
                    <a class="page-scroll" href="#testimonial">
                      Testimonial
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#contact">
                      Contact
                    </a>
                  </li> */}
                </ul>
              </div>
              <div class="header-btn hidden sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
                <a
                  class="text-blue-600 border border-blue-600 px-10 py-3 rounded-full duration-300 hover:bg-blue-600 hover:text-white"
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
        class="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg z-20 duration-300 hover:bg-blue-400"
      >
        <i class="lni lni-arrow-up"></i>
      </a>
    </div>
  );
};

export default Header;
