import React from "react";
import { withTranslation } from "react-i18next";

const LangBar = ({ i18n }) => {
  return (
    <div className="langchange__bar">
      <h2 onClick={() => i18n.changeLanguage("ja")}>JA</h2>
      /
      <h2 onClick={() => i18n.changeLanguage("en")}>EN</h2>
    </div>
  );
};

export default withTranslation()(LangBar);
