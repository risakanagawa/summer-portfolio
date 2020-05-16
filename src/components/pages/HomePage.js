import React from "react";
import Navbar from "../layout/Navbar";
import Home from "./Home";
import About from "./About/About";
import Works from "./Works/Works";
import Footer from "./Footer/Footer";
import Sidebar from "../layout/Sidebar";
import  WorksContainer  from "./Works/WorksContainer";

const HomePage = () => {
  return (
    <div id='top'>
      <Navbar />
      <Home />
      <WorksContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
