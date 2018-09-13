import React from "react";
import Post from "./Post";
import PostSidebar from "./PostSidebar";
import { CSSTransition } from "react-transition-group";

import posed, { PoseGroup } from "react-pose";

const Posts = props => {
  const posts = props.postsData;
  let delayCounter = 0;
  const lang = props.browserLang;
  const defaultImg = props.siteOptions._np_default_post_image
    ? props.siteOptions._np_default_post_image.sizes.mainblogpage
    : false;

  let loadMoreText = "";
  const loadMoreBtnTextLangActive =
    lang === "en" ? "Load More Posts" : "Charger plus de messages";
  const loadMoreBtnTextLangDisabled =
    lang === "en" ? "No More Posts" : "Plus de messages";
  const loadMoreBtnTextLangLoading =
    lang === "en" ? "Loading Posts" : "Chargement des messages";

  if (props.postsLoading) {
    loadMoreText = loadMoreBtnTextLangLoading;
  } else {
    loadMoreText = props.loadMoreBtn
      ? loadMoreBtnTextLangActive
      : loadMoreBtnTextLangDisabled;
  }

  const Item = posed.div({
    enter: { y: "-5rem", opacity: 1, transition: { duration: 2500 } },
    exit: { y: 0, opacity: 0, transition: { duration: 2500 } }
  });

  return (
    <div className="np-blogposts">
      <div className="np-blogposts__wrapper">
        <div className="np-blogposts__articles">
          {posts.map((post, index) => {
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
        <PostSidebar
          posts={props.newsletters}
          lang={lang}
          defaultImg={defaultImg}
        />

        <div className="np-blogposts__loadmore">
          <button onClick={props.loadMore} disabled={!props.loadMoreBtn}>
            {loadMoreText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
