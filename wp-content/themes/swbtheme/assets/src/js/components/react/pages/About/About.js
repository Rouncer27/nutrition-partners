import React, { Component } from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import axios from "axios";

import PageLoad from "../../components/PageLoad";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import TitleWithContent from "../../components/TitleWithContent";
import WhyNP from "../../components/WhyNP";
import ClosedCrop from "../../components/ClosedCrop";
import Teams from "../../components/Teams";
import FarmHealthy from "../../components/FarmHealthy";
import ImageLink from "../../components/ImageLink";
import Footer from "../../components/Footer";

export default class About extends Component {
  constructor() {
    super();

    this.switchTheLang = this.switchTheLang.bind(this);
    this.setPageAPIURL = this.setPageAPIURL.bind(this);
    this.getEnglishMenuItems = this.getEnglishMenuItems.bind(this);
    this.getFrenchMenuItems = this.getFrenchMenuItems.bind(this);
    this.getSiteSettings = this.getSiteSettings.bind(this);

    this.state = {
      browserLang: "",
      userLocation: "",
      pageApiUrl: "",
      pageID: "",
      pageData: {},
      siteOptions: {},
      siteSettings: {},
      siteMainEnglishMenu: {},
      siteMainFrenchMenu: {}
    };
  }

  componentDidMount() {
    const pageID = document.querySelector(".swb-about-page").dataset.pageid;
    let sessionStart = sessionStorage.getItem("npWebLang");
    const apiBaseURL = this.setPageAPIURL();

    this.setState(
      prevState => {
        return {
          ...prevState,
          browserLang: sessionStart,
          pageApiUrl: apiBaseURL,
          pageID: pageID
        };
      },
      () => {
        this.getSiteSettings();
        this.getPageData();
        this.getEnglishMenuItems();
        this.getFrenchMenuItems();
        this.getOptionsData();
      }
    );
  }

  // Get the base for all API calls
  setPageAPIURL() {
    const fullURL = [...window.location.href.split("/")];
    let removedPageSlug;
    var ENV = fullURL.some(function(v) {
      return v.indexOf("localhost") >= 0;
    });
    if (ENV) {
      removedPageSlug = fullURL.slice(0, fullURL.length - (fullURL.length - 4));
    } else {
      removedPageSlug = fullURL.slice(0, fullURL.length - (fullURL.length - 4));
    }
    const URL = removedPageSlug.join("/");
    return URL;
  }

  getSiteSettings() {
    axios.get(`${this.state.pageApiUrl}/wp-json/`).then(res => {
      this.setState(prevState => {
        return {
          ...prevState,
          siteSettings: res.data
        };
      });
    });
  }

  // Get the users language setting. //
  switchTheLang() {
    this.setState(prevState => {
      const newLang = prevState.browserLang === "en" ? "fr" : "en";
      sessionStorage.setItem("npWebLang", newLang);
      return {
        browserLang: newLang
      };
    });
  }

  // Get this page data. //
  getPageData() {
    axios
      .get(`${this.state.pageApiUrl}/wp-json/wp/v2/pages/${this.state.pageID}`)
      .then(result => {
        this.setState(prevState => {
          return {
            ...prevState,
            pageData: result.data
          };
        });
      });
  }

  // Get the english menu items. //
  getEnglishMenuItems() {
    axios
      .get(`${this.state.pageApiUrl}/wp-json/wp-api-menus/v2/menus/2`)
      .then(res => {
        this.setState(prevState => {
          return {
            ...prevState,
            siteMainEnglishMenu: res.data
          };
        });
      });
  }

  getFrenchMenuItems() {
    axios
      .get(`${this.state.pageApiUrl}/wp-json/wp-api-menus/v2/menus/3`)
      .then(res => {
        this.setState(prevState => {
          return {
            ...prevState,
            siteMainFrenchMenu: res.data
          };
        });
      });
  }

  // Get the options data. //
  getOptionsData() {
    axios
      .get(`${this.state.pageApiUrl}/wp-json/acf/v3/options/options`)
      .then(res => {
        this.setState(prevState => {
          return {
            ...prevState,
            siteOptions: res.data.acf
          };
        });
      });
  }

  render() {
    const renderComponent =
      Object.keys(this.state.pageData).length > 0 &&
      Object.keys(this.state.siteOptions).length > 0 &&
      Object.keys(this.state.siteMainEnglishMenu).length > 0 &&
      Object.keys(this.state.siteSettings).length > 0 &&
      Object.keys(this.state.siteMainFrenchMenu).length > 0;
    let acf;
    if (renderComponent) {
      acf = this.state.pageData.acf;
    }
    return (
      <div className="np-page-root">
        {renderComponent ? (
          <div>
            <Header
              browserLang={this.state.browserLang}
              switchTheLang={this.switchTheLang}
              pageData={this.state.pageData}
              siteMainEnglishMenu={this.state.siteMainEnglishMenu}
              siteMainEnglishMenu={this.state.siteMainEnglishMenu}
              siteMainFrenchMenu={this.state.siteMainFrenchMenu}
              siteOptions={this.state.siteOptions}
              siteSettings={this.state.siteSettings}
            />
            <Hero acf={acf} />
            <TitleWithContent browserLang={this.state.browserLang} acf={acf} />
            <WhyNP browserLang={this.state.browserLang} acf={acf} />
            <ClosedCrop browserLang={this.state.browserLang} acf={acf} />
            <Teams browserLang={this.state.browserLang} acf={acf} />
            <FarmHealthy browserLang={this.state.browserLang} acf={acf} />
            <ImageLink browserLang={this.state.browserLang} acf={acf} />
            <Footer
              browserLang={this.state.browserLang}
              pageData={this.state.pageData}
              siteMainEnglishMenu={this.state.siteMainEnglishMenu}
              siteMainFrenchMenu={this.state.siteMainFrenchMenu}
              siteOptions={this.state.siteOptions}
            />
          </div>
        ) : (
          <PageLoad />
        )}
      </div>
    );
  }
}

ReactDOM.render(<About />, document.getElementById("root"));
