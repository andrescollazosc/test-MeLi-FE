import React from "react";
import { ProductDetailSummary } from "../../components/ProductDetailSummary/ProductDetailSummary";

export const ProductDetail = ({history}) => {
  if (!history) {
    return;
  }
  const params = history.location.pathname.split('/');
  const id = params[params.length - 1];

  return (
    <div>
      <ProductDetailSummary id={id}/>
    </div>
  );
};
