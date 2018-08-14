import React from "react";

const Partner = props => {
  let logoDisplay = (
    <img src={props.logo.logo.sizes.contained} alt={props.logo.logo.alt} />
  );
  if (props.logo.url !== "") {
    logoDisplay = (
      <a target="_blank" href={props.logo.url}>
        <img src={props.logo.logo.sizes.contained} alt={props.logo.logo.alt} />
      </a>
    );
  }
  return <div className="np-partners__logos--logo">{logoDisplay}</div>;
};

export default Partner;
