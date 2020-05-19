import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import resume from "../../../../public/document/resume.pdf";
import Me from "../../../../public/img/me.jpg";
import Footer from "../Footer/Footer";
import Backbar from "../../layout/Backbar";
import LangBar from "../../layout/LangBar";


import "./About.scss";

const About = ({ icons }) => {
  const [t, i18n] = useTranslation();

  return (
    <div className="about-container">
      <div id="about" className="aboutme">
        <div className="aboutme__img">
          <img src={Me} alt="my photo" />
        </div>
        <div className="aboutme__description">
          <h2>RISA KANAGAWA</h2>
          <div className={`card`}>
            <p>{t("greet")}</p>
          </div>
          <div className="aboutme__description--skills">
            <ul>
              {icons.map((icon, index) => {
                return <li key={index}>{icon.svg}</li>;
              })}
            </ul>
          </div>
          <a href={resume}>
            <button className="btn btn-hover">{t("resume")}</button>
          </a>
        </div>
      </div>
      <LangBar />
      <Backbar />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    icons: state.devIcons,
  };
};

export default connect(mapStateToProps)(About);
