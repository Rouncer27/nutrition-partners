import React from "react";

const Post = props => {
  const postTitle =
    props.lang === "en"
      ? props.post.acf._np_en_article_title
      : props.post.acf._np_fr_article_title;

  const postExcerpt =
    props.lang === "en"
      ? props.post.acf._np_en_article_excerpt
      : props.post.acf._np_fr_article_excerpt;

  const postImgSrc = props.post._embedded["wp:featuredmedia"]
    ? props.post._embedded["wp:featuredmedia"][0].media_details.sizes
        .halfsquarecropped.source_url
    : props.defaultImg;

  const postLink = props.post.link;
  return (
    <div className="np-post">
      <div className="np-post__image">
        <a href={postLink}>
          <img src={postImgSrc} alt={postTitle} />
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
        <a href={postLink}>Contiune Reading</a>
      </div>
    </div>
  );
};

export default Post;
