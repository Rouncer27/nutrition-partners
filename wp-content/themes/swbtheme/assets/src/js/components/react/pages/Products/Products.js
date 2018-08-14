import React, { Component } from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import axios from "axios";

import PageLoad from "../../components/PageLoad";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class Products extends Component {
  constructor() {
    super();

    this.switchTheLang = this.switchTheLang.bind(this);
    this.setPageAPIURL = this.setPageAPIURL.bind(this);
    this.getEnglishMenuItems = this.getEnglishMenuItems.bind(this);
    this.getFrenchMenuItems = this.getFrenchMenuItems.bind(this);

    this.state = {
      browserLang: "",
      userLocation: "",
      pageApiUrl: "",
      pageID: "",
      pageData: {},
      siteOptions: {},
      siteMainEnglishMenu: {},
      siteMainFrenchMenu: {}
    };
  }

  componentDidMount() {
    const pageID = document.querySelector(".swb-products-page").dataset.pageid;
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
      Object.keys(this.state.siteMainFrenchMenu).length > 0;
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
            />
            <h1>Products Page</h1>
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

ReactDOM.render(<Products />, document.getElementById("root"));
