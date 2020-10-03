import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { ProductDetailCard } from "../ProductDetailCard/ProductDetailCard";
import { API_CONSTANTS } from "../../constans/api.constants";
import { Spinner } from "../spinner/Spinner";

const API = { ...API_CONSTANTS.API };

export const ProductDetailSummary = ({ id }) => {
  const URL = `${API.URL}${ API.END_POINTS.PRODUCT_BY_ID }${id}`;

  const { loading, data } = useFetch(URL);

  return (
    <div>{loading ? <Spinner /> : <ProductDetailCard {...data.item} />}</div>
  );
};
