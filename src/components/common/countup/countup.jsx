import React, { Component } from "react";
import CountUp from "react-countup";
import "./countup.scss";
class CounterBlock extends Component {
  render() {
    return (
      <div className={`countup-wrap`}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <CountUp start={0} end={50} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number">
                      <span ref={countUpRef} />
                    </div>

                    <div className="counter-title">
                      <span>ADVENTURES</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="col-md-3 col-sm-6">
              <CountUp start={0} end={37} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number">
                      <span ref={countUpRef} />
                    </div>

                    <div className="counter-title">
                      <span>NIGHTS</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="col-md-3 col-sm-6">
              <CountUp start={0} end={93} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number">
                      <span ref={countUpRef} />
                    </div>

                    <div className="counter-title">
                      <span>SEASONS</span>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="col-md-3 col-sm-6">
              <CountUp start={0} end={65} delay={0}>
                {({ countUpRef }) => (
                  <div className="countup-box">
                    <div className="counter-number">
                      <span ref={countUpRef} />
                    </div>

                    <div className="counter-title">
                      <span>PACKAGES</span>
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

export default CounterBlock;
