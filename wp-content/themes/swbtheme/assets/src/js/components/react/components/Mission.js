import React from "react";

export default props => {
  const acf = props.pageData.acf;
  const browserLang = props.browserLang;
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
};
