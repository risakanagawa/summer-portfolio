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


const initialState = [
  {
    svg: <Html5 />,
    name: "html5",
  },
  {
    svg: <Sass />,
    name: "sass",
  },
  {
    svg: <Css3 />,
    name: "css3",
  },
  {
    svg: <Javascript />,
    name: "javascript",
  },
  {
    svg: <Jquery />,
    name: "jquery",
  },
  {
    svg: <ReactLogo />,
    name: "react",
  },
  {
    svg: <Redux />,
    name: "redux",
  },
  {
    svg: <Webpack />,
    name: "webpack",
  },
  {
    svg: <Nintendogamecube />,
    name: "gamecube",
  },
];

export default (state = initialState, action) => {
  return state;
};
