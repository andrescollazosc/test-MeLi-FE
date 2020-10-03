import React from "react";
import { API_CONSTANTS } from "../../constans/api.constants";
import { useFetch } from "../../hooks/useFetch";
import { AlertMessage } from "../AlertMessage/AlertMessage";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import { ProductCard } from "../ProductCard/ProductCard";
import { Spinner } from "../spinner/Spinner";

const API = { ...API_CONSTANTS.API };

export const ProductList = ({ seacrh }) => {
  const URL = `${API.URL}${API.END_POINTS.SEARCH}${seacrh}`;
  const { loading, data } = useFetch(URL);

  return (
    <div>
      <div>
        {loading ? (
          <div>
            <Spinner className="" />
          </div>
        ) : (data.result !== undefined) ? (
          <div>
            <CategoriesList categories={data.categories} />
            {data.result.map((data, i) => (
              <ProductCard key={i} data={data.items} />
            ))}
          </div>
        ) : (
          <AlertMessage />
        )}
      </div>
    </div>
  );
};
