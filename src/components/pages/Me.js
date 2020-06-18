import React from "react";
import { Link } from "react-router-dom";

import me from "../../../public/img/me2.jpg";

const Me = () => {
  return (
    <div className="me">
        <h1>#Me</h1>
      <div className="me__inner">
        <div className="me__container">
          <div className="me__container--left">
            <img src={me} alt="me" />
            <h2>RISA KANAGAWA </h2>
            <h2>/ 金川　理沙</h2>
            <h2>Frontend engineer 💻 </h2>
          </div>
          <div className="me__container--right">
            <p>
              I am a frontend engineer who is passionate about UI development
              and a cup of coffee.
            </p>
            <p>現在福岡在住のフロントエンドエンジニアです。</p>
            <p>🍜Currently in Fukuoka</p>

            <button className="btn btn-hover"><Link to='/about' >MORE ABOUT RISA</ Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
