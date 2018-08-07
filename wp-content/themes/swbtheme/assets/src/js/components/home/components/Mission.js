import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";

export default class Mission extends Component {
  constructor() {
    super();

    this.getTheMission = this.getTheMission.bind(this);

    this.state = {
      missionEnglish: "",
      missionFrench: ""
    };
  }

  componentDidMount() {
    const pageID = document.querySelector(".swb-page").dataset.pageid;
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

    axios.get(`${URL}/wp-json/wp/v2/pages/${pageID}`).then(result => {
      console.log(result.data);
      this.getTheMission(result.data);
    });

    console.log(URL);
  }

  getTheMission(data) {
    const missionEnglish = data.acf._np_en_english_content;
    const missionFrench = data.acf._np_fr_french_content;
    this.setState(prevState => {
      return {
        missionEnglish: missionEnglish,
        missionFrench: missionFrench
      };
    });
  }

  render() {
    return (
      <div>
        <p>
          {this.props.currentLang === "en"
            ? this.state.missionEnglish
            : this.state.missionFrench}
        </p>
      </div>
    );
  }
}
