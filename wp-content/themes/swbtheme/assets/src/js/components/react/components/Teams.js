import React from "react";

const Team = props => {
  const teamTitleEn = props.acf._np_teams_title_en;
  const teamTitleFr = props.acf._np_teams_title_fr;
  const teamTitle = props.browserLang === "en" ? teamTitleEn : teamTitleFr;

  const teamContentEn = props.acf._np_teams_intro_en;
  const teamContentFr = props.acf._np_teams_intro_fr;
  const teamContent =
    props.browserLang === "en" ? teamContentEn : teamContentFr;

  const teamsEn = props.acf._np_teams_en;
  const teamsFr = props.acf._np_teams_fr;
  const teams = props.browserLang === "en" ? teamsEn : teamsFr;

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
};

export default Team;
