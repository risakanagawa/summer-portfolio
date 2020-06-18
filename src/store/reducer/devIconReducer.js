import React from "react";

import Html5 from "../../../public/img/icons/html5.svg";
import Sass from "../../../public/img/icons/sass.svg";
import Css3 from "../../../public/img/icons/css3.svg";
import Javascript from "../../../public/img/icons/javascript.svg";
import Jquery from "../../../public/img/icons/jquery.svg";
import ReactLogo from "../../../public/img/icons/react.svg";
import Redux from "../../../public/img/icons/redux.svg";
import Webpack from "../../../public/img/icons/webpack.svg";
import Nintendogamecube from "../../../public/img/icons/nintendoswitch.svg";


const initialState = [
  {
    svg: <Html5 />,
    name: "HTML",
  },
  {
    svg: <Sass />,
    name: "Sass",
  },
  {
    svg: <Css3 />,
    name: "CSS",
  },
  {
    svg: <Javascript />,
    name: "JavaScript",
  },
  {
    svg: <Jquery />,
    name: "jQuery",
  },
  {
    svg: <ReactLogo />,
    name: "React",
  },
  {
    svg: <Redux />,
    name: "Redux",
  },
  {
    svg: <Webpack />,
    name: "Webpack",
  },
  {
    svg: <Nintendogamecube />,
    name: "Switch",
  },
];

export default (state = initialState, action) => {
  return state;
};
