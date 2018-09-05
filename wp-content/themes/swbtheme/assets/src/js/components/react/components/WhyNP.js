import React from "react";

const WhyNP = props => {
  const wnpTitleEn = props.acf._np_wnp_title_en;
  const wnpTitleFr = props.acf._np_wnp_title_fr;
  const wnpTitle = props.browserLang === "en" ? wnpTitleEn : wnpTitleFr;

  const wnpIntroEn = props.acf._np_wnp_intro_en;
  const wnpIntroFr = props.acf._np_wnp_intro_fr;
  const wnpIntro = props.browserLang === "en" ? wnpIntroEn : wnpIntroFr;

  const wnpListEn = props.acf._np_wnp_list_en;
  const wnpListFr = props.acf._np_wnp_list_fr;
  const wnpItems = props.browserLang === "en" ? wnpListEn : wnpListFr;

  const wnpConcEn = props.acf._np_wnp_conclusion_en;
  const wnpConcFr = props.acf._np_wnp_conclusion_fr;
  const wnpConc = props.browserLang === "en" ? wnpConcEn : wnpConcFr;

  const wnpTopLeftSRC = props.acf._np_wnp_top_left.sizes.contained;
  const wnpMidLeftSRC = props.acf._np_wnp_mid_left.sizes.contained;
  const wnpBottomSRC = props.acf._np_wnp_bottom_right.sizes.contained;

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
};

export default WhyNP;
