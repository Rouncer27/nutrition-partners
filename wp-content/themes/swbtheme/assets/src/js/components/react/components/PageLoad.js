import React, { Component } from "react";
import { ScaleLoader } from "react-spinners";

class PageLoad extends Component {
  render() {
    return (
      <div className="np-pageloading">
        <div className="np-pageloading__wrapper">
          <div className="np-pageloading__title">
            <h1>Loading</h1>
          </div>
          <div className="np-pageloading__wave">
            <ScaleLoader
              sizeUnit={"px"}
              size={150}
              color={"#ef6a23"}
              loading={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PageLoad;
