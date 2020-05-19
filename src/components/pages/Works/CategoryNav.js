import React from "react";

const listCategories = ["all", "development", "design"];

const CategoryNav = ({toggleCategory, category}) => {

  const handleClick = (e) => {
    const attribute = e.target.getAttribute("data-category");
    toggleCategory(attribute)
  }

  const categoryList = listCategories.map((listCategory, idx)=> {
    const style = listCategory === category ? "active" : "";
    return <li className={style} key={idx} data-category={listCategory} onClick={(e) =>handleClick(e)　}>{listCategory}</li> 
  })

  return (
    <div className="portfolio__stickey">
      <h1>Portfolio</h1>
      <div className="portfolio__nav">
        <ul>
          {categoryList}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(CategoryNav)