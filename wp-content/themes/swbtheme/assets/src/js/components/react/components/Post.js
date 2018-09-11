import React from "react";

const Post = props => {
  console.log(props);
  const postTitle =
    props.lang === "en"
      ? props.post.acf._np_en_article_title
      : props.post.acf._np_fr_article_title;

  const postExcerpt =
    props.lang === "en"
      ? props.post.acf._np_en_article_excerpt
      : props.post.acf._np_fr_article_excerpt;

  const mainImg = props.post.acf.featured_image
    ? props.post.acf.featured_image.sizes.mainblogpage
    : props.defaultImg;

  const postLink = props.post.link;

  return (
    <div className="np-post">
      <div className="np-post__image">
        <a href={postLink}>
          <img src={mainImg} alt={postTitle} />
        </a>
      </div>
      <div className="np-post__title">
        <h2>
          <a href={postLink}>{postTitle}</a>
        </h2>
      </div>
      <div
        className="np-post__excerpt"
        dangerouslySetInnerHTML={{ __html: postExcerpt }}
      />
      <div className="np-post__link">
        <a href={postLink}>
          {props.lang === "en" ? "Contiune Reading" : "Lecture Contiune"}
        </a>
      </div>
    </div>
  );
};

export default Post;
