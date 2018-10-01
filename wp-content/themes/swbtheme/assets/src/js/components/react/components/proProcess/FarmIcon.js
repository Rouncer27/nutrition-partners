import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class FarmIcon extends Component {
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

    const iconContainer = document.querySelector(".np-pro-icon-farm");
    const path = iconContainer.querySelector(".np-pro-outline circle");
    const farm = iconContainer.querySelector(".np-pro-farm");

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
      .fromTo(farm, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
  }

  render() {
    return (
      <div className="np-pro-icon-farm">
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
          <g className="np-pro-farm">
            <rect
              className="cls-2"
              x="67.36"
              y="96.88"
              width="3.77"
              height="81.85"
            />
            <path
              className="cls-2"
              d="M73.62,118.08H65.19a5.39,5.39,0,0,1-5.38-5.4V96.88h3.77v15.8a1.62,1.62,0,0,0,1.61,1.63h8.43a1.62,1.62,0,0,0,1.61-1.63V96.88H79v15.8A5.4,5.4,0,0,1,73.62,118.08Z"
            />
            <polygon
              className="cls-2"
              points="119.91 170.34 108.51 170.34 108.51 166.57 117.16 166.57 124.82 142.74 123.58 142.74 110.47 164.44 107.24 162.49 121.45 138.97 129.99 138.97 119.91 170.34"
            />
            <polygon
              className="cls-2"
              points="110.03 153.86 106.99 151.64 113.48 142.74 111.83 142.74 111.83 138.97 120.89 138.97 110.03 153.86"
            />
            <path
              className="cls-2"
              d="M166.64,170.34H149.45L139.31,139h8.44Zm-14.45-3.77H160l-14.35-23.83h-1.13Z"
            />
            <path
              className="cls-2"
              d="M190.27,170.34h-18.4L148.42,139h10.11Zm-16.51-3.77h7.33L157,142.74h-1Z"
            />
            <path
              className="cls-2"
              d="M143.14,170.34h-17L130.26,139h8.83Zm-12.68-3.77h8.39l-3.08-23.83h-2.2Z"
            />
            <path
              className="cls-2"
              d="M154.43,92.25a6.14,6.14,0,0,1-5.24-3,7.31,7.31,0,0,1-1.08-3.83,7.85,7.85,0,0,1,2.42-5.76,8.6,8.6,0,0,1,5.31-2.26c1-3.61,4.07-8.51,10.86-8.51,6.16,0,11.18,4.65,11.18,10.36,0,.28,0,.58,0,.89a10.68,10.68,0,0,1,2.68.5,7.1,7.1,0,0,1,4.73,6.48,5.43,5.43,0,0,1-.25,1.74,5.09,5.09,0,0,1-4.93,3.37Zm2.39-11.1a5.25,5.25,0,0,0-3.7,1.27,4.1,4.1,0,0,0-1.24,3,3.68,3.68,0,0,0,.54,1.9,2.37,2.37,0,0,0,2,1.14h25.63a1.39,1.39,0,0,0,1.34-.78,1.75,1.75,0,0,0,.07-.48v-.06a3.38,3.38,0,0,0-2.37-3,17.63,17.63,0,0,0-3.47-.33l-2.24,0,.43-2.2a15.89,15.89,0,0,0,.29-2.3c0-3.64-3.32-6.59-7.41-6.59a6.67,6.67,0,0,0-6.1,3.24,10.27,10.27,0,0,0-1.35,3.59L159,81.25l-1.75-.08Zm22.28,3"
            />
            <path
              className="cls-2"
              d="M124,101.36a5,5,0,0,1-4.23-2.4,5.94,5.94,0,0,1-.85-3,6.15,6.15,0,0,1,1.91-4.54,6.61,6.61,0,0,1,3.79-1.73,8.37,8.37,0,0,1,8.24-6.19c4.74,0,8.59,3.59,8.59,8v.18a6.79,6.79,0,0,1,1.58.34,5.65,5.65,0,0,1,3.73,5.16,4.09,4.09,0,0,1-4.26,4.21Zm1.73-8a3.25,3.25,0,0,0-2.31.77,2.46,2.46,0,0,0-.73,1.8A2.16,2.16,0,0,0,123,97a1.2,1.2,0,0,0,1,.57h18.5c.25,0,.45-.12.47-.2s0-.11,0-.16v-.06a1.94,1.94,0,0,0-1.36-1.69,14.17,14.17,0,0,0-2.34-.21l-2.24,0,.43-2.21a9.8,9.8,0,0,0,.2-1.56c0-2.33-2.16-4.23-4.82-4.23-4.27,0-4.83,4.28-4.85,4.47l-.21,1.75-1.77-.09Z"
            />
            <path
              className="cls-2"
              d="M108.87,142.87H105.1V123.51a7.26,7.26,0,0,0-7.32-7.19H89.69a7.26,7.26,0,0,0-7.31,7.19v8.88L80,133.62l-11.75-8.23,2.16-3.09,8.21,5.75v-4.54a11,11,0,0,1,11.08-11h8.09a11,11,0,0,1,11.09,11Z"
            />
            <rect
              className="cls-2"
              x="81.24"
              y="97.2"
              width="24.91"
              height="3.77"
            />
            <polygon
              className="cls-2"
              points="98.76 99.35 97.86 92.9 89.21 92.88 88.43 99.31 84.69 98.86 85.87 89.11 101.14 89.13 102.5 98.83 98.76 99.35"
            />
            <polygon
              className="cls-2"
              points="103.26 178.99 83.88 178.99 83.88 116.19 87.65 116.19 87.65 175.22 99.49 175.22 99.46 116.2 103.23 116.19 103.26 178.99"
            />
            <polygon
              className="cls-2"
              points="97.88 122.07 89.23 122.07 89.23 114.77 93 114.77 93 118.3 94.11 118.3 94.11 114.77 97.88 114.77 97.88 122.07"
            />
            <rect
              className="cls-2"
              x="91.49"
              y="140.38"
              width="3.77"
              height="36.72"
            />
            <path
              className="cls-2"
              d="M93.59,111.85a9.62,9.62,0,0,1-9.66-9.55,9.37,9.37,0,0,1,.9-4l3.41,1.61a5.63,5.63,0,0,0-.54,2.42,5.9,5.9,0,0,0,11.79,0A5.63,5.63,0,0,0,99,99.88l3.41-1.61a9.37,9.37,0,0,1,.9,4A9.62,9.62,0,0,1,93.59,111.85Z"
            />
          </g>
        </svg>
      </div>
    );
  }
}
export default FarmIcon;
