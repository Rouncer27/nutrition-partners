import React, { Component } from "react";

const Article = props => {
  console.log(props);
  const title =
    props.browserLang === "en"
      ? props.acf._np_en_article_title
      : props.acf._np_fr_article_title;
  const author = props.pageData.author;
  const date = props.pageData.date;
  const content =
    props.browserLang === "en"
      ? props.acf._np_en_article_content
      : props.acf._np_fr_article_content;
  return (
    <div className="np-signart">
      <div className="np-signart__wrapper">
        <div className="np-signart__meta">
          <div className="np-signart__meta--title">
            <h1>{title}</h1>
          </div>
          <div className="np-signart__meta--author">
            <p>By {author}, Nutrition Partners Inc.</p>
            <p>{date}</p>
          </div>
          <div className="np-signart__meta--share">
            <p>Share</p>
            <ul>
              <li>Facebook</li>
              <li>Google Plus</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div
          className="np-signart__content swbtheme-wysiwyg"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Article;
