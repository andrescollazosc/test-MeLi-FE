import React from "react";
import { ButtonPrimary } from "../button/ButtonPrimary";
import "./product-detail-card.scss";

export const ProductDetailCard = ({
  id,
  title,
  price,
  picture,
  condition,
  free_shipping,
  sold_quantity,
  description
}) => {
  return (
    <div className="product-detail-card">
      <div className="box-left">
        <div className="box-left__box-image">
          <img 
            src={picture}
            alt={title}
            className="box-left__img" />
        </div>

        <div className="box-left__produc-desc">Descripción del producto</div>

        <p className="box-left__text">
          {description}
        </p>
      </div>

      <div className="box-right">
        <div className="box-right__products-sold">Nuevo - {sold_quantity} vendidos</div>
        <div className="box-right__product-desc">
          {title}
        </div>
        <div className="box-right__product-values">$ { (price) ? price.amount : ''}   </div>
        <div>
          <ButtonPrimary buttonLabel="Comprar" />
        </div>
      </div>
    </div>
  );
};
