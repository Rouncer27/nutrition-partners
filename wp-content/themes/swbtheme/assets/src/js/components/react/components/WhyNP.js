import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class WhyNP extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const whyTrigger = document.querySelector(".np-whynp");
    const whyTitle = document.querySelector(".np-whynp__title");
    const whyImgTop = document.querySelector(".np-whynp__imgtopl");
    const whyImgMid = document.querySelector(".np-whynp__imgmidl");
    const whyIntro = document.querySelector(".np-whynp__intro");
    const whyItems = [...document.querySelectorAll(".np-whynp__list--item")];

    const controller = new ScrollMagic.Controller();
    const whyTL = new TimelineMax();

    whyTL
      .fromTo(whyTitle, 0.25, { y: 200, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .staggerFromTo(
        [whyImgTop, whyImgMid],
        0.5,
        { x: -200, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 },
        0.15
      )
      .fromTo(
        whyIntro,
        0.5,
        { x: -200, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 },
        "-=0.4"
      )
      .staggerFromTo(
        whyItems,
        0.5,
        { x: 200, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 },
        0.15
      );

    const whyScene = new ScrollMagic.Scene({
      triggerElement: whyTrigger,
      offset: 0,
      duration: 0,
      triggerHook: 0.6,
      reverse: false
    })
      .addTo(controller)
      // .addIndicators()
      .setTween(whyTL);

    const controller2 = new ScrollMagic.Controller();
    const whyTL2 = new TimelineMax();
    const whyCon = document.querySelector(".np-whynp__conc");
    const whyImgBot = document.querySelector(".np-whynp__btn");

    whyTL2
      .fromTo(whyCon, 0.4, { y: -200, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo(
        whyImgBot,
        0.4,
        { y: -200, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 }
      );

    const whyScene2 = new ScrollMagic.Scene({
      triggerElement: whyTrigger,
      offset: 0,
      duration: 0,
      triggerHook: 0,
      reverse: false
    })
      .addTo(controller2)
      // .addIndicators()
      .setTween(whyTL2);
  }

  render() {
    const wnpTitleEn = this.props.acf._np_wnp_title_en;
    const wnpTitleFr = this.props.acf._np_wnp_title_fr;
    const wnpTitle = this.props.browserLang === "en" ? wnpTitleEn : wnpTitleFr;

    const wnpIntroEn = this.props.acf._np_wnp_intro_en;
    const wnpIntroFr = this.props.acf._np_wnp_intro_fr;
    const wnpIntro = this.props.browserLang === "en" ? wnpIntroEn : wnpIntroFr;

    const wnpListEn = this.props.acf._np_wnp_list_en;
    const wnpListFr = this.props.acf._np_wnp_list_fr;
    const wnpItems = this.props.browserLang === "en" ? wnpListEn : wnpListFr;

    const wnpConcEn = this.props.acf._np_wnp_conclusion_en;
    const wnpConcFr = this.props.acf._np_wnp_conclusion_fr;
    const wnpConc = this.props.browserLang === "en" ? wnpConcEn : wnpConcFr;

    const wnpTopLeftSRC = this.props.acf._np_wnp_top_left.sizes.contained;
    const wnpMidLeftSRC = this.props.acf._np_wnp_mid_left.sizes.contained;
    const wnpBottomSRC = this.props.acf._np_wnp_bottom_right.sizes.contained;

    return (
      <div className="np-whynp">
        <div className="np-whynp__wrapper">
          <div className="np-whynp__left">
            <div className="np-whynp__title">
              <h2>{wnpTitle}</h2>
            </div>
            <div className="np-whynp__imgtopl">
              <img src={wnpTopLeftSRC} alt="" />
            </div>
            <div className="np-whynp__imgmidl">
              <img src={wnpMidLeftSRC} alt="" />
            </div>
          </div>

          <div className="np-whynp__right">
            <div
              className="np-whynp__intro"
              dangerouslySetInnerHTML={{ __html: wnpIntro }}
            />
            <div className="np-whynp__list">
              <ul className="np-whynp__list--items">
                {wnpItems.map((item, index) => {
                  return (
                    <li className="np-whynp__list--item" key={index}>
                      {item.bullet}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className="np-whynp__conc"
              dangerouslySetInnerHTML={{ __html: wnpConc }}
            />
            <div className="np-whynp__btn">
              <img src={wnpBottomSRC} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyNP;
