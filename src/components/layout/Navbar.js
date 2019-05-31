import React from "react";
import { Link } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/about' >ABOUT</Link></li>
        <li><AnchorLink href='#footer' >CONTACT</AnchorLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
