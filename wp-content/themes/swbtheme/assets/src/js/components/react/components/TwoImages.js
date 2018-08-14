import React from "react";

const TwoImages = props => {
  const acf = props.pageData.acf;
  const browserLang = props.browserLang;

  const twoImagesLeft =
    acf && acf._np_two_images_image_left.sizes.contained
      ? acf._np_two_images_image_left.sizes.contained
      : "";
  const twoImagesRight =
    acf && acf._np_two_images_image_right.sizes.contained
      ? acf._np_two_images_image_right.sizes.contained
      : "";
  const enTitle = acf ? acf._np_en_two_images_title : false;
  const enContent = acf ? acf._np_en_two_images_content : false;
  const frTitle = acf ? acf._np_fr_two_images_title : false;
  const frContent = acf ? acf._np_fr_two_images_content : false;

  const twoImageTitle = browserLang === "en" ? enTitle : frTitle;
  const twoImageContent = browserLang === "en" ? enContent : frContent;

  return (
    <div className="np-twoimg">
      <div className="np-twoimg__wrapper">
        <div className="np-twoimg__leftwrap">
          <div className="np-twoimg__left">
            <img src={twoImagesLeft} alt="" />
          </div>
          <div className="np-twoimg__title">
            <h2>{twoImageTitle}</h2>
          </div>
        </div>

        <div className="np-twoimg__rightwrap">
          <div className="np-twoimg__right">
            <img src={twoImagesRight} alt="" />
          </div>
          <div
            className="np-twoimg__content"
            dangerouslySetInnerHTML={{
              __html: twoImageContent
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TwoImages;
