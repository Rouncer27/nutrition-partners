import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";
import Testimonial from "./testimonial/Testimonial";

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testimonials: []
    };
  }
  componentDidMount() {
    if (this.props.baseApiUrl) {
      axios
        .get(`${this.props.baseApiUrl}/wp-json/wp/v2/testimonial`)
        .then(res => {
          this.setState(prevState => {
            return {
              ...prevState,
              testimonials: res.data
            };
          });
        });
    }
  }
  render() {
    const acf = this.props.pageData.acf;
    const browserLang = this.props.browserLang;
    const enTitle = acf._np_en_testimonials_title;
    const frTitle = acf._np_fr_testimonials_title;
    const testimonialTitle = browserLang === "en" ? enTitle : frTitle;
    return (
      <div>
        <div>
          <div>
            <h2>{testimonialTitle}</h2>
          </div>
          {this.state.testimonials.map(test => {
            return (
              <Testimonial
                key={test.id}
                testimonial={test}
                browserLang={browserLang}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Testimonials;
