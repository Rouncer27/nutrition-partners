import React, { Component } from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import axios from "axios";

import LauguageButton from "../../components/LauguageButton";
import Featured from "../../components/Featured";
import Mission from "../../components/Mission";

export default class Home extends Component {
  constructor() {
    super();

    this.switchTheLang = this.switchTheLang.bind(this);
    this.setUserLocation = this.setUserLocation.bind(this);
    this.setPageAPIURL = this.setPageAPIURL.bind(this);

    this.state = {
      browserLang: "",
      userLocation: "",
      pageApiUrl: "",
      pageID: ""
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
    const pageID = document.querySelector(".swb-page").dataset.pageid;
    let sessionStart = sessionStorage.getItem("npWebLang");
    const apiBaseURL = this.setPageAPIURL();
    this.setUserLocation();

    this.setState(prevState => {
      return {
        ...prevState,
        browserLang: sessionStart,
        pageApiUrl: apiBaseURL,
        pageID: pageID
      };
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
        />

        <Mission
          browserLang={this.state.browserLang}
          baseApiUrl={this.state.pageApiUrl}
          pageID={this.state.pageID}
        />

        {/* <p>The Lauguage for this person is {this.state.browserLang}</p>
        <p>The Location for this person is {this.state.userLocation}</p> */}
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
