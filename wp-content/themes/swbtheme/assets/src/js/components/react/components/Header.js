import React, { Component } from "react";
import $ from "jquery";

import Menu from "./Menu";
import LauguageButton from "./LauguageButton";

class Header extends Component {
  componentDidMount() {
    const type = window.location.hash.substr(1);
    if (type !== "") {
      $("html, body").animate(
        {
          scrollTop: $(`#${type}`).offset().top
        },
        1000
      );
    }
  }
  render() {
    const {
      siteMainEnglishMenu,
      siteMainFrenchMenu,
      pageData,
      siteOptions,
      browserLang,
      switchTheLang
    } = this.props;
    const enLogo = siteOptions._np_en_logo.sizes.contained;
    const frLogo = siteOptions._np_fr_logo.sizes.contained;
    const enLogoAlt = siteOptions._np_en_logo.alt;
    const frLogoAlt = siteOptions._np_fr_logo.alt;
    const headerLogo = browserLang === "en" ? enLogo : frLogo;
    const headerLogoAlt = browserLang === "en" ? enLogoAlt : frLogoAlt;

    const enMenuItems = siteMainEnglishMenu.items;
    const frMenuItems = siteMainFrenchMenu.items;
    const mainMenuItem = browserLang === "en" ? enMenuItems : frMenuItems;

    const siteURL = this.props.siteSettings ? this.props.siteSettings.url : "#";
    const siteDescription = this.props.siteSettings
      ? this.props.siteSettings.description
      : "";

    return (
      <header
        className="siteheader"
        itemScope
        itemType="http://schema.org/WPHeader"
      >
        <div className="siteheader__container">
          <div
            className="siteheader__meta"
            itemScope
            itemType="http://schema.org/LocalBusiness"
          >
            <div className="mainlogo">
              <h1 itemProp="name">
                <span>nutrition Partners</span>
                <a itemProp="url" href={siteURL}>
                  <img itemProp="image" src={headerLogo} alt={headerLogoAlt} />
                </a>
              </h1>
            </div>
          </div>

          <nav
            className="swbmainnav"
            itemScope
            itemType="http://schema.org/SiteNavigationElement"
          >
            <input
              type="checkbox"
              className="swbmainnav__checkbox"
              id="navi-toggle"
            />

            <label htmlFor="navi-toggle" className="swbmainnav__button">
              <span className="swbmainnav__icon">&nbsp;</span>
            </label>
            <div className="swbmainnav__container">
              <div className="mainlogo">
                <h1 itemProp="name">
                  <span>Nutrition Partners</span>
                  <a itemProp="url" href={siteURL}>
                    <img
                      itemProp="image"
                      src={headerLogo}
                      alt={headerLogoAlt}
                    />
                  </a>
                </h1>
                <p itemProp="description">
                  <span>{siteDescription}</span>
                </p>
              </div>{" "}
              <div className="menu-main-menu-container">
                <Menu mainMenuItem={mainMenuItem} slug={pageData.slug} />
                <LauguageButton
                  browserLang={browserLang}
                  switchTheLang={switchTheLang}
                />
              </div>
              <div className="mobile-background" />
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
