import React from "react";
import classnames from "classnames";

export default props => {
  return (
    <div
      className={classnames(
        `np-featured__content--item np-${props.slide.en_title.toLowerCase()}-content`,
        {
          "np-active-featured-slide":
            props.activeSlide === props.slide.en_title.toLowerCase()
        }
      )}
    >
      <div>
        <h2>
          {props.browserLang === "en"
            ? props.slide.en_content_title
            : props.slide.fr_content_title}
        </h2>
        <h3>
          {props.browserLang === "en"
            ? props.slide.en_content_sub_title
            : props.slide.fr_content_sub_title}
        </h3>
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              props.browserLang === "en"
                ? props.slide.en_content
                : props.slide.fr_content
          }}
        />
      </div>
    </div>
  );
};
