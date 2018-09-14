import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class ImageLink extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const sectionTL = new TimelineMax();

    const sectionTrigger = document.querySelector(".np-imglink");
    const image = document.querySelector(".np-imglink__image");
    const content = document.querySelector(".np-imglink__content");

    sectionTL
      .fromTo(image, 0.35, { x: -200, autoAlpha: 0 }, { x: 0, autoAlpha: 1 })
      .fromTo(
        content,
        0.35,
        { x: 200, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 },
        "-=0.25"
      );

    const sectionScene = new ScrollMagic.Scene({
      triggerElement: sectionTrigger,
      offset: 0,
      duration: 0,
      triggerHook: 0.5,
      reverse: false
    })
      .addTo(controller)
      //.addIndicators()
      .setTween(sectionTL);
  }

  render() {
    const imgLinkTitleEn = this.props.acf._np_image_link_content_en;
    const imgLinkTitleFr = this.props.acf._np_image_link_content_fr;
    const imgLinkTitle =
      this.props.browserLang === "en" ? imgLinkTitleEn : imgLinkTitleFr;

    const imgLinkBtnTextEn = this.props.acf._np_image_link_btn_text_en;
    const imgLinkBtnTextFr = this.props.acf._np_image_link_btn_text_fr;
    const imgLinkBtnText =
      this.props.browserLang === "en" ? imgLinkBtnTextEn : imgLinkBtnTextFr;

    const imgLinksrcEn = this.props.acf._np_image_link_img_en.sizes.contained;
    const imgLinksrcFr = this.props.acf._np_image_link_img_fr.sizes.contained;
    const imgLinksrc =
      this.props.browserLang === "en" ? imgLinksrcEn : imgLinksrcFr;

    const imgLinkaltEn = this.props.acf._np_image_link_img_en.alt;
    const imgLinkaltFr = this.props.acf._np_image_link_img_fr.alt;
    const imgLinkalt =
      this.props.browserLang === "en" ? imgLinkaltEn : imgLinkaltFr;

    const imgLinkURL = this.props.acf._np_image_link_url;

    return (
      <div className="np-imglink">
        <div className="np-imglink__wrapper">
          <div className="np-imglink__image">
            <img src={imgLinksrc} alt={imgLinkalt} />
          </div>
          <div className="np-imglink__content">
            <div className="np-imglink__title">
              <h2>{imgLinkTitle}</h2>
            </div>
            <div className="np-imglink__link">
              <a href={imgLinkURL}>{imgLinkBtnText}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageLink;
