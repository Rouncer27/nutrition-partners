import React, { Component } from "react";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import { TweenMax } from "TweenMax";

class KeyStats extends Component {
  constructor(props) {
    super(props);

    this.countTheStatsUp = this.countTheStatsUp.bind(this);
    this.animateTheTurbine = this.animateTheTurbine.bind(this);
  }

  componentDidMount() {
    const advStats = [
      ...document.querySelectorAll(
        ".np-keystats__stats--advantage .np-keystats__stat"
      )
    ];

    if (advStats instanceof Array && advStats.length > 0) {
      this.countTheStatsUp(advStats);
    }

    const indStats = [
      ...document.querySelectorAll(
        ".np-keystats__stats--industry .np-keystats__stat"
      )
    ];

    if (indStats instanceof Array && indStats.length > 0) {
      this.countTheStatsUp(indStats);
    }

    const oppStats = [
      ...document.querySelectorAll(
        ".np-keystats__stats--opportunity .np-keystats__stat"
      )
    ];

    if (oppStats instanceof Array && oppStats.length > 0) {
      this.countTheStatsUp(oppStats);
    }

    const avdIcon = document.querySelector(
      ".np-keystats__stats--advantage--header svg"
    );

    if (avdIcon !== null) {
      this.animateTheTurbine(avdIcon);
    }
  }

  animateTheTurbine(icon) {
    const firstTurbine = icon.querySelector(".nl-adv-first");
    const secondTurbine = icon.querySelector(".nl-adv-second");
    const thirdTurbine = icon.querySelector(".nl-adv-thrid");

    const thirdArms = thirdTurbine.querySelectorAll(".arm");

    const turbineTLOne = new TimelineMax({ repeat: -1 });
    turbineTLOne.to(firstTurbine, 2, {
      rotation: 360,
      transformOrigin: "41.5% 41.5%",
      ease: Power0.easeNone
    });

    const turbineTLTwo = new TimelineMax({ repeat: -1 });
    turbineTLTwo.to(secondTurbine, 1.25, {
      rotation: 360,
      transformOrigin: "50% 67.5%",
      ease: Power0.easeNone
    });

    const turbineTLThree = new TimelineMax({ repeat: -1 });
    turbineTLThree.to(thirdTurbine, 3, {
      rotation: 360,
      transformOrigin: "58% 42%",
      ease: Power0.easeNone
    });
  }

  countTheStatsUp(statArray) {
    statArray.forEach(stat => {
      const statTL = new TimelineMax();
      const statCon = new ScrollMagic.Controller();
      const statFinal = parseInt(
        stat.querySelector(".np-keystats__stat--number p").innerText,
        10
      );
      //const statPlusSign = stat.querySelector('.special-stat-plus');
      const statNum = stat.querySelector(".np-keystats__stat--number p");
      const statStart = { score: 0 };

      const countNumbersUp = (statStart, statFinal) => {
        statNum.innerHTML = statStart.score;
        //hideThePlusSign();

        const statTween = TweenLite.to(statStart, 1.75, {
          score: `+=${statFinal}`,
          roundProps: "score",
          onUpdate: updateHandler,
          ease: Power4.easeOut
          //onComplete: addThePlus
        });

        const statScene = new ScrollMagic.Scene({
          triggerElement: stat,
          offset: 0,
          duration: 0,
          triggerHook: 0.67,
          reverse: false
        })
          .addTo(statCon)
          .setTween(statTween);
      };

      const updateHandler = () => {
        statNum.innerHTML = statStart.score;
      };
      countNumbersUp(statStart, statFinal);
    });
  }

