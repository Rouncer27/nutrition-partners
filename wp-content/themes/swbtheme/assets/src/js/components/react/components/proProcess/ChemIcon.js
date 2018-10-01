import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class ChemIcon extends Component {
  constructor(props) {
    super(props);
    this.animateTheOutline = this.animateTheOutline.bind(this);
    this.state = {
      animatingTheIconComplete: false
    };
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

    const iconContainer = document.querySelector(".np-pro-icon-chem");
    const path = iconContainer.querySelector(".np-pro-outline circle");
    const chem = iconContainer.querySelector(".np-pro-chem");

    const outlineTL = new TimelineMax({
      delay: 0.5
    });
    outlineTL
      .fromTo(
        path,
        1,
        {
          strokeDasharray: "755",
          strokeDashoffset: "755"
        },
        {
          strokeDashoffset: "0"
        }
      )
      .fromTo(chem, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
  }

  render() {
    return (
      <div className="np-pro-icon-chem">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 250"
        >
          <defs />
          <g className="np-pro-outline">
            <circle
              className="cls-1"
              cx="125"
              cy="125"
              r="120.03"
              transform="rotate(-45 124.998 125.004)"
            />
          </g>

          <g className="np-pro-chem">
            <circle className="cls-2" cx="64.15" cy="92.52" r="30.91" />
            <circle className="cls-2" cx="180.67" cy="92.43" r="30.91" />
            <circle className="cls-2" cx="122.26" cy="92.52" r="30.91" />
            <circle className="cls-2" cx="122.26" cy="171.02" r="27.19" />
            <circle className="cls-2" cx="167.05" cy="184.77" r="27.19" />
            <path
              className="cls-3"
              d="M70.9,105.1,69,98.79H59.32L57.4,105.1h-6L60.7,78.5h6.87L77,105.1Zm-3.26-11c-1.78-5.71-2.77-9-3-9.69s-.38-1.35-.48-1.78q-.6,2.33-3.42,11.47Z"
            />
            <path
              className="cls-3"
              d="M193.81,92.9q.09,6.54-3.6,10.06t-10.71,3.61l-7.5.1-.32-26.5,8.31-.1q6.49-.07,10.12,3.31T193.81,92.9Zm-5.83.22q-.1-8.53-7.64-8.45l-3,0,.21,17.25,2.41,0Q188.08,101.82,188,93.12Z"
            />
            <path
              className="cls-3"
              d="M130.45,105.1H115.2V78.6h15.25v4.61h-9.64V89h9v4.61h-9v6.83h9.64Z"
            />
            <path
              className="cls-3"
              d="M109.2,156.8h7.25q5,0,7.2,1.41a4.92,4.92,0,0,1,2.24,4.49,5.69,5.69,0,0,1-1,3.43,3.91,3.91,0,0,1-2.61,1.61v.16a5.13,5.13,0,0,1,3.2,1.85,6,6,0,0,1,1,3.6,5.94,5.94,0,0,1-2.3,5,10,10,0,0,1-6.26,1.79H109.2Zm4.94,9.23H117a5.2,5.2,0,0,0,2.91-.62,2.32,2.32,0,0,0,.9-2.06,2.07,2.07,0,0,0-1-1.92,6.28,6.28,0,0,0-3.1-.58h-2.6Zm0,3.92V176h3.22a4.78,4.78,0,0,0,3-.78,2.88,2.88,0,0,0,1-2.39c0-1.94-1.39-2.91-4.15-2.91Z"
            />
            <path
              className="cls-3"
              d="M128.06,180.26c0-2.69.56-4.69,1.7-6a6.41,6.41,0,0,1,5.11-2,9.51,9.51,0,0,1,1.82.14v2.3a7.12,7.12,0,0,0-1.64-.19,5.57,5.57,0,0,0-2.41.45,2.94,2.94,0,0,0-1.4,1.32,6.11,6.11,0,0,0-.55,2.48h.12a3.17,3.17,0,0,1,2.95-1.58,3.66,3.66,0,0,1,2.86,1.14,4.59,4.59,0,0,1,1,3.16,4.76,4.76,0,0,1-1.23,3.45,4.53,4.53,0,0,1-3.4,1.26,4.91,4.91,0,0,1-2.63-.69,4.65,4.65,0,0,1-1.73-2A7.84,7.84,0,0,1,128.06,180.26Zm4.9,3.66a1.72,1.72,0,0,0,1.42-.62,2.81,2.81,0,0,0,.49-1.76,2.49,2.49,0,0,0-.46-1.57,1.68,1.68,0,0,0-1.39-.57,2.12,2.12,0,0,0-1.49.57,1.72,1.72,0,0,0-.62,1.32,3,3,0,0,0,.58,1.87A1.8,1.8,0,0,0,133,183.92Z"
            />
            <path
              className="cls-3"
              d="M153.59,172.53h7.25q4.95,0,7.2,1.41a4.92,4.92,0,0,1,2.24,4.49,5.71,5.71,0,0,1-1,3.43,3.93,3.93,0,0,1-2.61,1.61v.16a5.13,5.13,0,0,1,3.2,1.85,6,6,0,0,1,1,3.6,5.93,5.93,0,0,1-2.31,5,9.94,9.94,0,0,1-6.25,1.79h-8.72Zm4.94,9.23h2.87a5.29,5.29,0,0,0,2.91-.62,2.33,2.33,0,0,0,.9-2.06,2.07,2.07,0,0,0-1-1.92,6.3,6.3,0,0,0-3.1-.58h-2.6Zm0,3.92v6.08h3.22a4.78,4.78,0,0,0,3-.78,2.89,2.89,0,0,0,1-2.4q0-2.9-4.14-2.9Z"
            />
            <path
              className="cls-3"
              d="M182.32,191.21a3.14,3.14,0,0,1-.77,2.16,4,4,0,0,1-2.17,1.23v.06a4.32,4.32,0,0,1,2.5,1,2.8,2.8,0,0,1,.84,2.14,3.62,3.62,0,0,1-1.42,3,6.54,6.54,0,0,1-4.06,1.09,9.91,9.91,0,0,1-3.93-.73v-2.44a9.66,9.66,0,0,0,1.74.65,7.71,7.71,0,0,0,1.88.25,3.58,3.58,0,0,0,2.1-.49,1.78,1.78,0,0,0,.68-1.55,1.41,1.41,0,0,0-.78-1.36,5.87,5.87,0,0,0-2.49-.4h-1v-2.2h1.05a5,5,0,0,0,2.31-.41,1.51,1.51,0,0,0,.73-1.42c0-1-.65-1.54-1.94-1.54a4.39,4.39,0,0,0-1.36.22,7.1,7.1,0,0,0-1.54.77l-1.33-2a7.42,7.42,0,0,1,4.44-1.34,5.74,5.74,0,0,1,3.33.86A2.75,2.75,0,0,1,182.32,191.21Z"
            />
          </g>
        </svg>
      </div>
    );
  }
}
export default ChemIcon;
