import React from "react";
import { Link } from 'react-router-dom';
import Github from "../../../public/img/icons/github.svg";
import LinkedIn from "../../../public/img/icons/linkedin.svg";
import Insta from "../../../public/img/icons/instagram.svg";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/about' >ABOUT</Link></li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
