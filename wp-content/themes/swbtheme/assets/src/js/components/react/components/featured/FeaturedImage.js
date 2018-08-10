import React from "react";
import classnames from "classnames";

export default props => {
  const large = props.slide.image.sizes.fullbackground
    ? props.slide.image.sizes.fullbackground
    : props.slide.image.url;
  const medium = props.slide.image.sizes.contained
    ? props.slide.image.sizes.contained
    : props.slide.image.url;
  const small = props.slide.image.sizes.contained
    ? props.slide.image.sizes.contained
    : props.slide.image.url;
  const altText = props.slide.image.alt
    ? props.slide.image.alt
    : "Nutrition Partners";
  return (
    <div
      className={classnames(
        `np-featured__images--image np-${props.slide.en_title.toLowerCase()}-slideimg`,
        {
          "np-active-featured-slide":
            props.activeSlide === props.slide.en_title.toLowerCase()
        }
      )}
    >
      <picture>
        <source srcSet={large} media="(min-width: 1600px)" />
        <source srcSet={medium} media="(min-width: 1024px)" />
        <source srcSet={small} media="(min-width: 320px)" />
        <img src={large} alt={altText} />
      </picture>
    </div>
  );
};
