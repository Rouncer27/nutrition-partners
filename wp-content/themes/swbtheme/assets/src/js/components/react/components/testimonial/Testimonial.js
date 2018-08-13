import React from "react";

const Testimonial = props => {
  const browserLang = props.browserLang;
  const acf = props.testimonial.acf;
  const testName = acf._np_testimoinals_name;
  const enTestimonial = acf._np_en_testimoinals_content;
  const frTestimonial = acf._np_fr_testimoinals_content;

  const testimonialContent =
    browserLang === "en" ? enTestimonial : frTestimonial;

  return (
    <div>
      <p>{testimonialContent}</p>
      <p>{testName}</p>
    </div>
  );
};

export default Testimonial;
