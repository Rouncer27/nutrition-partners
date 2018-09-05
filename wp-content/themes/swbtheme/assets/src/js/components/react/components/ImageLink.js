import React from "react";

const ImageLink = props => {
  console.log(props);
  const imgLinkTitleEn = props.acf._np_image_link_content_en;
  const imgLinkTitleFr = props.acf._np_image_link_content_fr;
  const imgLinkTitle =
    props.browserLang === "en" ? imgLinkTitleEn : imgLinkTitleFr;

  const imgLinkBtnTextEn = props.acf._np_image_link_btn_text_en;
  const imgLinkBtnTextFr = props.acf._np_image_link_btn_text_fr;
  const imgLinkBtnText =
    props.browserLang === "en" ? imgLinkBtnTextEn : imgLinkBtnTextFr;

  const imgLinksrcEn = props.acf._np_image_link_img_en.sizes.contained;
  const imgLinksrcFr = props.acf._np_image_link_img_fr.sizes.contained;
  const imgLinksrc = props.browserLang === "en" ? imgLinksrcEn : imgLinksrcFr;

  const imgLinkaltEn = props.acf._np_image_link_img_en.alt;
  const imgLinkaltFr = props.acf._np_image_link_img_fr.alt;
  const imgLinkalt = props.browserLang === "en" ? imgLinkaltEn : imgLinkaltFr;

  const imgLinkURL = props.acf._np_image_link_url;

  return (
    <div className="np-imglink">
      <div className="np-imglink__wrapper">
        <div className="np-imglink__image">
          <img src={imgLinksrc} alt={imgLinkalt} />
        </div>
        <div className="np-imglink__content">
          <div className="np-imglink__title">
            <h2>{imgLinkTitle}</h2>
          </div>
          <div className="np-imglink__link">
            <a href={imgLinkURL}>{imgLinkBtnText}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLink;
