import React, { useState } from "react";
import Works from "./Works";
import CategoryNav from "./CategoryNav";

export default function WorksContainer() {
  const [category, setCategory] = useState("all");
  const toggleCategory = (category) => {
    console.log(category);
    setCategory(category);
  };
  return (
    <div id="portfolio" className="portfolio">
      <CategoryNav category={category} toggleCategory={toggleCategory} />
      <Works category={category} />
    </div>
  );
}
