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
    <div className="np-testimonials__item">
      <p className="np-testimonials__item--content">{testimonialContent}</p>
      <p className="np-testimonials__item--name">{testName}</p>
    </div>
  );
};

export default Testimonial;
