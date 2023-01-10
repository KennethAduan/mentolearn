import React from "react";
import Header from "./Header.jsx";
import Service from "./Service.jsx";
import Feature from "./Feature.jsx";
import TeamSection from "./TeamSection.jsx";
import Footer from '../../Components/Footer/footer.jsx';
import Course from "./Course.jsx";
import "./dist/css/landing.css";

const Landing = () => {
  return (
    <div>
      <Header />
      {/* <!-- Hero Area Start --> */}
      <section id="hero-area" class="bg-blue-100 pt-48 pb-10">
        <div class="container">
          <div class="flex justify-between">
            <div class="w-full text-center">
              <h2
                class="text-4xl font-bold leading-snug text-gray-700 mb-10 wow fadeInUp hidden lg:block"
                data-wow-delay="1s"
              >
                Startup and SaaS Landing Page <br /> Built with TailwindCSS
              </h2>

              <div class="text-center mb-10 wow fadeInUp" data-wow-delay="1.2s">
                <a href="/" rel="nofollow" class="btn">
                  Get Started
                </a>
              </div>
              <div class="text-center wow fadeInUp" data-wow-delay="1.6s">
                <img
                  class="img-fluid mx-auto"
                  src="assets/img/hero.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Area End --> */}
      <Service />
      <Feature />
      <TeamSection />
      <Course />
      <Footer/>
    </div>
  );
};

export default Landing;
