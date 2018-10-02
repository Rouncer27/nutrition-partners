import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class ThreeColumns extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const sectionTL = new TimelineMax();
    const sectionTarget = document.querySelector(".np-columns");
    const sectionColumn = [
      ...sectionTarget.querySelectorAll(".np-columns__column")
    ];

    sectionTL.staggerFromTo(
      sectionColumn,
      0.4,
      { y: 100, autoAlpha: 0 },
      { y: 0, autoAlpha: 1 },
      0.2
    );

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
    const columnsTitleEn = this.props.acf._np_3_columns_main_title_en;
    const columnsTitleFr = this.props.acf._np_3_columns_main_title_fr;
    const columnsTitle =
      this.props.browserLang === "en" ? columnsTitleEn : columnsTitleFr;

    const columnsPoultryEn = this.props.acf._np_poultry_content_en;
    const columnsPoultryFr = this.props.acf._np_poultry_content_fr;
    const columnsPoultry =
      this.props.browserLang === "en" ? columnsPoultryEn : columnsPoultryFr;

    const columnsSwineEn = this.props.acf._np_swine_content_en;
    const columnsSwineFr = this.props.acf._np_swine_content_fr;
    const columnsSwine =
      this.props.browserLang === "en" ? columnsSwineEn : columnsSwineFr;

    const columnsDairyEn = this.props.acf._np_dairy_content_en;
    const columnsDairyFr = this.props.acf._np_dairy_content_fr;
    const columnsDairy =
      this.props.browserLang === "en" ? columnsDairyEn : columnsDairyFr;

    const poultryTitle =
      this.props.browserLang === "en" ? "Poultry" : "La Volaille";
    const swineTitle = this.props.browserLang === "en" ? "Swine" : "Porc";
    const dairyTitle = this.props.browserLang === "en" ? "Dairy" : "Laitier";

    return (
      <div className="np-columns">
        <div className="np-columns__wrapper">
          <div className="np-columns__title">
            <h2>{columnsTitle}</h2>
          </div>
          <div className="np-columns__column np-columns__poultry">
            <h3>{poultryTitle}</h3>
            <i />
            <p>{columnsPoultry}</p>
          </div>
          <div className="np-columns__column np-columns__swine">
            <h3>{swineTitle}</h3>
            <i />
            <p>{columnsSwine}</p>
          </div>
          <div className="np-columns__column np-columns__dairy">
            <h3>{dairyTitle}</h3>
            <i />
            <p>{columnsDairy}</p>
          </div>
        </div>
        <div className="np-columns__feed" />
      </div>
    );
  }
}

export default ThreeColumns;
