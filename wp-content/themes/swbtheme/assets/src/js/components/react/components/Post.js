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

  const postImgSrc =
    props.post._embedded["wp:featuredmedia"][0].media_details.sizes.full
      .source_url;
  const postLink = props.post.link;
  return (
    <div>
      <div>
        <a href={postLink}>
          <img src={postImgSrc} alt={postTitle} />
        </a>
      </div>
      <div>
        <h2>
          <a href={postLink}>{postTitle}</a>
        </h2>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postExcerpt }} />
      <div>
        <a href={postLink}>Contiune Reading</a>
      </div>
    </div>
  );
};

export default Post;
