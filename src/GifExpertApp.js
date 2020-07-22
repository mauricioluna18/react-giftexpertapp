import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrig } from "./components/GifGrig";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  // const handleAdd = () => {
  //   // setCategories([...categories, "HunterXHunter"]);
  //   setCategories((cats) => [...cats, "HunterXHunter"]);
  // };
  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrig key={category} category={category} />
        ))}
      </ol>
    </Fragment>
  );
};
