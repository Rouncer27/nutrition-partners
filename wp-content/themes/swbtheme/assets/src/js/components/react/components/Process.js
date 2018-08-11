import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";
import classnames from "classnames";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepsEn: [],
      stepsFr: []
    };
  }
  componentWillMount() {
    axios
      .get(`${this.props.baseApiUrl}/wp-json/wp/v2/pages/${this.props.pageID}`)
      .then(result => {
        this.setState(prevState => ({
          ...prevState,
          stepsEn: result.data.acf._np_en_steps,
          stepsFr: result.data.acf._np_fr_steps
        }));
      });
  }

  render() {
    const processDisplay =
      this.props.browserLang === "en" ? this.state.stepsEn : this.state.stepsFr;

    return (
      <div className="np-process">
        <div className="np-process__wrapper">
          <div className="np-process__title">
            <h2>Our Process</h2>
          </div>

          <div className="np-process__info">
            {processDisplay.map((step, index) => {
              return (
                <div key={index} className="np-process__info--step">
                  <div className="np-process__info--number">
                    <p>{`${index + 1}.`}</p>
                  </div>
                  <div
                    className={`np-process__info--icon np-process__info--icon--${
                      step.icon
                    }`}
                  />

                  <div className="np-process__info--content">
                    <p>{step.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Process;
