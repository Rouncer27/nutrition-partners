import React from "react";

import Post from "./Post";

const Posts = props => {
  const posts = props.postsData;
  const lang = props.browserLang;
  const defaultImg = props.siteOptions._np_default_post_image
    ? props.siteOptions._np_default_post_image.sizes.halfsquarecropped
    : false;
  return (
    <div className="np-blogposts">
      <div className="np-blogposts__wrapper">
        <div className="np-blogposts__articles">
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
                lang={lang}
                defaultImg={defaultImg}
              />
            );
          })}
        </div>
        <div className="np-blogposts__sidebar">
          <h3>Sidebar</h3>
          <div className="np-blogposts__sidebar--background" />
        </div>
        <div className="np-blogposts__loadmore">
          <button onClick={props.loadMore} disabled={!props.loadMoreBtn}>
            More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
