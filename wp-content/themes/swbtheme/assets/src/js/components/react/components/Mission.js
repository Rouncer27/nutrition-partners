import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";

export default class Mission extends Component {
  constructor(props) {
    super(props);
    this.getTheMission = this.getTheMission.bind(this);
    this.state = {
      missionTitleEn: "",
      missionContentEn: "",
      missionTitleFr: "",
      missionContentFr: ""
    };
  }

  componentDidMount() {
    axios
      .get(`${this.props.baseApiUrl}/wp-json/wp/v2/pages/${this.props.pageID}`)
      .then(result => {
        this.getTheMission(result.data);
      });
  }

  getTheMission(data) {
    const missionTitleEn = data.acf._np_en_our_mission_title
      ? data.acf._np_en_our_mission_title
      : "";
    const missionTitleFr = data.acf._np_fr_our_mission_title
      ? data.acf._np_fr_our_mission_title
      : "";
    const missionContentEn = data.acf._np_en_our_mission_content
      ? data.acf._np_en_our_mission_content
      : "";
    const missionContentFr = data.acf._np_fr_our_mission_content
      ? data.acf._np_fr_our_mission_content
      : "";

    this.setState(prevSate => ({
      missionTitleEn,
      missionContentEn,
      missionTitleFr,
      missionContentFr
    }));
  }

  render() {
    return (
      <div className="np-ourmiss">
        <div className="np-ourmiss__wrapper">
          <div className="np-ourmiss__title">
            <h2>
              {this.props.browserLang === "en"
                ? this.state.missionTitleEn
                : this.state.missionTitleFr}
            </h2>
          </div>

          <div
            className="np-ourmiss__content"
            dangerouslySetInnerHTML={{
              __html:
                this.props.browserLang === "en"
                  ? this.state.missionContentEn
                  : this.state.missionContentFr
            }}
          />
        </div>
      </div>
    );
  }
}
