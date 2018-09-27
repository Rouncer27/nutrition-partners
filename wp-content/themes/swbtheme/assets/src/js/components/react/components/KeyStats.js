import React from "react";

const KeyStats = props => {
  const keyAdvEn = props.acf._np_key_advantage_en
    ? props.acf._np_key_advantage_en
    : [];
  const keyInduEn = props.acf._np_key_industry_en
    ? props.acf._np_key_industry_en
    : [];
  const keyOppEn = props.acf._np_key_opportunity_en
    ? props.acf._np_key_opportunity_en
    : [];

  const keyAdvFn = props.acf._np_key_advantage_fr
    ? props.acf._np_key_advantage_fr
    : [];
  const keyInduFn = props.acf._np_key_industry_fr
    ? props.acf._np_key_industry_fr
    : [];
  const keyOppFn = props.acf._np_key_opportunity_fr
    ? props.acf._np_key_opportunity_fr
    : [];

  const keyAdvantage = props.browserLang === "en" ? keyAdvEn : keyAdvFn;
  const keyIndustry = props.browserLang === "en" ? keyInduEn : keyInduFn;
  const keyOpportunity = props.browserLang === "en" ? keyOppEn : keyOppFn;

  return (
    <div className="np-keystats">
      <div className="np-keystats__wrapper">
        <div className="np-keystats__title">
          <h2>Key Stats</h2>
        </div>
        <div className="np-keystats__stats">
          <div className="np-keystats__stats--advantage">
            <div class="np-keystats__stats--advantage--header" />
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
            <div class="np-keystats__stats--industry--header" />
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
            <div class="np-keystats__stats--opportunity--header" />
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
};

export default KeyStats;
