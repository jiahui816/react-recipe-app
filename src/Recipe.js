import React from "react";
import "./Recipe.css";
import style from "./recipe.module.css";

function Recipe({ title, calories, img, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>{calories}</p>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img className={style.image} src={img} alt="" />
    </div>
  );
}

export default Recipe;
