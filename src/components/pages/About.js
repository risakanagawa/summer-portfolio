import React from "react";
import Html5 from "../../../public/img/icons/html5.svg";
import Sass from "../../../public/img/icons/sass.svg";
import Css3 from "../../../public/img/icons/css3.svg";
import Javascript from "../../../public/img/icons/javascript.svg";
import Jquery from "../../../public/img/icons/jquery.svg";
import ReactLogo from "../../../public/img/icons/react.svg";
import Redux from "../../../public/img/icons/redux.svg";
import Webpack from "../../../public/img/icons/webpack.svg";
import Nintendogamecube from "../../../public/img/icons/nintendogamecube.svg";
import resume from "../../../public/document/resume.pdf";
import Me from "../../../public/img/me.jpg";
import Footer from "./Footer";
import Backbar from "../layout/Backbar";

const About = () => {
  return (
    <div className="about-container">
      <div id="about" className="about-me">
        <div className="about-img">
          <img src={Me} alt="my photo" />
        </div>
        <div className="about-description">
          <h2>RISA KANAGAWA</h2>
          <p>
            Hi, I am Risa from a ramen city in Japan and a front-end developer in Canada.
            I love combining things. My background is linguistics. I believe
            that not only technical or pratical skills, everything we've
            experienced in our life can be mixed up and result in great outcome
            together. I am really passionate about helping and building things
            coming out from just an idea to make people's lifes better. I code,
            sometimes design.
          </p>
          <div className="about-skills">
            <ul>
              <li>
                <Html5 className="dev-icon" />{" "}
              </li>
              <li>
                <Css3 className="dev-icon" />
              </li>
              <li>
                <Sass className="dev-icon" />
              </li>
              <li>
                <Javascript className="dev-icon" />
              </li>
              <li>
                <Jquery className="dev-icon" />
              </li>
              <li>
                <ReactLogo className="dev-icon" />
              </li>
              <li>
                <Redux className="dev-icon" />
              </li>
              <li>
                <Webpack className="dev-icon" />
              </li>
              <li>
                <Nintendogamecube className="dev-icon" />
              </li>
            </ul>
          </div>
          <a href={resume}>
            <button className="resume-btn resume-hover">RESUME</button>
          </a>
        </div>
      </div>
      <Backbar />
      <Footer />
    </div>
  );
};

export default About;
