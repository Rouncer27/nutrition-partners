import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class RepeatableContent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const sectionTL = new TimelineMax();

    const sectionTarget = document.querySelector(".np-repcont1");
    const repPara = [...document.querySelectorAll(".np-repcont1__para")];
    const repImg = [...document.querySelectorAll(".np-repcont1__img")];

    sectionTL
      .add("start")
      .staggerFromTo(
        repPara,
        0.4,
        { x: -200, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 },
        0.2
      )
      .staggerFromTo(
        repImg,
        0.4,
        { x: 200, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 },
        0.2,
        "start"
      );

    const sectionScene = new ScrollMagic.Scene({
      triggerElement: sectionTarget,
      offset: 0,
      duration: 0,
      triggerHook: 0.65,
      reverse: false
    })
      .addTo(controller)
      .addIndicators()
      .setTween(sectionTL);
  }
  render() {
    const rcParasEn = this.props.acf._np_rc_paragraphs_en;
    const rcParasFr = this.props.acf._np_rc_paragraphs_fr;
    const rcParas = this.props.browserLang === "en" ? rcParasEn : rcParasFr;

    const rcImgEn = this.props.acf._np_r_c_images_en;
    const rcImgFr = this.props.acf._np_rc_images_fr;
    const rcImg = this.props.browserLang === "en" ? rcImgEn : rcImgFr;

    return (
      <div className="np-repcont np-repcont1">
        <div className="np-repcont__wrapper">
          <div className="np-repcont__paragraphs">
            {rcParas.map((para, index) => {
              return (
                <div key={index} className="np-repcont__para np-repcont1__para">
                  <div className="np-repcont__para--title">
                    <h2>{para.title}</h2>
                  </div>
                  <div
                    className="np-repcont__para--content"
                    dangerouslySetInnerHTML={{ __html: para.content }}
                  />
                </div>
              );
            })}
          </div>
          <div className="np-repcont__images">
            {rcImg.map((img, index) => {
              const rcImgSRCEn = img.image.sizes.contained;
              const rcImgSRCFr = img.image.sizes.contained;
              const rcImgSRC =
                this.props.browserLang === "en" ? rcImgSRCEn : rcImgSRCFr;

              const rcImgALTEn = img.image.alt;
              const rcImgALTFr = img.image.alt;
              const rcImgALT =
                this.props.browserLang === "en" ? rcImgALTEn : rcImgALTFr;

              return (
                <div key={index} className="np-repcont__img np-repcont1__img">
                  <img src={rcImgSRC} alt={rcImgALT} />
                </div>
              );
            })}
            <div className="np-repcont__images--background" />
          </div>
        </div>
      </div>
    );
  }
}

export default RepeatableContent;
