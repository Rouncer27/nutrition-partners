import React, { Component } from "react";

const HeroPost = props => {
  const heroImageSrc = props.acf.featured_image.sizes.fullbackground;
  const heroImageAlt = props.acf.featured_image.alt;
  return (
    <div className="np-hero">
      <div className="np-hero__image">
        <div className="np-hero__wrapper">
          <img src={heroImageSrc} alt={heroImageAlt} />
        </div>
      </div>
    </div>
  );
};

export default HeroPost;
