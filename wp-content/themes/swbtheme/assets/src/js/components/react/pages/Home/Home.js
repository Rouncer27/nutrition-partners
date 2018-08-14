import React, { Component } from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import axios from "axios";

import PageLoad from "../../components/PageLoad";
import Header from "../../components/Header";
import Featured from "../../components/Featured";
import Mission from "../../components/Mission";
import TwoImages from "../../components/TwoImages";
import Process from "../../components/Process";
import RecentArticles from "../../components/RecentArticles";
import Testimonials from "../../components/Testimonials";
import Partners from "../../components/Partners";
import Footer from "../../components/Footer";

// http://localhost/nutritionpartners/wp-json/wp-api-menus/v2/menus/2
// http://localhost/nutritionpartners/wp-json/acf/v3/options/options

export default class Home extends Component {
  constructor() {
    super();

    this.switchTheLang = this.switchTheLang.bind(this);
    this.setUserLocation = this.setUserLocation.bind(this);
    this.setPageAPIURL = this.setPageAPIURL.bind(this);
    this.getPageData = this.getPageData.bind(this);
    this.getOptionsData = this.getOptionsData.bind(this);
    this.getPostsData = this.getPostsData.bind(this);
    this.getEnglishMenuItems = this.getEnglishMenuItems.bind(this);
    this.getFrenchMenuItems = this.getFrenchMenuItems.bind(this);

    this.state = {
      browserLang: "",
      userLocation: "",
      pageApiUrl: "",
      pageID: "",
      pageData: {},
      postsData: {},
      siteOptions: {},
      siteMainEnglishMenu: {},
      siteMainFrenchMenu: {},
      slides: [],
      activeSlider: "",
      activeQuebecSlider: ""
    };
  }

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

  componentDidMount() {
    const pageID = document.querySelector(".swb-home-page").dataset.pageid;
    let sessionStart = sessionStorage.getItem("npWebLang");
    const apiBaseURL = this.setPageAPIURL();
    this.setUserLocation();

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
        this.getPostsData();
        this.getEnglishMenuItems();
        this.getFrenchMenuItems();
        this.getOptionsData();
      }
    );
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

  // Get the recent posts //
  getPostsData() {
    axios
      .get(`${this.state.pageApiUrl}/wp-json/wp/v2/posts?_embed`)
      .then(result => {
        this.setState(prevState => {
          return {
            ...prevState,
            postsData: result.data
          };
        });
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
            pageData: result.data,
            slides: result.data.acf._np_featured_opening_slides,
            activeQuebecSlider: result.data.acf._np_featured_opening_slides
              .find(slide => {
                return slide.opening_slide === "yes";
              })
              .en_title.toLowerCase()
          };
        });
      });
  }

  // Get the users location. //
  setUserLocation() {
    const API_KEY = "8e2f5850676548cb8ad0de88a1813fe4";
    const sessionLocation = sessionStorage.getItem("npWebLocation");

    if (sessionLocation === null) {
      axios
        .get("https://api.ipgeolocation.io/getip")
        .then(result => {
          const userIP = result.data.ip;
          axios
            .get(
              `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${userIP}`
            )
            .then(result => {
              sessionStorage.setItem("npWebLocation", result.data.state_prov);
              this.setState(prevState => {
                return {
                  ...prevState,
                  userLocation: result.data.state_prov.toLowerCase()
                };
              });
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          userLocation: sessionLocation.toLowerCase()
        };
      });
    }
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

  render() {
    const renderComponent =
      Object.keys(this.state.pageData).length > 0 &&
      Object.keys(this.state.siteOptions).length > 0 &&
      Object.keys(this.state.siteMainEnglishMenu).length > 0 &&
      Object.keys(this.state.siteMainFrenchMenu).length > 0 &&
      this.state.postsData.length > 0;

    // const renderComponent = false;

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
            />
            <Featured
              browserLang={this.state.browserLang}
              userLocation={this.state.userLocation}
              pageData={this.state.pageData}
              activeQuebecSlide={this.state.activeQuebecSlider}
              slides={this.state.slides}
            />
            <Mission
              browserLang={this.state.browserLang}
              pageData={this.state.pageData}
            />
            <TwoImages
              browserLang={this.state.browserLang}
              pageData={this.state.pageData}
            />
            <Process
              browserLang={this.state.browserLang}
              pageData={this.state.pageData}
            />
            <RecentArticles
              browserLang={this.state.browserLang}
              pageData={this.state.pageData}
              postsData={this.state.postsData}
            />
            <Testimonials
              browserLang={this.state.browserLang}
              baseApiUrl={this.state.pageApiUrl}
              pageData={this.state.pageData}
            />
            <Partners
              browserLang={this.state.browserLang}
              pageData={this.state.pageData}
            />
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

ReactDOM.render(<Home />, document.getElementById("root"));
