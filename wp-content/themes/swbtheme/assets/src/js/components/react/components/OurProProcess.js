import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

import ProProcessStep from "./proProcess/ProProcessStep";

class OurProProcess extends Component {
  constructor(props) {
    super(props);

    this.changeActiveStep = this.changeActiveStep.bind(this);

    this.state = {
      currentStep: 0,
      currentAnimateStep: -1
    };
  }

  componentDidMount() {}

  changeActiveStep() {
    this.setState(prevState => {
      return {
        currentStep: prevState.currentStep + 1,
        currentAnimateStep: prevState.currentAnimateStep + 1
      };
    });
  }

  render() {
    const ourProcessTitleEn = this.props.acf._np_our_process_title_en;
    const ourProcessTitleFr = this.props.acf._np_our_process_title_fr;
    const ourProcessTitle =
      this.props.browserLang === "en" ? ourProcessTitleEn : ourProcessTitleFr;

    const ourProcessIntroEn = this.props.acf._np_our_process_intro_en;
    const ourProcessIntroFr = this.props.acf._np_our_process_intro_fr;
    const ourProcessIntro =
      this.props.browserLang === "en" ? ourProcessIntroEn : ourProcessIntroFr;

    const ourStepsEn = this.props.acf._np_steps_en;
    const ourStepsFr = this.props.acf._np_steps_fr;
    const ourSteps = this.props.browserLang === "en" ? ourStepsEn : ourStepsFr;

    return (
      <div className="np-ourpro">
        <div className="np-ourpro__wrapper">
          <div className="np-ourpro__intro">
            <div className="np-ourpro__intro--title">
              <h2>{ourProcessTitle}</h2>
            </div>
            <div
              className="np-ourpro__intro--paragraph"
              dangerouslySetInnerHTML={{ __html: ourProcessIntro }}
            />
          </div>
          <div className="np-ourpro__steps">
            {ourSteps.map((step, index) => {
              return (
                <ProProcessStep
                  key={index}
                  index={index}
                  step={step}
                  currentStep={this.state.currentStep}
                  currentAnimateStep={this.state.currentAnimateStep}
                  changeActiveStep={this.changeActiveStep}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default OurProProcess;
