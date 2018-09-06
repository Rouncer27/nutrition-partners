import React from "react";

const ThreeColumns = props => {
  const columnsTitleEn = props.acf._np_3_columns_main_title_en;
  const columnsTitleFr = props.acf._np_3_columns_main_title_fr;
  const columnsTitle =
    props.browserLang === "en" ? columnsTitleEn : columnsTitleFr;

  const columnsPoultryEn = props.acf._np_poultry_content_en;
  const columnsPoultryFr = props.acf._np_poultry_content_fr;
  const columnsPoultry =
    props.browserLang === "en" ? columnsPoultryEn : columnsPoultryFr;

  const columnsSwineEn = props.acf._np_swine_content_en;
  const columnsSwineFr = props.acf._np_swine_content_fr;
  const columnsSwine =
    props.browserLang === "en" ? columnsSwineEn : columnsSwineFr;

  const columnsDairyEn = props.acf._np_dairy_content_en;
  const columnsDairyFr = props.acf._np_dairy_content_fr;
  const columnsDairy =
    props.browserLang === "en" ? columnsDairyEn : columnsDairyFr;

  return (
    <div className="np-columns">
      <div className="np-columns__wrapper">
        <div className="np-columns__title">
          <h2>{columnsTitle}</h2>
        </div>
        <div className="np-columns__column np-columns__poultry">
          <h3>Poultry</h3>
          <p>{columnsPoultry}</p>
        </div>
        <div className="np-columns__column np-columns__swine">
          <h3>Swine</h3>
          <p>{columnsSwine}</p>
        </div>
        <div className="np-columns__column np-columns__dairy">
          <h3>Dairy</h3>
          <p>{columnsDairy}</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumns;
