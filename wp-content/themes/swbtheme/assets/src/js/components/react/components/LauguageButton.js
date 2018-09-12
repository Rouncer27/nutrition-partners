import React from "react";
import classnames from "classnames";

const LauguageButton = ({ browserLang, switchTheLang }) => {
  return (
    <div className="np-langbtn">
      {/* <button
        className={classnames("tgl-btn", {
          active: browserLang === "en"
        })}
        onClick={switchTheLang}
      /> */}
      <label>
        English / French
        <input
          type="checkbox"
          className="ios-switch green  bigswitch"
          onChange={switchTheLang}
        />
        <div>
          <div />
        </div>
      </label>
    </div>
  );
};

export default LauguageButton;
