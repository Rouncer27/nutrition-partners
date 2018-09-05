import React from "react";

const ClosedCrop = props => {
  const ccTitleEn = props.acf._np_cc_image_title_en;
  const ccTitleFr = props.acf._np_cc_image_title_fr;
  const ccTitle = props.browserLang === "en" ? ccTitleEn : ccTitleFr;

  const ccContentEn = props.acf._np_cc_image_content_en;
  const ccContentFr = props.acf._np_cc_image_content_fr;
  const ccContent = props.browserLang === "en" ? ccContentEn : ccContentFr;

  const ccBtnTextEn = props.acf._np_cc_image_btn_text_en;
  const ccBtnTextFr = props.acf._np_cc_image_btn_text_fr;
  const ccBtnText = props.browserLang === "en" ? ccBtnTextEn : ccBtnTextFr;
  const ccBtnLink = props.acf._np_cc_image_btn_link;

  const ccImageSrc = props.acf._np_cc_image.sizes.contained;
  const ccImageAlt = props.acf._np_cc_image.alt;

  return (
    <div className="np-closecrop">
      <div className="np-closecrop__wrapper">
        <div className="np-closecrop__image">
          <div className="np-closecrop__title">
            <h2>{ccTitle}</h2>
          </div>
          <div className="np-closecrop__cropped">
            <img src={ccImageSrc} alt={ccImageAlt} />
          </div>
        </div>

        <div className="np-closecrop__content">
          <div
            className="np-closecrop__content--paragraph"
            dangerouslySetInnerHTML={{ __html: ccContent }}
          />
          <div className="np-closecrop__content--btn">
            <a href={ccBtnLink}>{ccBtnText}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosedCrop;
