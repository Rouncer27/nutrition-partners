import React from "react";

const RepeatableContent = props => {
  const rcParasEn = props.acf._np_rc_paragraphs_en;
  const rcParasFr = props.acf._np_rc_paragraphs_fr;
  const rcParas = props.browserLang === "en" ? rcParasEn : rcParasFr;

  const rcImgEn = props.acf._np_r_c_images_en;
  const rcImgFr = props.acf._np_rc_images_fr;
  const rcImg = props.browserLang === "en" ? rcImgEn : rcImgFr;

  return (
    <div className="np-repcont">
      <div className="np-repcont__wrapper">
        <div className="np-repcont__paragraphs">
          {rcParas.map((para, index) => {
            return (
              <div key={index} className="np-repcont__para">
                <div className="np-repcont__para--title">
                  <h2>{para.title}</h2>
                </div>
                <div
                  className="np-repcont__para--content"
                  dangerouslySetInnerHTML={{ __html: para.content }}
                />
              </div>
            );
          })}
        </div>
        <div className="np-repcont__images">
          {rcImg.map((img, index) => {
            const rcImgSRCEn = img.image.sizes.contained;
            const rcImgSRCFr = img.image.sizes.contained;
            const rcImgSRC =
              props.browserLang === "en" ? rcImgSRCEn : rcImgSRCFr;

            const rcImgALTEn = img.image.alt;
            const rcImgALTFr = img.image.alt;
            const rcImgALT =
              props.browserLang === "en" ? rcImgALTEn : rcImgALTFr;

            return (
              <div key={index} className="np-repcont__img">
                <img src={rcImgSRC} alt={rcImgALT} />
              </div>
            );
          })}
          <div className="np-repcont__images--background" />
        </div>
      </div>
    </div>
  );
};

export default RepeatableContent;
