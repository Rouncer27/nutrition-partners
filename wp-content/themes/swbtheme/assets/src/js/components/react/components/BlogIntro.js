import React from "react";

const BlogIntro = props => {
  const openingIntro =
    props.browserLang === "en"
      ? props.acf._np_blog_opening_en
      : props.acf._np_blog_opening_fr;
  return (
    <div className="np-blogintro">
      <div className="np-blogintro__wrapper">
        <div className="np-blogintro__title">
          <h2>{openingIntro}</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogIntro;
