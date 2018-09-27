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
    this.animateTheHand = this.animateTheHand.bind(this);
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

    const indIcon = document.querySelector(
      ".np-keystats__stats--industry--header svg"
    );

    if (indIcon !== null) {
      this.animateTheHand(indIcon);
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

  animateTheHand(icon) {
    const handSeeds = [...icon.querySelectorAll(".np-hand-seeds path")];
    const seedTL = new TimelineMax();
    const seedCon = new ScrollMagic.Controller();

    seedTL.staggerFromTo(
      handSeeds,
      0.25,
      { y: -30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1 },
      0.15
    );

    const seedScene = new ScrollMagic.Scene({
      triggerElement: icon,
      offset: 0,
      duration: 0,
      triggerHook: 0.5,
      reverse: false
    })
      .addTo(seedCon)
      //.addIndicators()
      .setTween(seedTL);
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
              <div className="np-keystats__stats--industry--header">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250 250"
                >
                  <defs />
                  <path
                    className="cls-1"
                    d="M173,119.64h-9.55v-3.91H173c2.05,0,2.22-1,2.22-2.06v-4.52a2,2,0,0,0-1.95-2H131.1v-3.91h42.21a5.87,5.87,0,0,1,5.86,5.87v4.52C179.17,117.35,176.82,119.64,173,119.64Z"
                  />
                  <path
                    className="cls-1"
                    d="M100.16,132.18a23.62,23.62,0,0,1-23.59-23.54l0-13.7A23.54,23.54,0,0,1,89,74.09l32.25-17.21a6.8,6.8,0,0,1,9.21,2.83l2,3.89a6.78,6.78,0,0,1-2.28,8.82l-9.33,6.15h51.51c2.79,0,6.72,2,6.72,6.37v3.55a6.24,6.24,0,0,1-6.23,6.24h-2V90.82h2a2.32,2.32,0,0,0,2.32-2.33V84.94c0-2.35-2.79-2.46-2.81-2.46H107.89L128.1,69.16a2.87,2.87,0,0,0,1-3.74l-2-3.89a2.94,2.94,0,0,0-1.71-1.42,2.9,2.9,0,0,0-2.2.21L90.87,77.54A19.63,19.63,0,0,0,80.46,94.93l0,13.7a19.71,19.71,0,0,0,19.68,19.64h0l66.92-.06s2.48-.3,2.48-2.46V121.6a1.95,1.95,0,0,0-1.95-2l-36.53,0v-3.91l36.53,0a5.87,5.87,0,0,1,5.87,5.87v4.15c0,4.5-4.16,6.37-6.39,6.37l-66.91.06Z"
                  />
                  <path
                    className="cls-1"
                    d="M178.91,107.19h-8.1v-3.91h8.1c1.47,0,2.22-.38,2.22-2.45V97.19c0-2.14-1.39-2.46-2.22-2.46H131.09V90.82h47.82A6,6,0,0,1,185,97.19v3.64C185,104.81,182.75,107.19,178.91,107.19Z"
                  />
                  <g className="np-hand-seeds">
                    <path
                      className="cls-1"
                      d="M119.76,119.88l-1.42-.06c-.27,0-6.86-.34-9.71-4.65s-.58-10.5-.48-10.76l.49-1.33,1.42.06c.28,0,6.86.34,9.71,4.65s.59,10.5.49,10.76Zm-8.37-12.64c-.36,1.7-.57,4.16.5,5.77s3.41,2.38,5.12,2.71c.37-1.7.57-4.16-.49-5.77S113,107.54,111.39,107.24Z"
                    />
                    <path
                      className="cls-1"
                      d="M131.1,151.9l-.63-1.28c-.12-.25-3-6.18-.58-10.75s8.94-5.54,9.22-5.58l1.4-.2.62,1.27c.13.25,3,6.19.58,10.75s-8.93,5.55-9.21,5.59Zm7.07-13.4c-1.66.49-3.92,1.49-4.82,3.2s-.46,4.13.08,5.79c1.66-.49,3.93-1.5,4.83-3.2S138.67,140,138.17,138.5Z"
                    />
                    <path
                      className="cls-1"
                      d="M115.25,162l-1.22-.71c-.25-.14-5.94-3.47-6.48-8.61s4.34-9.58,4.54-9.77l1.06-.94,1.23.7c.24.14,5.93,3.48,6.47,8.61s-4.33,9.59-4.54,9.77Zm-1.58-15.07c-1.11,1.33-2.43,3.43-2.23,5.34s1.93,3.7,3.29,4.77c1.11-1.33,2.43-3.43,2.23-5.35S114.93,147.89,113.67,146.9Z"
                    />

                    <path
                      className="cls-1"
                      d="M134.08,179.9c-2.29,0-5.57-.44-7.83-2.61-3.73-3.58-2.87-10.12-2.83-10.4l.2-1.4,1.39-.25c.28-.05,6.77-1.17,10.5,2.41s2.86,10.12,2.82,10.39l-.19,1.41-1.4.25A16.24,16.24,0,0,1,134.08,179.9Zm-6.87-11c0,1.73.35,4.18,1.74,5.52s3.86,1.58,5.59,1.52c0-1.73-.35-4.18-1.74-5.52S129,168.89,127.21,169Z"
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
              <div className="np-keystats__stats--opportunity--header">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250 250"
                >
                  <defs />
                  <rect
                    className="cls-1"
                    x="54.62"
                    y="103.06"
                    width="4.6"
                    height="99.93"
                  />
                  <path
                    className="cls-1"
                    d="M62.26,129H52a6.59,6.59,0,0,1-6.57-6.6V103.06H50v19.29a2,2,0,0,0,2,2H62.26a2,2,0,0,0,2-2V103.06h4.6v19.29A6.59,6.59,0,0,1,62.26,129Z"
                  />
                  <polygon
                    className="cls-1"
                    points="118.77 192.74 104.86 192.74 104.86 188.14 115.42 188.14 124.77 159.05 123.26 159.05 107.25 185.54 103.31 183.16 120.66 154.45 131.09 154.45 118.77 192.74"
                  />
                  <polygon
                    className="cls-1"
                    points="106.72 172.63 103 169.91 110.92 159.05 108.92 159.05 108.92 154.45 119.98 154.45 106.72 172.63"
                  />
                  <path
                    className="cls-1"
                    d="M175.82,192.74h-21l-12.38-38.29h10.31Zm-17.63-4.6h9.49l-17.51-29.09h-1.38Z"
                  />
                  <path
                    className="cls-1"
                    d="M204.67,192.74H182.22l-28.64-38.29h12.35Zm-20.15-4.6h8.95L164,159.05h-1.27Z"
                  />
                  <path
                    className="cls-1"
                    d="M147.14,192.74H126.42l5-38.29h10.77Zm-15.48-4.6h10.25l-3.76-29.09h-2.69Z"
                  />
                  <path
                    className="cls-1"
                    d="M160.92,97.4a7.49,7.49,0,0,1-6.39-3.63,8.93,8.93,0,0,1-1.32-4.67,9.57,9.57,0,0,1,2.95-7,10.46,10.46,0,0,1,6.49-2.76c1.21-4.4,5-10.39,13.25-10.39,7.53,0,13.65,5.67,13.65,12.65a10.52,10.52,0,0,1-.06,1.09,12.63,12.63,0,0,1,3.28.61,8.68,8.68,0,0,1,5.77,7.91,6.58,6.58,0,0,1-.31,2.12,6.2,6.2,0,0,1-6,4.11Zm2.92-13.54a6.4,6.4,0,0,0-4.51,1.54,5,5,0,0,0-1.52,3.7,4.48,4.48,0,0,0,.66,2.31,2.88,2.88,0,0,0,2.45,1.39h31.29a1.7,1.7,0,0,0,1.64-.94,2,2,0,0,0,.09-.59V91.2A4.12,4.12,0,0,0,191,87.52a21.92,21.92,0,0,0-4.23-.41l-2.74,0,.53-2.69a20,20,0,0,0,.35-2.81c0-4.44-4.06-8-9-8a8.14,8.14,0,0,0-7.45,4,12.35,12.35,0,0,0-1.64,4.39L166.54,84l-2.13-.11ZM191,87.52"
                  />
                  <path
                    className="cls-1"
                    d="M123.82,108.52a6,6,0,0,1-5.16-2.93,7.15,7.15,0,0,1-1-3.7,7.54,7.54,0,0,1,2.33-5.54,8,8,0,0,1,4.63-2.12c1.06-3.33,4-7.55,10.06-7.55,5.79,0,10.5,4.38,10.5,9.77,0,.06,0,.14,0,.21a8.3,8.3,0,0,1,1.93.42,6.89,6.89,0,0,1,4.56,6.29,5.26,5.26,0,0,1-.25,1.74,5.12,5.12,0,0,1-5,3.41Zm2.11-9.77a4,4,0,0,0-2.82.94,3,3,0,0,0-.9,2.2,2.72,2.72,0,0,0,.39,1.34,1.46,1.46,0,0,0,1.22.69h22.59a.44.44,0,0,0,.6-.44v-.07a2.37,2.37,0,0,0-1.67-2.06,16.84,16.84,0,0,0-2.85-.25l-2.73-.06.52-2.69a13.16,13.16,0,0,0,.24-1.9c0-2.85-2.64-5.17-5.89-5.17-5.21,0-5.89,5.23-5.92,5.45l-.25,2.14-2.16-.11Z"
                  />
                  <path
                    className="cls-1"
                    d="M105.3,159.2h-4.6V135.57a8.86,8.86,0,0,0-8.94-8.77H81.88A8.86,8.86,0,0,0,73,135.57v10.84l-2.9,1.51-14.36-10,2.64-3.77,10,7v-5.54A13.46,13.46,0,0,1,81.88,122.2h9.88a13.46,13.46,0,0,1,13.54,13.37Z"
                  />
                  <rect
                    className="cls-1"
                    x="71.57"
                    y="103.45"
                    width="30.42"
                    height="4.6"
                  />
                  <polygon
                    className="cls-1"
                    points="92.96 106.07 91.86 98.2 81.29 98.18 80.34 106.03 75.77 105.48 77.22 93.57 95.86 93.6 97.52 105.44 92.96 106.07"
                  />
                  <polygon
                    className="cls-1"
                    points="98.45 203.31 74.79 203.31 74.79 126.64 79.39 126.64 79.39 198.71 93.84 198.71 93.81 126.64 98.41 126.64 98.45 203.31"
                  />
                  <polygon
                    className="cls-1"
                    points="91.88 133.82 81.32 133.82 81.32 124.91 85.92 124.91 85.92 129.21 87.27 129.21 87.27 124.91 91.88 124.91 91.88 133.82"
                  />
                  <rect
                    className="cls-1"
                    x="84.08"
                    y="156.17"
                    width="4.6"
                    height="44.84"
                  />
                  <path
                    className="cls-1"
                    d="M86.65,121.34a11.74,11.74,0,0,1-11.8-11.66,11.44,11.44,0,0,1,1.1-4.92l4.16,2a6.85,6.85,0,0,0-.66,3,7.2,7.2,0,0,0,14.4,0,7,7,0,0,0-.66-3l4.16-2a11.44,11.44,0,0,1,1.1,4.92A11.75,11.75,0,0,1,86.65,121.34Z"
                  />
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
