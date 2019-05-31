import React from "react";
import Navbar from "../layout/Navbar";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Footer from "./Footer";
import Sidebar from "../layout/Sidebar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Works /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
