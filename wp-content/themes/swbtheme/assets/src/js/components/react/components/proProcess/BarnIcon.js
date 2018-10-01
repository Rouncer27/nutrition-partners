import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class BarnIcon extends Component {
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

    const iconContainer = document.querySelector(".np-pro-icon-barn");
    const path = iconContainer.querySelector(".np-pro-outline circle");
    const barn = iconContainer.querySelector(".np-pro-barn");

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
      .fromTo(barn, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
  }

  render() {
    return (
      <div className="np-pro-icon-barn">
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
          <g className="np-pro-barn">
            <path
              className="cls-2"
              d="M186.83,183.13H63.17V111.07L83.25,77.3,125,64.66,166.56,77.3l20.27,33.76ZM67.39,178.91H182.61V112.23L163.78,80.86,125,69.07,86,80.86,67.39,112.23Z"
            />
            <polygon
              className="cls-2"
              points="185.75 113.91 183.69 110.23 192.2 105.47 170.78 69.79 125 55.87 79.01 69.79 57.81 105.45 65.99 109.91 63.97 113.61 51.95 107.06 76.22 66.23 125 51.47 173.56 66.23 198.05 107.03 185.75 113.91"
            />
            <path
              className="cls-2"
              d="M139.69,112.77H110.31l0-20.09a14.68,14.68,0,0,1,29.31,0v.12Zm-25.15-4.22h20.92l0-15.68a10.46,10.46,0,0,0-20.88,0Z"
            />
            <path
              className="cls-2"
              d="M166.38,187.86l-40.57-59.57L89.31,181.9l-4.06-1.25V121.89h81.13ZM89.47,126.11v48.06l32.72-48.06Zm40,0,32.72,48.06V126.11Z"
            />
            <rect
              className="cls-2"
              x="123.7"
              y="124.85"
              width="4.22"
              height="56.17"
            />
            <polygon
              className="cls-2"
              points="127.01 183.02 124.62 183.02 86.8 126.94 90.3 124.58 125.81 177.24 161.39 124.5 164.89 126.86 127.01 183.02"
            />
          </g>
        </svg>
      </div>
    );
  }
}
export default BarnIcon;
