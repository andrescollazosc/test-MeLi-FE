import React from "react";
import { ProductList } from "../../components/ProductList/ProductList";

export const Products = ({history}) => {
  if (!history) {
    return;
  }
  const params = history.location.pathname.split('/');
  const search = params[params.length - 1];

  return (
    <div>
      <ProductList seacrh={search} />
    </div>
  );
};
