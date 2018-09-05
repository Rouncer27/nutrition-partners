import React, { Component } from "react";

const Hero = props => {
  const heroImageSrc = props.acf._np_hero_image.sizes.fullbackground;
  const heroImageAlt = props.acf._np_hero_image.alt;
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

export default Hero;
