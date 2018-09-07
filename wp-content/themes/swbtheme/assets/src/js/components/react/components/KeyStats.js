import React from "react";

const KeyStats = props => {
  const keyStatsEn = props.acf._np_key_stats_en;
  const keyStatsFr = props.acf._np_key_stats_fr;
  const keyStats = props.browserLang === "en" ? keyStatsEn : keyStatsFr;

  return (
    <div className="np-keystats">
      <div className="np-keystats__wrapper">
        <div className="np-keystats__title">
          <h2>Key Stats</h2>
        </div>
        <div className="np-keystats__stats">
          {keyStats.map((stat, index) => {
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
  );
};

export default KeyStats;
