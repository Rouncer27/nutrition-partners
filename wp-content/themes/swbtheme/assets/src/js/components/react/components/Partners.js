import React from "react";

import Partner from "./partner/Partner";

const Partners = props => {
  const acf = props.pageData.acf;
  const { browserLang } = props;

  const enTitle = acf._np_en_our_partners_title;
  const frTitle = acf._np_fr_our_partners_title;

  const ourPartnersTitle = browserLang === "en" ? enTitle : frTitle;

  const partnersLogos = acf._np_our_partners;

  console.log(partnersLogos);
  return (
    <div className="np-partners">
      <div className="np-partners__wrapper">
        <div className="np-partners__title">
          <h2>{ourPartnersTitle}</h2>
        </div>
        <div className="np-partners__logos">
          {partnersLogos.map(logo => {
            return <Partner key={logo.logo.id} logo={logo} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Partners;
