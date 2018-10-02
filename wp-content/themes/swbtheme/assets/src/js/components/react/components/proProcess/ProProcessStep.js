import React, { Component } from "react";

// Animations library. //
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

// Import the SVG Icons //
import HandIcon from "./HandIcon";
import BarnIcon from "./BarnIcon";
import WheatIcon from "./WheatIcon";
import ChemIcon from "./ChemIcon";
import TurbineIcon from "./TurbineIcon";
import SiloIcon from "./SiloIcon";
import FarmIcon from "./FarmIcon";
import AnimalsIcon from "./AnimalsIcon";

class ProProcessStep extends Component {
  constructor(props) {
    super(props);

    this.setTheScene = this.setTheScene.bind(this);
    this.animateStep = this.animateStep.bind(this);
    this.mobileTabletReset = this.mobileTabletReset.bind(this);

    this.state = {
      thisStep: false,
      stepIndex: "",
      activeStep: false,
      listening: false,
      animating: false
    };
  }

  componentDidMount() {
    const step = [...document.querySelectorAll(".np-ourpro__step")];
    const thisStep = step[this.props.index];
    this.setState(
      prevState => {
        return {
          thisStep: thisStep,
          stepIndex: this.props.index
        };
      },
      () => {
        const mq = window.matchMedia("(min-width: 1025px)").matches;
        if (mq) {
          this.setTheScene(this.state.thisStep);
        } else {
          this.mobileTabletReset(this.state.thisStep);
        }
      }
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      const number = this.state.thisStep.querySelector(
        ".np-ourpro__step--number"
      );

      if (
        this.props.currentStep === this.state.stepIndex &&
        !this.state.listening
      ) {
        number.addEventListener("click", this.props.changeActiveStep);
        this.setState(prevState => {
          return {
            listening: true
          };
        });
      } else if (
        this.state.listening &&
        !this.state.animating &&
        this.props.currentStep !== this.state.stepIndex
      ) {
        number.removeEventListener("click", this.props.changeActiveStep);
        this.setState(prevState => {
          return {
            listening: false,
            animating: true
          };
        });
        this.animateStep(this.state.thisStep);
      }
    }

    if (prevState !== this.state) {
      if (this.props.currentStep === this.state.stepIndex) {
        // Grab the numbers. //
        const number = this.state.thisStep.querySelector(
          ".np-ourpro__step--number"
        );

        if (!this.state.listening) {
          // Add the first event listener to the active number. //
          number.addEventListener("click", this.props.changeActiveStep);
          this.setState(prevState => {
            return {
              listening: true
            };
          });
        }
      }
    }
  }

  setTheScene(step) {
    const number = step.querySelector(".np-ourpro__step--number");
    const icon = step.querySelector(".np-ourpro__step--icon");
    const content = step.querySelector(".np-ourpro__step--contentwrap");
    TweenMax.set(number, { autoAlpha: 1 });
    TweenMax.set(icon, { autoAlpha: 0 });
    TweenMax.set(content, { autoAlpha: 0 });
  }

  animateStep(step) {
    const number = step.querySelector(".np-ourpro__step--number");
    const icon = step.querySelector(".np-ourpro__step--icon");
    const content = step.querySelector(".np-ourpro__step--contentwrap");
    TweenMax.set(icon, { autoAlpha: 1 });
    const stepAnimationTimeLine = new TimelineMax();

    stepAnimationTimeLine
      .to(number, 0.5, { x: -100 })
      .fromTo(content, 0.5, { y: 100 }, { y: 0, autoAlpha: 1 }, "+=0.5");
  }

  mobileTabletReset(step) {
    const number = step.querySelector(".np-ourpro__step--number");
    const icon = step.querySelector(".np-ourpro__step--icon");
    const content = step.querySelector(".np-ourpro__step--contentwrap");
    TweenMax.set(number, { autoAlpha: 1 });
    TweenMax.set(icon, { autoAlpha: 1 });
    TweenMax.set(content, { autoAlpha: 1 });
    number.removeEventListener("click", this.props.changeActiveStep);
    this.setState(prevState => {
      return {
        listening: false,
        animating: true
      };
    });
    this.props.changeActiveStep();
    this.animateStep(this.state.thisStep);
  }

  render() {
    const contentRequired =
      this.props.step.content_req === "yes" ? true : false;
    const contentType = contentRequired ? this.props.step.content_type : false;

    const stepIcon = this.props.step.icon;
    const stepTitle = this.props.step.title;

    const activeClassName = this.state.listening ? " np-step-active" : "";
    const completeClassName = this.state.animating ? " np-step-done" : "";
    const numPeriod = this.state.animating ? "." : "";

    return (
      <div className="np-ourpro__step">
        <div className={`np-ourpro__step--icon np-ourpro__step--${stepIcon}`}>
          {stepIcon === "hand" && <HandIcon animating={this.state.animating} />}
          {stepIcon === "barn" && <BarnIcon animating={this.state.animating} />}
          {stepIcon === "stock" && (
            <WheatIcon animating={this.state.animating} />
          )}
          {stepIcon === "chem" && <ChemIcon animating={this.state.animating} />}
          {stepIcon === "wind" && (
            <TurbineIcon animating={this.state.animating} />
          )}
          {stepIcon === "silo" && <SiloIcon animating={this.state.animating} />}
          {stepIcon === "farmer" && (
            <FarmIcon animating={this.state.animating} />
          )}
          {stepIcon === "animals" && (
            <AnimalsIcon animating={this.state.animating} />
          )}
        </div>
        <div
          className={`np-ourpro__step--number${activeClassName}${completeClassName}`}
        >
          <p>{`${this.props.index + 1}${numPeriod}`}</p>
        </div>
        <div className="np-ourpro__step--contentwrap">
          <div className="np-ourpro__step--title">
            <h3>{stepTitle}</h3>
          </div>

          {contentRequired &&
            contentType === "paragraph" && (
              <div
                className="np-ourpro__step--content"
                dangerouslySetInnerHTML={{ __html: this.props.step.content }}
              />
            )}

          {contentRequired &&
            contentType === "list" && (
              <ul className="np-ourpro__step--list">
                {this.props.step.list_items.map((item, index) => {
                  return <li key={index}>{item.list_item}</li>;
                })}
              </ul>
            )}
        </div>
      </div>
    );
  }
}

export default ProProcessStep;
