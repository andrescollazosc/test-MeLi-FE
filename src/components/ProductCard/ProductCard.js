import React from "react";
import "./product-card.scss";
import freeShippingLogo from "../../assets/images/ic_shipping.png";
import { Link } from "react-router-dom";

export const ProductCard = ({ data }) => {
  const element = data[0];

  return (
    <>
      <div className="card-wrapper">
        <div className="card-wrapper__product-card">
          <Link
            to={`/detalle-producto/${element.id}`}
            className="card-wrapper__product-container-image"
          >
            <img
              src={element.picture}
              alt={element.title}
              className="card-wrapper__product-image"
            />
          </Link>
          <div className="card-wrapper__product-detail">
            <div className="card-wrapper__product-value">
              $ {element.price.amount}
              {element.free_shipping && (
                <img
                  className="free-shipping-logo"
                  alt="logo"
                  src={freeShippingLogo}
                />
              )}
            </div>

            <div className="card-wrapper__product_description">
              {element.title}
            </div>
          </div>

          <div className="card-wrapper__city">{element.city}</div>
        </div>
      </div>
    </>
  );
};
