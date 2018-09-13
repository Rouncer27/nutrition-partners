import React from "react";
import Post from "./Post";

const PostSidebar = props => {
  return (
    <div className="np-blogposts__sidebar">
      <div className="np-blogposts__sidebar--title">
        <h3>Newsletters</h3>
      </div>
      {props.posts.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            lang={props.lang}
            defaultImg={props.defaultImg}
          />
        );
      })}
      <div className="np-blogposts__sidebar--background" />
      <div className="np-blogposts__sidebar--signup">
        <p>Join our newsletter</p>
        <button>Sign-up</button>
      </div>
    </div>
  );
};

export default PostSidebar;
