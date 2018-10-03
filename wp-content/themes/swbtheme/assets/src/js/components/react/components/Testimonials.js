import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";
import Testimonial from "./testimonial/Testimonial";

// import Carousel from "nuka-carousel";
import Slider from "react-slick";

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.generateRandNumber = this.generateRandNumber.bind(this);
    this.generateRandNumberArray = this.generateRandNumberArray.bind(this);

    this.state = {
      testimonials: [],
      randNumArray: []
    };
  }
  componentDidMount() {
    if (this.props.baseApiUrl) {
      axios
        .get(`${this.props.baseApiUrl}/wp-json/wp/v2/testimonial/?per_page=20`)
        .then(res => {
          this.setState(
            prevState => {
              return {
                ...prevState,
                testimonials: res.data
              };
            },
            () => {
              // Let get a random number between 1 and the number of testimonials we have in the database. //
              const randNumArray = this.generateRandNumberArray();
              this.setState(prevState => {
                return {
                  ...prevState,
                  randNumArray
                };
              });
            }
          );
        });
    }
  }

  generateRandNumber() {
    const randNum =
      Math.floor(Math.random() * this.state.testimonials.length) + 1;
    return randNum;
  }

  generateRandNumberArray() {
    const randNums = [];
    let stopper = 0;
    while (
      randNums.length < 5 &&
      randNums.length <= this.state.testimonials.length - 1 &&
      stopper < 25
    ) {
      const randNum = this.generateRandNumber();
      if (randNums.indexOf(randNum) === -1) {
        randNums.push(randNum);
      }
      stopper++;
    }

    return randNums;
  }

  render() {
    const acf = this.props.pageData.acf;
    const browserLang = this.props.browserLang;
    const enTitle = acf._np_en_testimonials_title;
    const frTitle = acf._np_fr_testimonials_title;
    const testimonialTitle = browserLang === "en" ? enTitle : frTitle;
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      customPaging: i => <div> </div>
    };
    let counter = 0;

    return (
      <div className="np-testimonials">
        <div className="np-testimonials__wrapper">
          <div className="np-testimonials__title">
            <h2>{testimonialTitle}</h2>
          </div>
          <Slider className="np-testimonials__slider" {...settings}>
            {this.state.testimonials.map((test, index) => {
              if (
                this.state.randNumArray.indexOf(index + 1) > -1 &&
                counter < this.state.randNumArray.length
              ) {
                counter++;
                return (
                  <Testimonial
                    key={test.id}
                    testimonial={test}
                    browserLang={browserLang}
                  />
                );
              }
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Testimonials;
