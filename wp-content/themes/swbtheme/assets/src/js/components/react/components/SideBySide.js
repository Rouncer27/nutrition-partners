import React from "react";

const SideBySide = props => {
  const sidebyTitleEn = props.acf._np_side_by_side_title_en;
  const sidebyTitleFr = props.acf._np_side_by_side_title_fr;
  const sidebyTitle =
    props.browserLang === "en" ? sidebyTitleEn : sidebyTitleFr;

  const sidebyParaEn = props.acf._np_side_by_side_content_en;
  const sidebyParaFr = props.acf._np_side_by_side_content_fr;
  const sidebyPara = props.browserLang === "en" ? sidebyParaEn : sidebyParaFr;

  const sidebyImgSRCEn = props.acf._np_side_by_side_image_en.sizes.contained;
  const sidebyImgSRCFr = props.acf._np_side_by_side_image_fr.sizes.contained;
  const sidebyImgSRC =
    props.browserLang === "en" ? sidebyImgSRCEn : sidebyImgSRCFr;

  const sidebyImgALTEn = props.acf._np_side_by_side_image_en.alt;
  const sidebyImgALTFr = props.acf._np_side_by_side_image_fr.alt;
  const sidebyImgALT =
    props.browserLang === "en" ? sidebyImgALTEn : sidebyImgALTFr;

  return (
    <div className="np-sideby">
      <div className="np-sideby__wrapper">
        <div className="np-sideby__content">
          <div className="np-sideby__content--title">
            <h2>{sidebyTitle}</h2>
          </div>
          <div
            className="np-sideby__content--paragraph"
            dangerouslySetInnerHTML={{ __html: sidebyPara }}
          />
        </div>
        <div className="np-sideby__image">
          <div className="np-sideby__image--container">
            <img src={sidebyImgSRC} alt={sidebyImgALT} />
          </div>
          <div className="np-sideby__image--background" />
        </div>
      </div>
    </div>
  );
};

export default SideBySide;
