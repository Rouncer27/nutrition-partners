import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";

class TwoImages extends Component {
  constructor(props) {
    super(props);
    this.getTheContent = this.getTheContent.bind(this);
    this.state = {
      twoImagesLeft: "",
      twoImagesRight: "",
      twoImagesTitleEn: "",
      twoImagesContentEn: "",
      twoImagesTitleFr: "",
      twoImagesContentFr: ""
    };
  }
  componentDidMount() {
    axios
      .get(`${this.props.baseApiUrl}/wp-json/wp/v2/pages/${this.props.pageID}`)
      .then(result => {
        this.getTheContent(result.data);
      });
  }

  getTheContent(data) {
    const twoImagesLeft = data.acf._np_two_images_image_left.sizes.contained
      ? data.acf._np_two_images_image_left.sizes.contained
      : "";
    const twoImagesRight = data.acf._np_two_images_image_right.sizes.contained
      ? data.acf._np_two_images_image_right.sizes.contained
      : "";
    const twoImagesTitleEn = data.acf._np_en_two_images_title
      ? data.acf._np_en_two_images_title
      : "";
    const twoImagesContentEn = data.acf._np_en_two_images_content
      ? data.acf._np_en_two_images_content
      : "";
    const twoImagesTitleFr = data.acf._np_fr_two_images_title
      ? data.acf._np_fr_two_images_title
      : "";
    const twoImagesContentFr = data.acf._np_fr_two_images_content
      ? data.acf._np_fr_two_images_content
      : "";
    this.setState(prevSate => ({
      twoImagesLeft,
      twoImagesRight,
      twoImagesTitleEn,
      twoImagesContentEn,
      twoImagesTitleFr,
      twoImagesContentFr
    }));
  }
  render() {
    return (
      <div className="np-twoimg">
        <div className="np-twoimg__wrapper">
          <div className="np-twoimg__left">
            <img src={this.state.twoImagesLeft} alt="" />
          </div>
          <div className="np-twoimg__right">
            <img src={this.state.twoImagesRight} alt="" />
          </div>
          <div className="np-twoimg__title">
            <h2>
              {this.props.browserLang === "en"
                ? this.state.twoImagesTitleEn
                : this.state.twoImagesTitleFr}
            </h2>
          </div>
          <div
            className="np-twoimg__content"
            dangerouslySetInnerHTML={{
              __html:
                this.props.browserLang === "en"
                  ? this.state.twoImagesContentEn
                  : this.state.twoImagesContentFr
            }}
          />
        </div>
      </div>
    );
  }
}

export default TwoImages;
