import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class SiloIcon extends Component {
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

    const iconContainer = document.querySelector(".np-pro-icon-silo");
    const path = iconContainer.querySelector(".np-pro-outline circle");
    const silo = iconContainer.querySelector(".np-pro-silo");

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
      .fromTo(silo, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
  }
  render() {
    return (
      <div className="np-pro-icon-silo">
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
          <g className="np-pro-silo">
            <polygon
              className="cls-2"
              points="93.88 149.83 89.67 149.83 89.67 90.79 74.04 81.51 58.41 90.79 58.41 149.83 54.2 149.83 54.2 88.39 74.04 76.61 93.88 88.39 93.88 149.83"
            />
            <polygon
              className="cls-2"
              points="120.95 113.74 116.74 113.74 116.74 74.64 101.11 65.35 85.49 74.64 85.49 84.6 81.27 84.6 81.27 72.24 101.11 60.45 120.95 72.24 120.95 113.74"
            />
            <rect
              className="cls-2"
              x="107.88"
              y="118.57"
              width="4.21"
              height="31.26"
            />
            <polygon
              className="cls-2"
              points="190.04 123.91 145.26 100.83 103.07 123.88 101.05 120.18 145.2 96.06 191.97 120.16 190.04 123.91"
            />
            <rect
              className="cls-2"
              x="180.79"
              y="118.57"
              width="4.21"
              height="31.26"
            />
            <polygon
              className="cls-2"
              points="168.99 149.83 164.77 149.83 164.77 128.92 129.21 128.92 129.21 149.83 125 149.83 125 124.7 168.99 124.7 168.99 149.83"
            />
            <rect
              className="cls-2"
              x="50.93"
              y="147.72"
              width="138.41"
              height="4.21"
            />
          </g>
        </svg>
      </div>
    );
  }
}
export default SiloIcon;
