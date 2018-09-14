import React, { Component } from "react";
// import * as ScrollMagic from "scrollmagic";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";
import * as gsap from "gsap";
// import { TweenMax } from "TweenMax";

class Team extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(ScrollMagic);
    console.log(gsap);
    const controller = new ScrollMagic.Controller();

    const teamTL = new gsap.TimelineMax();
    const teamTitle = document.querySelector(".np-teams__title");

    console.log(teamTitle);

    teamTL.fromTo(teamTitle, 4, { autoAlpha: 0 }, { autoAlpha: 1 });

    const teamScene = new ScrollMagic.Scene({
      triggerElement: teamTitle,
      offset: 0,
      duration: 0,
      triggerHook: 0.5,
      reverse: false
    })
      .addTo(controller)
      .addIndicators()
      .setTween(teamTL);
  }

  render() {
    const teamTitleEn = this.props.acf._np_teams_title_en;
    const teamTitleFr = this.props.acf._np_teams_title_fr;
    const teamTitle =
      this.props.browserLang === "en" ? teamTitleEn : teamTitleFr;

    const teamContentEn = this.props.acf._np_teams_intro_en;
    const teamContentFr = this.props.acf._np_teams_intro_fr;
    const teamContent =
      this.props.browserLang === "en" ? teamContentEn : teamContentFr;

    const teamsEn = this.props.acf._np_teams_en;
    const teamsFr = this.props.acf._np_teams_fr;
    const teams = this.props.browserLang === "en" ? teamsEn : teamsFr;

    return (
      <div className="np-teams">
        <div className="np-teams__intro">
          <div className="np-teams__wrapper">
            <div className="np-teams__title">
              <h2>{teamTitle}</h2>
            </div>
            <div
              className="np-teams__content"
              dangerouslySetInnerHTML={{ __html: teamContent }}
            />
          </div>
        </div>
        <div className="np-teams__background">
          <div className="np-teams__wrapper np-teams__wrapper--bottom">
            <div className="np-teams__container">
              {teams.length > 0 &&
                teams.map((team, index) => {
                  return (
                    <div key={index} className="np-teams__team">
                      <div className="np-teams__team--image">
                        <img
                          src={team.team_image.sizes.contained}
                          alt={team.team_image.alt}
                        />
                        <div className="np-teams__team--details">
                          <h3>{team.team_name}</h3>
                        </div>
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

export default Team;
