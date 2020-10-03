import React from "react";
import "./categories.scss";

export const CategoriesList = ({ categories }) => {
  if (categories.length === 0) {
    return;
  }

  let stringCategories = "";
  const separator = " > ";
  const length = categories.length > 6 ? 6 : categories.length;

  for (let index = 0; index < length; index++) {
    stringCategories += `${categories[index].name} ${
      index !== (length - 1) ? separator : ""
    } `;
  }

  return (
    <div className="category-container">
      <span className="categories-list">{stringCategories}</span>
    </div>
  );
};
