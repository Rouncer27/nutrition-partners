import React, { Component } from "react";

import $ from "jquery";
import ScrollMagic from "scrollmagic";
import "debug.addIndicators";

import Menu from "./Menu";
import LauguageButton from "./LauguageButton";

class Header extends Component {
  constructor(props) {
    super(props);
    this.backToTopButtonInit = this.backToTopButtonInit.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  componentDidMount() {
    const backToTopBtn = document.querySelector(".np-siteheader__backtop");
    // This is the scroll to the top button. //
    this.backToTopButtonInit(backToTopBtn);
    backToTopBtn.addEventListener("click", this.scrollToTop);

    // This is the scroll to #ID on page load. //
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

  backToTopButtonInit(btn) {
    const mainHeader = document.querySelector(".siteheader");

    const backToTopCont = new ScrollMagic.Controller();
    const backToTopBtnScene = new ScrollMagic.Scene({
      triggerElement: mainHeader,
      offset: 800,
      duration: 0,
      triggerHook: 0.5,
      reverse: true
    })
      .addTo(backToTopCont)
      .setClassToggle(btn, "visable-active");
  }

  scrollToTop() {
    let timeOut;
    if (
      document.body.scrollTop != 0 ||
      document.documentElement.scrollTop != 0
    ) {
      window.scrollBy(0, -50);
      timeOut = setTimeout(this.scrollToTop, 10);
    } else {
      clearTimeout(timeOut);
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
        <div className="np-siteheader__backtop" />
      </header>
    );
  }
}

export default Header;
