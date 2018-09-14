import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class TwoImages extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const sectionTL = new TimelineMax();

    const sectionTarget = document.querySelector(".np-twoimg");
    const imgleft = document.querySelector(".np-twoimg__left");
    const imgright = document.querySelector(".np-twoimg__right");

    sectionTL
      .fromTo(imgleft, 0.4, { x: -200, autoAlpha: 0 }, { x: 0, autoAlpha: 1 })
      .fromTo(imgright, 0.4, { x: 200, autoAlpha: 0 }, { x: 0, autoAlpha: 1 });

    const sectionScene = new ScrollMagic.Scene({
      triggerElement: sectionTarget,
      offset: 0,
      duration: 0,
      triggerHook: 0.65,
      reverse: false
    })
      .addTo(controller)
      //.addIndicators()
      .setTween(sectionTL);

    // ------------------------ //

    const controller2 = new ScrollMagic.Controller();
    const sectionTL2 = new TimelineMax();

    const title = document.querySelector(".np-twoimg__title");
    const content = document.querySelector(".np-twoimg__content");

    sectionTL2
      .fromTo(title, 0.4, { y: 200, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo(content, 0.4, { y: 200, autoAlpha: 0 }, { y: 0, autoAlpha: 1 });

    const sectionScene2 = new ScrollMagic.Scene({
      triggerElement: sectionTarget,
      offset: 0,
      duration: 0,
      triggerHook: 0.25,
      reverse: false
    })
      .addTo(controller2)
      //.addIndicators()
      .setTween(sectionTL2);
  }
  render() {
    const acf = this.props.pageData.acf;
    const browserLang = this.props.browserLang;

    const twoImagesLeft =
      acf && acf._np_two_images_image_left.sizes.contained
        ? acf._np_two_images_image_left.sizes.contained
        : "";
    const twoImagesRight =
      acf && acf._np_two_images_image_right.sizes.contained
        ? acf._np_two_images_image_right.sizes.contained
        : "";
    const enTitle = acf ? acf._np_en_two_images_title : false;
    const enContent = acf ? acf._np_en_two_images_content : false;
    const frTitle = acf ? acf._np_fr_two_images_title : false;
    const frContent = acf ? acf._np_fr_two_images_content : false;

    const twoImageTitle = browserLang === "en" ? enTitle : frTitle;
    const twoImageContent = browserLang === "en" ? enContent : frContent;

    return (
      <div className="np-twoimg">
        <div className="np-twoimg__wrapper">
          <div className="np-twoimg__leftwrap">
            <div className="np-twoimg__left">
              <img src={twoImagesLeft} alt="" />
            </div>
            <div className="np-twoimg__title">
              <h2>{twoImageTitle}</h2>
            </div>
          </div>

          <div className="np-twoimg__rightwrap">
            <div className="np-twoimg__right">
              <img src={twoImagesRight} alt="" />
            </div>
            <div
              className="np-twoimg__content"
              dangerouslySetInnerHTML={{
                __html: twoImageContent
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TwoImages;