  render() {
    const keyAdvEn = this.props.acf._np_key_advantage_en
      ? this.props.acf._np_key_advantage_en
      : [];
    const keyInduEn = this.props.acf._np_key_industry_en
      ? this.props.acf._np_key_industry_en
      : [];
    const keyOppEn = this.props.acf._np_key_opportunity_en
      ? this.props.acf._np_key_opportunity_en
      : [];

    const keyAdvFn = this.props.acf._np_key_advantage_fr
      ? this.props.acf._np_key_advantage_fr
      : [];
    const keyInduFn = this.props.acf._np_key_industry_fr
      ? this.props.acf._np_key_industry_fr
      : [];
    const keyOppFn = this.props.acf._np_key_opportunity_fr
      ? this.props.acf._np_key_opportunity_fr
      : [];

    const keyAdvantage = this.props.browserLang === "en" ? keyAdvEn : keyAdvFn;
    const keyIndustry = this.props.browserLang === "en" ? keyInduEn : keyInduFn;
    const keyOpportunity =
      this.props.browserLang === "en" ? keyOppEn : keyOppFn;

    return (
      <div className="np-keystats">
        <div className="np-keystats__wrapper">
          <div className="np-keystats__title">
            <h2>Key Stats</h2>
          </div>
          <div className="np-keystats__stats">
            <div className="np-keystats__stats--advantage">
              <div className="np-keystats__stats--advantage--header">
                <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 250 250">
                  <defs />
                  <polygon
                    className="cls-1"
                    points="119.19 202.3 124.75 202.3 122.85 109.66 120.99 109.66 119.19 202.3"
                  />
                  <path
                    className="cls-1"
                    d="M118.74,107A3.23,3.23,0,1,1,122,110.2,3.22,3.22,0,0,1,118.74,107Z"
                  />
                  <g className="nl-adv-second">
                    <polygon
                      className="cls-1"
                      points="123.5 80.93 122.8 103.84 121.96 103.74 121.15 103.84 120.44 80.93 121.96 58.13 123.5 80.93"
                    />
                    <polygon
                      className="cls-1"
                      points="98.66 118.66 118.85 107.81 119.17 108.58 119.67 109.24 100.18 121.3 79.68 131.38 98.66 118.66"
                    />
                    <polygon
                      className="cls-1"
                      points="143.75 121.31 124.26 109.24 124.76 108.57 125.08 107.81 145.27 118.66 164.25 131.37 143.75 121.31"
                    />
                  </g>
                  <polygon
                    className="cls-1"
                    points="178.3 202.3 183.86 202.3 181.97 109.66 180.1 109.66 178.3 202.3"
                  />
                  <path
                    className="cls-1"
                    d="M178.82,107.43a3.24,3.24,0,1,1,0,4.57A3.23,3.23,0,0,1,178.82,107.43Z"
                  />
                  <g className="nl-adv-thrid">
                    <polygon
                      className="cls-1 arm arm-1"
                      points="200.6 92.38 183.9 108.09 183.39 107.43 182.73 106.92 198.44 90.23 215.63 75.18 200.6 92.38"
                    />
                    <polygon
                      className="cls-1 arm arm-2"
                      points="156.35 101.5 178.3 108.1 177.99 108.88 177.88 109.7 155.56 104.44 133.94 97.08 156.35 101.5"
                    />
                    <polygon
                      className="cls-1 arm arm-3"
                      points="186.37 135.26 181.12 112.94 181.95 112.83 182.71 112.52 189.32 134.47 193.75 156.88 186.37 135.26"
                    />
                  </g>
                  <polygon
                    className="cls-1"
                    points="62.2 202.3 67.76 202.3 65.87 109.66 63.99 109.66 62.2 202.3"
                  />
                  <path
                    className="cls-1"
                    d="M62.37,112.34a3.23,3.23,0,1,1,4.58,0A3.24,3.24,0,0,1,62.37,112.34Z"
                  />
                  <g className="nl-adv-first">
                    <polygon
                      className="cls-1"
                      points="47.39 90.53 63.05 107.27 62.39 107.77 61.88 108.43 45.22 92.68 30.22 75.45 47.39 90.53"
                    />
                    <polygon
                      className="cls-1"
                      points="56.39 134.8 63.05 112.86 63.82 113.18 64.65 113.29 59.33 135.59 51.91 157.19 56.39 134.8"
                    />
                    <polygon
                      className="cls-1"
                      points="90.23 104.86 67.9 110.06 67.79 109.23 67.47 108.47 89.44 101.92 111.86 97.54 90.23 104.86"
                    />
                  </g>
                  <rect
                    className="cls-1"
                    x="35.68"
                    y="202.65"
                    width="178.63"
                    height="4.35"
                    rx="2.17"
                    ry="2.17"
                  />
                </svg>
              </div>
              {keyAdvantage.map((stat, index) => {
                return (
                  <div className="np-keystats__stat" key={index}>
                    <div className="np-keystats__stat--number">
                      <p>{stat.stat_number}</p>
                    </div>
                    <div className="np-keystats__stat--description">
                      <p>{stat.stat_description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="np-keystats__stats--industry">
              <div className="np-keystats__stats--industry--header" />
              {keyIndustry.map((stat, index) => {
                return (
                  <div className="np-keystats__stat" key={index}>
                    <div className="np-keystats__stat--number">
                      <p>{stat.stat_number}</p>
                    </div>
                    <div className="np-keystats__stat--description">
                      <p>{stat.stat_description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="np-keystats__stats--opportunity">
              <div className="np-keystats__stats--opportunity--header" />
              {keyOpportunity.map((stat, index) => {
                return (
                  <div className="np-keystats__stat" key={index}>
                    <div className="np-keystats__stat--number">
                      <p>{stat.stat_number}</p>
                    </div>
                    <div className="np-keystats__stat--description">
                      <p>{stat.stat_description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyStats;
