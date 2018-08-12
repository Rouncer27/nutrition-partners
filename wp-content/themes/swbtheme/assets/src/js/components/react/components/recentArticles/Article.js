import React from "react";
import moment from "moment";

export default props => {
  const { post, browserLang } = props;

  moment.locale(browserLang);
  const articleDate = moment(post.date).format("MMMM Do YYYY");
  const featuredImage =
    post._embedded["wp:featuredmedia"][0].media_details.sizes.halfsquarecropped
      .source_url;

  const enTitle = post.acf._np_en_article_title;
  const frTitle = post.acf._np_fr_article_title;
  const enExcerpt = post.acf._np_en_article_excerpt;
  const frExcerpt = post.acf._np_fr_article_excerpt;
  const articleTitle = browserLang === "en" ? enTitle : frTitle;
  const articleExcerpt = browserLang === "en" ? enExcerpt : frExcerpt;
  return (
    <div className="np-recent__article">
      <div className="np-recent__article--image">
        <img src={featuredImage} alt={articleTitle} />
      </div>
      <div className="np-recent__article--title">
        <h2>{articleTitle}</h2>
        <p>{articleDate}</p>
      </div>
      <div
        className="np-recent__article--excerpt"
        dangerouslySetInnerHTML={{
          __html: articleExcerpt
        }}
      />
    </div>
  );
};
