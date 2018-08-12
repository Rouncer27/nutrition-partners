import React, { Component } from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import axios from "axios";

import LauguageButton from "../../components/LauguageButton";
import Featured from "../../components/Featured";
import Mission from "../../components/Mission";
import TwoImages from "../../components/TwoImages";
import Process from "../../components/Process";
import RecentArticles from "../../components/RecentArticles";

export default class Home extends Component {
  constructor() {
    super();

    this.switchTheLang = this.switchTheLang.bind(this);
    this.setUserLocation = this.setUserLocation.bind(this);
    this.setPageAPIURL = this.setPageAPIURL.bind(this);
    this.getPageData = this.getPageData.bind(this);

    this.state = {
      browserLang: "",
      userLocation: "",
      pageApiUrl: "",
      pageID: "",
      pageData: {},
      postsData: {}
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

  componentWillMount() {
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
      }
    );
  }

  getPageData() {
    axios
      .get(`${this.state.pageApiUrl}/wp-json/wp/v2/pages/${this.state.pageID}`)
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
        );
      });
  }

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
    return (
      <div>
        <LauguageButton
          switchTheLang={this.switchTheLang}
          browserLang={this.state.browserLang}
        />
        <Featured
          browserLang={this.state.browserLang}
          userLocation={this.state.userLocation}
          baseApiUrl={this.state.pageApiUrl}
          pageID={this.state.pageID}
          pageData={this.state.pageData}
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
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
