import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";
import classnames from "classnames";

import FeaturedImage from "./featured/FeaturedImage";
import FeaturedContent from "./featured/FeaturedContent";

class Featured extends Component {
  constructor(props) {
    super(props);

    this.changeActiveSlide = this.changeActiveSlide.bind(this);

    this.state = {
      slides: [],
      activeQuebecSlider: "",
      activeSlider: ""
    };
  }
  componentWillMount() {
    axios
      .get(`${this.props.baseApiUrl}/wp-json/wp/v2/pages/${this.props.pageID}`)
      .then(result => {
        this.setState(
          prevState => ({
            ...prevState,
            slides: result.data.acf._np_featured_opening_slides,
            activeQuebecSlider: result.data.acf._np_featured_opening_slides
              .find(slide => {
                return slide.opening_slide === "yes";
              })
              .en_title.toLowerCase()
          }),
          () => {
            const currentSlide =
              this.props.userLocation === "quebec"
                ? this.state.activeQuebecSlider
                : this.state.slides[0].en_title.toLowerCase();
            this.setState(prevState => ({
              ...prevState,
              activeSlider: currentSlide
            }));
          }
        );
      });
  }

  changeActiveSlide(e) {
    const clickedItem = e.target.innerText.toLowerCase();
    if (clickedItem === this.state.activeSlider) return;
    this.setState(prevState => ({
      ...prevState,
      activeSlider: clickedItem
    }));
  }
  render() {
    return (
      <div className="np-featured">
        <div className="np-featured__wrapper">
          <div className="np-featured__images">
            {this.state.slides.map((slide, index) => {
              return (
                <FeaturedImage
                  key={index}
                  slide={slide}
                  activeSlide={this.state.activeSlider}
                />
              );
            })}
          </div>

          <div className="np-featured__menu">
            <ul className="np-featured__menu--list">
              {this.state.slides.map((slide, index) => {
                return (
                  <li
                    onClick={this.changeActiveSlide}
                    key={index}
                    className={classnames(
                      `np-slide-menu-item np-slide-menu-${slide.en_title.toLowerCase()}`,
                      {
                        "np-active-slide-menu-item":
                          this.state.activeSlider ===
                          slide.en_title.toLowerCase()
                      }
                    )}
                  >
                    {slide.en_title.toLowerCase()}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="np-featured__content">
            {this.state.slides.map((slide, index) => {
              return (
                <FeaturedContent
                  key={index}
                  slide={slide}
                  browserLang={this.props.browserLang}
                  activeSlide={this.state.activeSlider}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
