import React, { Component } from "react";
import ReactDOM from "react-dom";

import Mission from "./components/Mission";

export default class Home extends Component {
  constructor() {
    super();

    this.switchTheLang = this.switchTheLang.bind(this);

    this.state = {
      browserLang: ""
    };
  }

  componentWillMount() {
    let sessionStart = sessionStorage.getItem("npWebLang");
    this.setState(prevState => {
      return {
        browserLang: sessionStart
      };
    });
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
