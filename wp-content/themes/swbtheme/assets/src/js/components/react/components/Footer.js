import React, { Component } from "react";
import Menu from "./Menu";

class Footer extends Component {
  render() {
    const {
      browserLang,
      pageData,
      siteMainEnglishMenu,
      siteMainFrenchMenu,
      siteOptions
    } = this.props;
    console.log(browserLang);
    console.log(pageData);
    console.log(siteMainEnglishMenu);
    console.log(siteMainFrenchMenu);
    console.log(siteOptions);

    const heroImageSrc = pageData.acf._np_footer_image.sizes.fullbackground;
    const heroImageAlt = pageData.acf._np_footer_image.alt;

    const enLogo = siteOptions._np_en_footer_logo.sizes.contained;
    const frLogo = siteOptions._np_fr_footer_logo.sizes.contained;
    const enLogoAlt = siteOptions._np_en_footer_logo.alt;
    const frLogoAlt = siteOptions._np_fr_footer_logo.alt;
    const footerLogo = browserLang === "en" ? enLogo : frLogo;
    const footerLogoAlt = browserLang === "en" ? enLogoAlt : frLogoAlt;

    const enMenuItems = siteMainEnglishMenu.items;
    const frMenuItems = siteMainFrenchMenu.items;
    const mainMenuItem = browserLang === "en" ? enMenuItems : frMenuItems;

    const copy = new Date();

    return (
      <footer className="mainfooter">
        <div className="mainfooter__hero">
          <div className="mainfooter__hero--container">
            <img src={heroImageSrc} alt={heroImageAlt} />
          </div>
        </div>

        <div className="mainfooter__bottom">
          <div className="mainfooter__wrapper">
            <div className="mainfooter__logo">
              <img src={footerLogo} alt={footerLogoAlt} />
            </div>

            <div className="mainfooter__menu">
              <Menu mainMenuItem={mainMenuItem} slug={pageData.slug} />
            </div>

            <div className="mainfooter__copy">
              <p>
                Copyright &copy; {copy.getFullYear()}. Made in Airdrie.{" "}
                <span>
                  Designed and developed by{" "}
                  <a
                    title="Switchback Creative Inc."
                    target="_blank"
                    href="http://switchbackcreative.ca"
                  >
                    Switchback Creative Inc.
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
