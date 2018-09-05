import React from "react";

const FarmHealthy = props => {
  const fHTitleEn = props.acf._np_farm_healthy_title_en;
  const fHTitleFr = props.acf._np_farm_healthy_title_fr;
  const fHTitle = props.browserLang === "en" ? fHTitleEn : fHTitleFr;

  const fHContentEn = props.acf._np_farm_healthy_content_en;
  const fHContentFr = props.acf._np_farm_healthy_content_fr;
  const fHContent = props.browserLang === "en" ? fHContentEn : fHContentFr;

  const fHimgsrcEn = props.acf._np_farm_healthy_image_en.sizes.contained;
  const fHimgsrcFr = props.acf._np_farm_healthy_image_fr.sizes.contained;
  const fHimgsrc = props.browserLang === "en" ? fHimgsrcEn : fHimgsrcFr;

  const fHimgaltEn = props.acf._np_farm_healthy_image_en.alt;
  const fHimgaltFr = props.acf._np_farm_healthy_image_fr.alt;
  const fHimgalt = props.browserLang === "en" ? fHimgaltEn : fHimgaltFr;

  return (
    <div className="np-farmhealth">
      <div className="np-farmhealth__wrapper">
        <div className="np-farmhealth__title">
          <h2>{fHTitle}</h2>
        </div>
        <div
          className="np-farmhealth__content"
          dangerouslySetInnerHTML={{ __html: fHContent }}
        />
        <div className="np-farmhealth__image">
          <img src={fHimgsrc} alt={fHimgaltEn} />
        </div>
      </div>
    </div>
  );
};

export default FarmHealthy;
