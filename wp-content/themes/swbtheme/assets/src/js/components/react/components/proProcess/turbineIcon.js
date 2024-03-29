import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class TurbineIcon extends Component {
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

    const iconContainer = document.querySelector(".np-pro-icon-turbine");
    const path = iconContainer.querySelector(".np-pro-outline circle");
    const turbine = iconContainer.querySelector(".np-pro-turbine");

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
      .fromTo(turbine, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
  }

  render() {
    return (
      <div className="np-pro-icon-turbine">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 250"
        >
          <defs />
          <g className="np-pro-outline">
            <circle className="cls-1" cx="125" cy="125" r="120" />
          </g>
          <g className="np-pro-turbine">
            <polygon
              className="cls-2"
              points="119.19 202.3 124.75 202.3 122.85 109.66 120.99 109.66 119.19 202.3"
            />
            <path
              className="cls-2"
              d="M118.74,107A3.23,3.23,0,1,1,122,110.2,3.22,3.22,0,0,1,118.74,107Z"
            />
            <polygon
              className="cls-2"
              points="123.5 80.93 122.8 103.84 121.96 103.74 121.15 103.84 120.44 80.93 121.96 58.13 123.5 80.93"
            />
            <polygon
              className="cls-2"
              points="98.66 118.66 118.85 107.81 119.17 108.58 119.67 109.24 100.18 121.3 79.68 131.38 98.66 118.66"
            />
            <polygon
              className="cls-2"
              points="143.75 121.31 124.26 109.24 124.76 108.57 125.08 107.81 145.27 118.66 164.25 131.37 143.75 121.31"
            />
            <polygon
              className="cls-2"
              points="178.3 202.3 183.86 202.3 181.97 109.66 180.1 109.66 178.3 202.3"
            />
            <path
              className="cls-2"
              d="M178.82,107.43a3.24,3.24,0,1,1,0,4.57A3.23,3.23,0,0,1,178.82,107.43Z"
            />
            <polygon
              className="cls-2"
              points="200.6 92.38 183.9 108.09 183.39 107.43 182.73 106.92 198.44 90.23 215.63 75.18 200.6 92.38"
            />
            <polygon
              className="cls-2"
              points="156.35 101.5 178.3 108.1 177.99 108.88 177.88 109.7 155.56 104.44 133.94 97.08 156.35 101.5"
            />
            <polygon
              className="cls-2"
              points="186.37 135.26 181.12 112.94 181.95 112.83 182.71 112.52 189.32 134.47 193.75 156.88 186.37 135.26"
            />
            <polygon
              className="cls-2"
              points="62.2 202.3 67.76 202.3 65.87 109.66 63.99 109.66 62.2 202.3"
            />
            <path
              className="cls-2"
              d="M62.37,112.34a3.23,3.23,0,1,1,4.58,0A3.24,3.24,0,0,1,62.37,112.34Z"
            />
            <polygon
              className="cls-2"
              points="47.39 90.53 63.05 107.27 62.39 107.77 61.88 108.43 45.22 92.68 30.22 75.45 47.39 90.53"
            />
            <polygon
              className="cls-2"
              points="56.39 134.8 63.05 112.86 63.82 113.18 64.65 113.29 59.33 135.59 51.91 157.19 56.39 134.8"
            />
            <polygon
              className="cls-2"
              points="90.23 104.86 67.9 110.06 67.79 109.23 67.47 108.47 89.44 101.92 111.86 97.54 90.23 104.86"
            />
          </g>
        </svg>
      </div>
    );
  }
}
export default TurbineIcon;
