import React from "react";
import { API_CONSTANTS } from "../../constans/api.constants";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../ProductCard/ProductCard";
import { Spinner } from "../spinner/Spinner";

const API = { ...API_CONSTANTS.API };

export const ProductList = ({ seacrh }) => {
  const URL = `${API.URL}products/${seacrh}`;
  const { loading, data } = useFetch(URL);

  return (
    <div>
      <div>
        {loading ? (
          <div>
            <Spinner className="" />
          </div>
        ) : Object.entries(data).length !== 0 ? (
          data.map((data, i) => <ProductCard key={i} data={data.items} />)
        ) : (
          <div>Oops...Ocurrio un error en la busqueda</div>
        )}
      </div>
    </div>
  );
};
