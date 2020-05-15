import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.scss";
class SliderHome extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={"slider-wrap position-relative"}>
        <Slider {...settings}>
          <div className="slider-item position-relative">
            <div
              className="slider-image"
              style={{ backgroundImage: "url(/assets/images/slide1.jpeg)" }}
            ></div>
            <div className="container">
              <div className="slider-content">
                <div className="text-center w-100">
                  <h2 className="text-white">
                    AFRIK HUB
                    <br />
                    tours and travel{" "}
                  </h2>
                  <h5 className="text-white mt-5">
                    - Dream, Explore, Discover -
                    <br />
                  </h5>
                </div>
                <div className="slider-footer text-left">
                  <h6 className="text-white">Contact Us</h6>
                  <p className="text-white">Online bookings accepted </p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item position-relative">
            <div
              className="slider-image"
              style={{ backgroundImage: "url(/assets/images/slide2.jpeg)" }}
            ></div>
            <div className="container">
              <div className="slider-content">
                <div className="text-center w-100">
                  <h2 className="text-white">
                    Family Adventures
                    <br /> 5-star{" "}
                  </h2>
                  <h5 className="text-white mt-5">
                    - Dream, Explore, Discover - <br />
                  </h5>
                </div>
                <div className="slider-footer text-left">
                  <h6 className="text-white">Contact Us</h6>
                  <p className="text-white">Online bookings accepted </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item position-relative">
            <div
              className="slider-image"
              style={{ backgroundImage: "url(/assets/images/slide3.jpeg)" }}
            ></div>
            <div className="container">
              <div className="slider-content">
                <div className="text-center w-100">
                  <h2 className="text-white">
                    Bring your <br /> camera{" "}
                  </h2>
                  <h5 className="text-white mt-5">
                    - Dream, Explore, Discover -
                    <br />
                  </h5>
                </div>
                <div className="slider-footer text-left">
                  <h6 className="text-white">Contact Us</h6>
                  <p className="text-white">Online bookings accepted</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderHome;
