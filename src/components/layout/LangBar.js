import React, { useState } from "react";
import { withTranslation } from "react-i18next";

const LangBar = ({ i18n }) => {
  console.log("lang", i18n.language);
  const [lang, setLang] = useState("ja");

  const handleClick = (e) => {
    const attribute = e.target.getAttribute("data-language");
    setLang(attribute);
  };

  return (
    <div className="langchange__bar">
      <h2
        className={lang === "ja" ? "active" : ""}
        data-language="ja"
        onClick={(e) => {
          handleClick(e);
          i18n.changeLanguage("ja");
        }}
      >
        JA
      </h2>
      /
      <h2
        data-language="en"
        className={lang === "en" ? "active" : ""}
        onClick={(e) => {
          handleClick(e);
          i18n.changeLanguage("en");
        }}
      >
        EN
      </h2>
    </div>
  );
};

export default withTranslation()(LangBar);
