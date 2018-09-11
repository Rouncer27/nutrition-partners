import React, { Component } from "react";
import moment from "moment";

const Article = props => {
  console.log(props.pageData);
  const title =
    props.browserLang === "en"
      ? props.acf._np_en_article_title
      : props.acf._np_fr_article_title;
  const author = props.pageData.author;
  const date = moment(props.pageData.date).format("LL");
  const link = props.pageData.link;
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
            <div className="socialmedia share-buttons">
              <p>Share</p>
              <ul className="socialmedia__menu socialmedia__menu--single">
                <li className="socialmedia__menu--twitter">
                  <a
                    target="_blank"
                    title="Share on Twitter"
                    href={`http://twitter.com/intent/tweet?status=${title} ${link}`}
                    onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                  />
                </li>
                <li className="socialmedia__menu--googleplus">
                  <a
                    target="_blank"
                    title="Share on Google+"
                    href="https://plus.google.com/share?url=<?php the_permalink(); ?>"
                    onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                  />
                </li>
                <li className="socialmedia__menu--facebook">
                  <a
                    target="_blank"
                    title="Share on facebook"
                    href="http://www.facebook.com/share.php?u=<?php the_permalink(); ?>&title=<?php the_title(); ?>"
                    onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                  />
                </li>
                <li className="socialmedia__menu--linkedin">
                  <a
                    target="_blank"
                    title="Share on linkedin"
                    href="http://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>"
                    onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                  />
                </li>
              </ul>
            </div>
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
