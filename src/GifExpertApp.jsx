import React, { useState } from "react";
import { AddCategory2, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);
  // const onAddCategory = () => {
  //   // setCategories([...categories, "Hola Mundo"]);
  //   setCategories((cat) => ["Valorant", ...categories]);
  // };

  //segunda prueba
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // console.log(newCategory);
    //setCategories([newCategory, ...categories]);
    setCategories([newCategory]);
  };
  // console.log(categories);
  return (
    <>
      <h1>GitExpertApp</h1>
      {/* <AddCategory setCategories={setCategories} /> */}
      <AddCategory2 onNewCategory={(value) => onAddCategory(value)} />
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
