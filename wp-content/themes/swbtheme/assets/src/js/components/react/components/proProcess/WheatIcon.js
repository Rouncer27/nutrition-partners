import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class WheatIcon extends Component {
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

    const iconContainer = document.querySelector(".np-pro-icon-wheat");
    const path = iconContainer.querySelector(".np-pro-outline circle");
    const wheat = iconContainer.querySelector(".np-pro-wheat");

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
      .fromTo(wheat, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
  }

  render() {
    return (
      <div className="np-pro-icon-wheat">
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
          <g className="np-pro-wheat">
            <path
              className="cls-2"
              d="M125,98.61l-1-.79c-.36-.27-8.77-6.82-8.77-15.23s8.41-15,8.77-15.22l1-.79,1,.79c.36.27,8.76,6.82,8.76,15.22s-8.4,15-8.76,15.23Zm0-27.71c-2,1.87-6.43,6.49-6.43,11.69s4.39,9.83,6.43,11.7c2-1.87,6.43-6.49,6.43-11.7S127,72.77,125,70.9Z"
            />
            <path
              className="cls-2"
              d="M132.47,111.28a24.81,24.81,0,0,1-3-.16l-1.28-.17-.16-1.27c-.06-.45-1.38-11,4.57-17s16.52-4.63,17-4.57l1.28.17.17,1.27c.05.45,1.37,11-4.58,17C142.37,110.61,136.15,111.28,132.47,111.28Zm-1.22-3.38c2.76.12,9.14,0,12.81-3.72s3.85-10.05,3.72-12.82c-2.76-.12-9.14,0-12.81,3.72S131.13,105.13,131.25,107.9Z"
            />
            <path
              className="cls-2"
              d="M132.47,133.44a23.64,23.64,0,0,1-3-.17l-1.28-.16-.16-1.28c-.06-.45-1.38-11,4.57-17s16.52-4.64,17-4.58l1.28.17.17,1.28c.05.44,1.37,11-4.58,17C142.37,132.76,136.15,133.44,132.47,133.44Zm-1.22-3.39c2.76.12,9.13,0,12.81-3.72s3.85-10,3.73-12.81c-2.77-.13-9.14,0-12.82,3.72S131.12,127.29,131.25,130.05Z"
            />
            <path
              className="cls-2"
              d="M132.47,155.43a27.46,27.46,0,0,1-3-.16l-1.28-.17-.16-1.28c-.06-.44-1.38-11,4.57-17s16.52-4.63,17-4.58l1.28.17.17,1.28c.05.45,1.37,11-4.58,17C142.37,154.76,136.15,155.43,132.47,155.43ZM131.25,152c2.76.12,9.14,0,12.81-3.72s3.85-10,3.73-12.81c-2.77-.12-9.14,0-12.82,3.72S131.13,149.28,131.25,152Z"
            />
            <path
              className="cls-2"
              d="M117.35,111.28c-3.68,0-9.9-.67-14-4.73-6-6-4.63-16.52-4.57-17L99,88.31l1.28-.17c.45-.06,11-1.37,17,4.57s4.64,16.52,4.58,17l-.17,1.27-1.28.17A24.81,24.81,0,0,1,117.35,111.28Zm-11.59-7.1c3.69,3.69,10,3.85,12.81,3.72.13-2.76,0-9.14-3.72-12.82s-10-3.85-12.81-3.72C101.92,94.12,102.08,100.5,105.76,104.18Z"
            />
            <path
              className="cls-2"
              d="M117.35,133.44c-3.68,0-9.9-.68-14-4.74-6-5.94-4.63-16.52-4.57-17l.16-1.28,1.28-.17c.45-.06,11-1.37,17,4.58s4.64,16.51,4.58,17l-.17,1.28-1.28.16A23.64,23.64,0,0,1,117.35,133.44ZM102,113.52c-.12,2.76,0,9.13,3.72,12.81s10,3.84,12.81,3.72c.13-2.76,0-9.14-3.72-12.81S104.8,113.39,102,113.52Z"
            />
            <path
              className="cls-2"
              d="M117.35,155.43c-3.68,0-9.9-.67-14-4.74-6-5.94-4.63-16.51-4.57-17l.16-1.28,1.28-.17c.45-.05,11-1.37,17,4.58s4.64,16.52,4.58,17l-.17,1.28-1.28.17A27.46,27.46,0,0,1,117.35,155.43ZM102,135.51c-.12,2.76,0,9.13,3.72,12.81s10,3.85,12.81,3.72c.13-2.76,0-9.14-3.72-12.81S104.8,135.38,102,135.51Z"
            />
            <rect
              className="cls-2"
              x="123.28"
              y="96.49"
              width="3.35"
              height="82.65"
            />
            <path
              className="cls-2"
              d="M125,179.17v-3.36c5.9,0,16.6-8.77,26.64-21.82,10.28-13.38,16.93-27.25,16.93-35.35h3.35c0,16.08-4.83,31.23-13.6,42.63S137.58,179.17,125,179.17Zm41.12-41.63A123.48,123.48,0,0,1,154.25,156a99.67,99.67,0,0,1-16.58,17.29C150.92,168,161.51,154.62,166.08,137.54Z"
            />
            <path
              className="cls-2"
              d="M125,179.17c-12.62,0-24.46-6.36-33.33-17.89s-13.59-26.54-13.59-42.63H81.4c0,8.1,6.64,22,16.93,35.35,10,13,20.74,21.82,26.64,21.82ZM83.84,137.53C88.41,154.62,99,168,112.26,173.34A99.77,99.77,0,0,1,95.67,156,123.87,123.87,0,0,1,83.84,137.53Z"
            />
          </g>
        </svg>
      </div>
    );
  }
}
export default WheatIcon;
