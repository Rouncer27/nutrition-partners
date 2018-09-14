import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class RepeatableContent2 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const controller2 = new ScrollMagic.Controller();
    const sectionTL2 = new TimelineMax();

    const sectionTarget2 = document.querySelector(".np-repcont2");
    const repPara2 = [...document.querySelectorAll(".np-repcont2__para")];
    const repImg2 = [...document.querySelectorAll(".np-repcont2__img")];

    sectionTL2
      .add("start")
      .staggerFromTo(
        repPara2,
        0.4,
        { x: -200, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 },
        0.2
      )
      .staggerFromTo(
        repImg2,
        0.4,
        { x: 200, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 },
        0.2,
        "start"
      );

    const sectionScene2 = new ScrollMagic.Scene({
      triggerElement: sectionTarget2,
      offset: 0,
      duration: 0,
      triggerHook: 0.65,
      reverse: false
    })
      .addTo(controller2)
      .addIndicators()
      .setTween(sectionTL2);
  }
  render() {
    const rcParasEn = this.props.acf._np_rc_2_paragraphs_en;
    const rcParasFr = this.props.acf._np_rc_2_paragraphs_fr;
    const rcParas = this.props.browserLang === "en" ? rcParasEn : rcParasFr;

    const rcImgEn = this.props.acf._np_r_c_2_images_en;
    const rcImgFr = this.props.acf._np_rc_2_images_fr;
    const rcImg = this.props.browserLang === "en" ? rcImgEn : rcImgFr;

    return (
      <div className="np-repcont np-repcont2">
        <div className="np-repcont__wrapper">
          <div className="np-repcont__paragraphs">
            {rcParas.map((para, index) => {
              return (
                <div key={index} className="np-repcont__para np-repcont2__para">
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
                <div key={index} className="np-repcont__img np-repcont2__img">
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

export default RepeatableContent2;
