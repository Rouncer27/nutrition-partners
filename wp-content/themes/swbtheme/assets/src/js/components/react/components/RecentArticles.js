import React from "react";
import Article from "./recentArticles/Article";

const RecentArticles = props => {
  const acf = props.pageData.acf;
  const browserLang = props.browserLang;

  return (
    <div className="np-recent">
      <div className="np-recent__wrapper">
        <div className="np-recent__title">
          <h2>Recent Articles</h2>
        </div>
        <div className="np-recent__articles">
          {props.postsData.length > 0 &&
            props.postsData.map((post, index) => {
              return (
                <Article key={post.id} post={post} browserLang={browserLang} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RecentArticles;
