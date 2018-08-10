import React from "react";
import classnames from "classnames";

const LauguageButton = ({ browserLang, switchTheLang }) => {
  return (
    <div className="np-langbtn">
      <button
        className={classnames("tgl-btn", {
          active: browserLang === "en"
        })}
        onClick={switchTheLang}
      />
    </div>
  );
};

export default LauguageButton;
