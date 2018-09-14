import React from "react";
import moment from "moment";

export default props => {
  console.log(props);

  const mainImg = props.post.acf.featured_image
    ? props.post.acf.featured_image.sizes.mainblogpage
    : props.defaultImg;

  const { post, browserLang } = props;

  moment.locale(browserLang);
  const articleDate = moment(post.date).format("MMMM Do YYYY");

  const enTitle = post.acf._np_en_article_title;
  const frTitle = post.acf._np_fr_article_title;
  const enExcerpt = post.acf._np_en_article_excerpt;
  const frExcerpt = post.acf._np_fr_article_excerpt;
  const articleTitle = browserLang === "en" ? enTitle : frTitle;
  const articleExcerpt = browserLang === "en" ? enExcerpt : frExcerpt;
  const postLink = props.post.link;

  return (
    <div className="np-recent__article">
      <div className="np-recent__article--image">
        <a href={postLink}>
          <img src={mainImg} alt={articleTitle} />
        </a>
      </div>
      <div className="np-recent__article--title">
        <h2>
          <a href={postLink}>{articleTitle}</a>
        </h2>
        <p>{articleDate}</p>
      </div>
      <div
        className="np-recent__article--excerpt"
        dangerouslySetInnerHTML={{
          __html: articleExcerpt
        }}
      />
      <div className="np-recent__article--link">
        <a href={postLink}>
          {browserLang === "en" ? "Continue Reading" : "Lecture Contiune"}
        </a>
      </div>
    </div>
  );
};
