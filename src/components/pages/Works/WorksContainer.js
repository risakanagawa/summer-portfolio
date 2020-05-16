import React from "react";
import Works from "./Works";
import CategoryNav from "./CategoryNav";

export default function WorksContainer() {
  return (
    <div id="portfolio" className="portfolio">
      <CategoryNav />
      <Works />
    </div>
  );
}
