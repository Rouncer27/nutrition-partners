import React, { Component } from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import axios from "axios";

import utilities from "../../helpers/helpers";

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
    this.getPageData = this.getPageData.bind(this);
    this.getOptionsData = this.getOptionsData.bind(this);
    this.getPostsData = this.getPostsData.bind(this);
    this.getEnglishMenuItems = this.getEnglishMenuItems.bind(this);
    this.getFrenchMenuItems = this.getFrenchMenuItems.bind(this);
    this.getSiteSettings = this.getSiteSettings.bind(this);
    this.confirmToGetLocation = this.confirmToGetLocation.bind(this);
    this.noThankYou = this.noThankYou.bind(this);

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
      siteSettings: {},
      slides: [],
      activeSlider: "",
      activeQuebecSlider: "",
      askedPermission: false
    };
  }

  componentDidMount() {
    const pageID = document.querySelector(".swb-home-page").dataset.pageid;
    let sessionStart = sessionStorage.getItem("npWebLang");
    const apiBaseURL = utilities.setPageAPIURL();
    const askedAlready = sessionStorage.getItem("npPermission");
    const askedAlreadyBoo = askedAlready === "true";

    this.setState(
      prevState => {
        return {
          ...prevState,
          browserLang: sessionStart,
          pageApiUrl: apiBaseURL,
          pageID: pageID,
          askedPermission: askedAlreadyBoo
        };
      },
      () => {
        this.getSiteSettings();
        this.getPageData();
        this.getPostsData();
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
      .get(`${this.state.pageApiUrl}/wp-json/wp/v2/posts?_embed&per_page=3`)
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

  noThankYou() {
    let confirmed = true;
    sessionStorage.setItem("npPermission", confirmed);
    this.setState(prevState => {
      sessionStorage.setItem("npWebLocation", "default");
      return {
        ...prevState,
        userLocation: "default",
        askedPermission: true
      };
    });
  }

  confirmToGetLocation() {
    let confirmed = true;
    sessionStorage.setItem("npPermission", confirmed);
    this.setState(
      prevState => {
        return {
          ...prevState,
          askedPermission: true
        };
      },
      () => {
        this.setUserLocation();
      }
    );
  }

  // Get the users location. //
  setUserLocation() {
    const API_KEY = "8e2f5850676548cb8ad0de88a1813fe4";

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
    const askPermission = this.state.askedPermission;

    const renderComponent =
      Object.keys(this.state.pageData).length > 0 &&
      Object.keys(this.state.siteOptions).length > 0 &&
      Object.keys(this.state.siteMainEnglishMenu).length > 0 &&
      Object.keys(this.state.siteMainFrenchMenu).length > 0 &&
      Object.keys(this.state.siteSettings).length > 0 &&
      this.state.postsData.length > 0;

    return (
      <div className="np-page-root">
        {askPermission ? (
          renderComponent ? (
            <div>
              <Header
                browserLang={this.state.browserLang}
                switchTheLang={this.switchTheLang}
                pageData={this.state.pageData}
                siteMainEnglishMenu={this.state.siteMainEnglishMenu}
                siteMainFrenchMenu={this.state.siteMainFrenchMenu}
                siteSettings={this.state.siteSettings}
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
                siteSettings={this.state.siteSettings}
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
                siteSettings={this.state.siteSettings}
              />
            </div>
          ) : (
            <PageLoad />
          )
        ) : (
          <div className="np-permission">
            <div className="np-permission__container">
              <div className="np-permission__logos">
                <div className="np-permission__logos--en np-permission__logos--item" />
                <div className="np-permission__logos--fr np-permission__logos--item" />
              </div>
              <p>
                {this.state.browserLang === "fr"
                  ? "Notre nouveau site Web nutritionpartners.com utilise votre adresse IP pour déterminer votre emplacement. Nous faisons cela pour personnaliser le contenu en fonction de votre région. Il n'est pas nécessaire de consulter le site Web."
                  : "Our New website nutritionpartners.com uses your IP address to determine your location. We do this so we can customized the content to your region. It's not necessary to view the website."}
              </p>
              <button onClick={this.confirmToGetLocation}>
                {this.state.browserLang === "fr"
                  ? "Oui, utilisez mon adresse IP pour déterminer ma position."
                  : "Yes, use my IP address to determine my location."}
              </button>
              <button onClick={this.noThankYou}>
                {this.state.browserLang === "fr"
                  ? "Non, utilisez simplement les paramètres par défaut."
                  : "No, just use the default settings."}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
