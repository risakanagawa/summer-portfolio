import React from "react";
import { Link } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Navigation.scss"

const Navbar = () => {
  return (
    <nav>
      <ul>
      <li><AnchorLink href='#portfolio' >PORTFOLIO</AnchorLink></li>
        <li><Link to='/about' >ABOUT</Link></li>
        <li><AnchorLink href='#footer' >CONTACT</AnchorLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
