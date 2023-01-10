import React from "react";

const Course = () => {
  return (
    <div>
      {/* <!-- carousel-area Section Start --> */}
      <section className="carousel-area bg-gray-800 py-32">
        <div className="container">
          <div className="flex">
            <div className="w-full relative">
              <div className="portfolio-carousel">
                <div>
                  <img
                    className="w-full"
                    src="assets/img/slide/img1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full"
                    src="assets/img/slide/img2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full"
                    src="assets/img/slide/img3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full"
                    src="assets/img/slide/img4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full"
                    src="assets/img/slide/img5.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full"
                    src="assets/img/slide/img6.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- carousel-area Section End --> */}
    </div>
  );
};

export default Course;
