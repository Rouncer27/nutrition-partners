import React from "react";
import classnames from "classnames";

const LauguageButton = ({ browserLang, switchTheLang }) => {
  const lang = browserLang === "en" ? false : true;
  return (
    <div className="np-langbtn">
      <label>
        English / French
        <input
          type="checkbox"
          className="ios-switch green bigswitch"
          onChange={switchTheLang}
          checked={lang}
        />
        <div>
          <div />
        </div>
      </label>
    </div>
  );
};

export default LauguageButton;
