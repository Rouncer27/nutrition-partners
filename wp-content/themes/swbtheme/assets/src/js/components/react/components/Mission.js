import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class Mission extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const sectionTL = new TimelineMax();

    const sectionTarget = document.querySelector(".np-ourmiss");
    const title = document.querySelector(".np-ourmiss__title");
    const content = document.querySelector(".np-ourmiss__content");

    sectionTL
      .fromTo(title, 0.4, { y: 200, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo(content, 0.4, { y: 200, autoAlpha: 0 }, { y: 0, autoAlpha: 1 });

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
  }
  render() {
    const acf = this.props.pageData.acf;
    const browserLang = this.props.browserLang;
    const enTitle = acf ? acf._np_en_our_mission_title : false;
    const enContent = acf ? acf._np_en_our_mission_content : false;
    const frTitle = acf ? acf._np_fr_our_mission_title : false;
    const frContent = acf ? acf._np_fr_our_mission_content : false;
    const missionTitle = browserLang === "en" ? enTitle : frTitle;
    const missionContent = browserLang === "en" ? enContent : frContent;

    return (
      <div className="np-ourmiss">
        <div className="np-ourmiss__wrapper">
          <div className="np-ourmiss__title">
            <h2>{missionTitle}</h2>
          </div>
          <div
            className="np-ourmiss__content"
            dangerouslySetInnerHTML={{
              __html: missionContent
            }}
          />
        </div>
      </div>
    );
  }
}

export default Mission;
