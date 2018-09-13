import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    if (this.props.post.delay !== undefined) {
      setTimeout(() => {
        this.setState(() => {
          return {
            show: true
          };
        });
      }, 350 * this.props.post.delay);
    } else {
      this.setState(() => {
        return {
          show: true
        };
      });
    }
  }

  render() {
    const postTitle =
      this.props.lang === "en"
        ? this.props.post.acf._np_en_article_title
        : this.props.post.acf._np_fr_article_title;

    const postExcerpt =
      this.props.lang === "en"
        ? this.props.post.acf._np_en_article_excerpt
        : this.props.post.acf._np_fr_article_excerpt;

    const mainImg = this.props.post.acf.featured_image
      ? this.props.post.acf.featured_image.sizes.mainblogpage
      : this.props.defaultImg;

    const postLink = this.props.post.link;

    return (
      <div
        className={`np-post${
          this.state.show ? " np-post__show" : " np-post__hide"
        }`}
      >
        <div className="np-post__image">
          <a href={postLink}>
            <img src={mainImg} alt={postTitle} />
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
          <a href={postLink}>
            {this.props.lang === "en" ? "Contiune Reading" : "Lecture Contiune"}
          </a>
        </div>
      </div>
    );
  }
}

export default Post;
