import React, { Component } from "react";
import "babel-polyfill";
import axios from "axios";
import classnames from "classnames";

const Process = props => {
  let acf = props.pageData.acf;
  const enTitle = acf ? acf._np_en_our_process_title : false;
  const frTitle = acf ? acf._np_fr_our_process_title : false;
  const enSteps = acf ? acf._np_en_steps : false;
  const frSteps = acf ? acf._np_fr_steps : false;
  const ourProcessTitle = props.browserLang === "en" ? enTitle : frTitle;
  const processDisplay = props.browserLang === "en" ? enSteps : frSteps;

  const siteURL = props.siteSettings ? props.siteSettings.url : "#";

  return (
    <div className="np-process">
      <div className="np-process__wrapper">
        {ourProcessTitle !== undefined && (
          <div className="np-process__title">
            <h2>{ourProcessTitle}</h2>
          </div>
        )}
        <div className="np-process__info">
          {processDisplay.length > 0 &&
            processDisplay.map((step, index) => {
              return (
                <div key={index} className="np-process__info--step">
                  <div
                    className={`np-process__info--icon np-process__info--icon--${
                      step.icon
                    }`}
                  >
                    <i />
                  </div>
                  <div className="np-process__info--number">
                    <p>{`${index + 1}.`}</p>
                  </div>
                  <div className="np-process__info--content">
                    <p>{step.content}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="np-process__btnlink">
          <a href={`${siteURL}/products/#np-our-process`}>
            Full Progressive Process
          </a>
        </div>
      </div>
      <div className="np-process__bgone" />
      <div className="np-process__bgtwo" />
    </div>
  );
};

export default Process;
