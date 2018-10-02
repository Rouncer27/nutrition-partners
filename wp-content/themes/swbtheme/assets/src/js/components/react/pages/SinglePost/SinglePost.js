import React, { Component } from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import axios from "axios";

import PageLoad from "../../components/PageLoad";
import Header from "../../components/Header";
import Article from "../../components/Article";
import HeroPost from "../../components/HeroPost";
import FooterPost from "../../components/FooterPost";

class SinglePost extends Component {
  constructor() {
    super();

    this.switchTheLang = this.switchTheLang.bind(this);
    this.setPageAPIURL = this.setPageAPIURL.bind(this);
    this.getEnglishMenuItems = this.getEnglishMenuItems.bind(this);
    this.getFrenchMenuItems = this.getFrenchMenuItems.bind(this);
    this.getSiteSettings = this.getSiteSettings.bind(this);

    this.state = {
      browserLang: "",
      pageApiUrl: "",
      pageID: "",
      pageData: {},
      categories: [],
      siteOptions: {},
      siteSettings: {},
      siteMainEnglishMenu: {},
      siteMainFrenchMenu: {}
    };
  }

  componentDidMount() {
    const pageID = document.querySelector(".swb-single-blog-post").dataset
      .pageid;
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
      .get(`${this.state.pageApiUrl}/wp-json/wp/v2/posts/${this.state.pageID}`)
      .then(result => {
        this.setState(
          prevState => {
            return {
              ...prevState,
              pageData: result.data
            };
          },
          () => {
            axios
              .get(`${this.state.pageApiUrl}/wp-json/wp/v2/categories/`)
              .then(result => {
                let catName = [];
                catName = this.state.pageData.categories.map(catId => {
                  return result.data.filter(cat => {
                    if (cat.id === catId) {
                      return true;
                    } else {
                      return false;
                    }
                  });
                });
                const catNames = [].concat(
                  catName.map(cat => {
                    return cat[0];
                  })
                );
                this.setState(prevState => {
                  return {
                    ...prevState,
                    categories: catNames
                  };
                });
              });
          }
        );
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
              siteMainFrenchMenu={this.state.siteMainFrenchMenu}
              siteOptions={this.state.siteOptions}
              siteSettings={this.state.siteSettings}
            />
            <HeroPost acf={acf} />
            <Article
              browserLang={this.state.browserLang}
              pageData={this.state.pageData}
              categories={this.state.categories}
              acf={acf}
            />
            <FooterPost
              browserLang={this.state.browserLang}
              siteOptions={this.state.siteOptions}
              pageData={this.state.pageData}
              siteMainEnglishMenu={this.state.siteMainEnglishMenu}
              siteMainFrenchMenu={this.state.siteMainFrenchMenu}
            />
          </div>
        ) : (
          <PageLoad />
        )}
      </div>
    );
  }
}

ReactDOM.render(<SinglePost />, document.getElementById("root"));
