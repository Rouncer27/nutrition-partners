import React from "react";

const LocationMaps = props => {
  const maps = props.acf._np_location_maps;
  const lang = props.browserLang;

  return (
    <div className="np-maps">
      <div className="np-maps__wrapper">
        <div className="np-maps__content">
          {maps.map((map, index) => {
            const mapURL =
              lang === "en" ? map.google_map_url_en : map.google_map_url_fr;
            const mapImgSrc =
              lang === "en"
                ? map.screen_shot_en.sizes.contained
                : map.screen_shot_fr.sizes.contained;
            const mapTitle =
              lang === "en" ? map.location_title_en : map.location_title_fr;
            const mapCity =
              lang === "en" ? map.city_province_en : map.city_province_fr;
            const mapStreet =
              lang === "en" ? map.street_address_en : map.street_address_fr;
            const mapPhone = lang === "en" ? map.phone_en : map.phone_fr;

            const phoneLabel = lang === "en" ? "Phone" : "Tél";

            return (
              <div key={index} className="np-maps__location">
                <div className="np-maps__location--image">
                  <a target="_blank" href={mapURL}>
                    <img src={mapImgSrc} alt="Location" />
                  </a>
                </div>
                <div className="np-maps__location--title">
                  <h3>{mapTitle}</h3>
                </div>
                <div className="np-maps__location--address">
                  <p>{mapCity}</p>
                  <p>{mapStreet}</p>
                </div>
                <div className="np-maps__location--contact">
                  <p>
                    {phoneLabel}: <a href={`tel:1+${mapPhone}`}>{mapPhone}</a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationMaps;
