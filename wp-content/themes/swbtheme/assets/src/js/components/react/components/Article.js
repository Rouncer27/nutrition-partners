import React, { Component } from "react";
import moment from "moment";

const Article = props => {
  console.log(props.categories);
  const title =
    props.browserLang === "en"
      ? props.acf._np_en_article_title
      : props.acf._np_fr_article_title;
  const author = props.pageData.author;
  const date = moment(props.pageData.date).format("LL");
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
            {props.categories.length > 0 && (
              <p>
                Filed under:{" "}
                {props.categories.map((cat, index) => {
                  return (
                    <span key={index}>
                      <a href={cat.link}>{cat.name}</a>
                      {", "}
                    </span>
                  );
                })}
              </p>
            )}
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
