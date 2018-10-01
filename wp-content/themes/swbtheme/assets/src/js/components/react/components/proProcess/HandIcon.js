import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class HandIcon extends Component {
  constructor(props) {
    super(props);

    this.animateTheHand = this.animateTheHand.bind(this);
    this.animateTheOutline = this.animateTheOutline.bind(this);

    this.state = {
      animatingTheIconComplete: false
    };
  }

  componentDidMount() {
    const handContainer = document.querySelector(".np-hand-pro-icon");
    const handIcon = document.querySelector(".np-hand-pro-icon svg");
    const handHand = handIcon.querySelector(".np-pro-hand-hand");
    const handSeeds = [...handIcon.querySelectorAll(".np-pro-hand-seeds path")];
    TweenMax.set(handHand, { autoAlpha: 0 });
    TweenMax.set([handSeeds], { autoAlpha: 0 });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.animating && !this.state.animatingTheIconComplete) {
      this.animateTheOutline();
    }
  }

  animateTheOutline() {
    this.setState(prevState => {
      return {
        animatingTheIconComplete: !prevState.animatingTheIconComplete
      };
    });

    const handContainer = document.querySelector(".np-hand-pro-icon");
    const handOutline = document.querySelector(".np-pro-hand-outline");
    const path = document.querySelector(".np-pro-hand-outline circle");

    const outlineTL = new TimelineMax({
      delay: 0.5,
      onComplete: () => {
        this.animateTheHand();
      }
    });
    outlineTL.fromTo(
      path,
      1,
      {
        strokeDasharray: "755",
        strokeDashoffset: "755"
      },
      {
        strokeDashoffset: "0"
      }
    );
  }

  animateTheHand() {
    const handContainer = document.querySelector(".np-hand-pro-icon");
    handContainer.removeEventListener("click", this.animateTheHand);
    const handIcon = document.querySelector(".np-hand-pro-icon svg");
    const handHand = handIcon.querySelector(".np-pro-hand-hand");
    const handSeeds = [...handIcon.querySelectorAll(".np-pro-hand-seeds path")];
    const seedTL = new TimelineMax();
    seedTL
      .fromTo(handHand, 0.25, { autoAlpha: 0 }, { autoAlpha: 1 })
      .staggerFromTo(
        handSeeds,
        0.25,
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 },
        0.15,
        "-=.15"
      );
  }

  render() {
    return (
      <div className="np-hand-pro-icon">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 250"
        >
          <defs />
          <g className="np-pro-hand-outline">
            {/* <path
              className="cls-1"
              d="M124.7,248.6A123.62,123.62,0,1,1,195.57,23.51a123.6,123.6,0,0,1-48.8,223.11A125,125,0,0,1,124.7,248.6Zm.43-240.44a116.74,116.74,0,1,0,66.58,20.9A116.79,116.79,0,0,0,125.13,8.16Z"
            /> */}
            <circle className="cls-1" cx="125" cy="125" r="120" />
          </g>
          <g className="np-pro-hand-hand">
            <path
              className="cls-2"
              d="M177.15,126.81H166.66v-4.29h10.49c2.24,0,2.43-1.12,2.43-2.26v-5a2.15,2.15,0,0,0-2.15-2.15h-46.3v-4.28h46.3a6.44,6.44,0,0,1,6.44,6.43v5C183.87,124.3,181.29,126.81,177.15,126.81Z"
            />
            <path
              className="cls-2"
              d="M97.18,140.56a25.9,25.9,0,0,1-25.87-25.82l0-15A25.84,25.84,0,0,1,85,76.84L120.35,58a7.44,7.44,0,0,1,10.11,3.12l2.24,4.26A7.44,7.44,0,0,1,130.2,75L120,81.76h56.51c3.06,0,7.38,2.16,7.38,7v3.9A6.85,6.85,0,0,1,177,99.48h-2.14V95.19H177a2.56,2.56,0,0,0,2.56-2.55v-3.9c0-2.58-3.06-2.69-3.09-2.69h-70.8l22.17-14.62a3.16,3.16,0,0,0,1.06-4.11l-2.24-4.26a3.15,3.15,0,0,0-4.29-1.32L87,80.62A21.55,21.55,0,0,0,75.57,99.7l0,15a21.62,21.62,0,0,0,21.58,21.55h0l73.41-.07s2.72-.33,2.72-2.69V129a2.13,2.13,0,0,0-2.14-2.15l-40.07,0v-4.29l40.07,0a6.42,6.42,0,0,1,6.44,6.44v4.56c0,4.93-4.56,7-7,7l-73.4.06Z"
            />
            <path
              className="cls-2"
              d="M183.58,113.15h-8.89v-4.28h8.89c1.62,0,2.44-.42,2.44-2.7v-4c0-2.35-1.53-2.7-2.44-2.7H131.11V95.19h52.47a6.57,6.57,0,0,1,6.73,7v4C190.31,110.54,187.79,113.15,183.58,113.15Z"
            />
          </g>
          <g className="np-pro-hand-seeds">
            <path
              className="cls-2"
              d="M118.69,127.07l-1.55-.07c-.31,0-7.54-.37-10.66-5.1s-.64-11.52-.53-11.8l.54-1.46,1.56.07c.3,0,7.53.37,10.66,5.1s.63,11.52.52,11.8Zm-9.18-13.86c-.4,1.86-.63,4.56.54,6.33s3.75,2.61,5.62,3c.4-1.86.63-4.57-.54-6.33S111.25,113.53,109.51,113.21Z"
            />
            <path
              className="cls-2"
              d="M131.13,162.2l-.69-1.4c-.13-.27-3.28-6.79-.63-11.8s9.8-6.08,10.1-6.12l1.54-.22.69,1.39c.13.28,3.28,6.79.63,11.8s-9.8,6.09-10.1,6.13Zm7.76-14.7c-1.83.54-4.3,1.64-5.29,3.51s-.5,4.54.08,6.35c1.83-.54,4.31-1.64,5.3-3.51S139.44,149.18,138.89,147.5Z"
            />
            <path
              className="cls-2"
              d="M113.75,173.25l-1.35-.78c-.27-.15-6.51-3.81-7.1-9.44s4.75-10.51,5-10.72l1.15-1,1.35.78c.27.15,6.51,3.81,7.1,9.44s-4.75,10.51-5,10.72ZM112,156.72c-1.21,1.46-2.66,3.75-2.44,5.86s2.12,4,3.61,5.23c1.22-1.47,2.67-3.76,2.45-5.87S113.39,157.81,112,156.72Z"
            />
            <path
              className="cls-2"
              d="M134.4,192.92c-2.51,0-6.11-.48-8.6-2.87-4.08-3.92-3.14-11.1-3.1-11.4l.22-1.54,1.53-.27c.3-.06,7.43-1.29,11.52,2.64s3.14,11.1,3.1,11.4l-.22,1.54-1.53.28A18.28,18.28,0,0,1,134.4,192.92Zm-7.54-12c0,1.91.39,4.59,1.92,6.06s4.22,1.74,6.13,1.67c0-1.9-.39-4.59-1.91-6.06S128.77,180.84,126.86,180.9Z"
            />
          </g>
        </svg>
      </div>
    );
  }
}
export default HandIcon;
