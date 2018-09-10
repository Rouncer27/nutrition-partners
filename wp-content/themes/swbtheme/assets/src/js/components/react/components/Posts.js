import React from "react";

import Post from "./Post";

const Posts = props => {
  const posts = props.postsData;
  const lang = props.browserLang;
  return (
    <div className="np-blogposts">
      <div className="np-blogposts__wrapper">
        <div className="np-blogposts__articles">
          {posts.map(post => {
            return <Post key={post.id} post={post} lang={lang} />;
          })}
        </div>
        <div className="np-blogposts__sidebar">
          <h3>Sidebar</h3>
        </div>
      </div>
    </div>
  );
};

export default Posts;
