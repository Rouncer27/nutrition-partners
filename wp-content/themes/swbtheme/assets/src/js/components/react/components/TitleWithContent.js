import React from "react";

const TitleWithContent = props => {
  const blueTitleReq = props.acf._np_twc_blue_title_req;
  const greenTitleReq = props.acf._np_twc_green_title_req;
  const mainParaReq = props.acf._np_twc_main_paragraphs_req;

  if (blueTitleReq === "yes") {
    const blueTitleEn = props.acf._np_twc_blue_title_en;
    const blueTitleFr = props.acf._np_twc_blue_title_fr;
    var blueTitle = (
      <h2>{props.browserLang === "en" ? blueTitleEn : blueTitleFr}</h2>
    );
  }

  if (greenTitleReq === "yes") {
    const greenTitleEn = props.acf._np_twc_green_title_en;
    const greenTitleFr = props.acf._np_twc_green_title_fr;
    var greenTitle = (
      <h3>{props.browserLang === "en" ? greenTitleEn : greenTitleFr}</h3>
    );
  }

  if (mainParaReq === "yes") {
    const mainParaEn = props.acf._np_twc_main_paragraphs_en;
    const mainParaFr = props.acf._np_twc_main_paragraphs_fr;
    const paraContent = props.browserLang === "en" ? mainParaEn : mainParaFr;
    var mainPara = (
      <div
        className="np-twcontent__mainpara"
        dangerouslySetInnerHTML={{ __html: paraContent }}
      />
    );
  }

  return (
    <div className="np-twcontent">
      <div className="np-twcontent__wrapper">
        {blueTitleReq === "yes" && (
          <div className="np-twcontent__bluet">{blueTitle}</div>
        )}
        {greenTitleReq === "yes" && (
          <div className="np-twcontent__greent">{greenTitle}</div>
        )}

        {mainParaReq === "yes" && mainPara}
      </div>
    </div>
  );
};

export default TitleWithContent;
