import React, { Component } from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import axios from "axios";

import Mission from "./components/Mission";

export default class Home extends Component {
  constructor() {
    super();

    this.switchTheLang = this.switchTheLang.bind(this);
    this.setUserLocation = this.setUserLocation.bind(this);

    this.state = {
      browserLang: "",
      userLocation: ""
    };
  }

  componentWillMount() {
    let sessionStart = sessionStorage.getItem("npWebLang");
    this.setUserLocation();

    this.setState(prevState => {
      return {
        ...prevState,
        browserLang: sessionStart
      };
    });
  }

  setUserLocation() {
    const API_KEY = "8e2f5850676548cb8ad0de88a1813fe4";
    const sessionLocation = sessionStorage.getItem("npWebLocation");

    if (sessionLocation === null) {
      console.log("API Call!!");
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
                  userLocation: result.data.state_prov
                };
              });
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    } else {
      console.log("NO API CALL!");
      this.setState(prevState => {
        return {
          ...prevState,
          userLocation: sessionLocation
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
    const { browserLang } = this.state;
    return (
      <div>
        <p>The Lauguage for this person is {this.state.browserLang}</p>
        <p>The Location for this person is {this.state.userLocation}</p>
        {browserLang === "en" ? (
          <button onClick={this.switchTheLang}>French</button>
        ) : (
          <button onClick={this.switchTheLang}>English</button>
        )}
        <Mission currentLang={this.state.browserLang} />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
