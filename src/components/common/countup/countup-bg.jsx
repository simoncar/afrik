import React, { Component } from "react";
import CountUp from "react-countup";
import "./countup.scss";
class CounterBlockBg extends Component {
  render() {
    return (
      <div className={`countup-wrap bg style`}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <CountUp start={0} end={5} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number">
                      <span ref={countUpRef} />
                    </div>

                    <div className="counter-title">
                      <span>LEVELS</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="col-md-3 col-sm-6">
              <CountUp start={0} end={3} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number">
                      <span ref={countUpRef} />
                    </div>

                    <div className="counter-title">
                      <span>CAR PARKS</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="col-md-3 col-sm-6">
              <CountUp start={0} end={3} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number">
                      <span ref={countUpRef} />
                    </div>

                    <div className="counter-title">
                      <span>BEDROOMS</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="col-md-3 col-sm-6">
              <CountUp start={0} end={3} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number">
                      <span ref={countUpRef} />
                    </div>

                    <div className="counter-title">
                      <span>BATHROOMS</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterBlockBg;
