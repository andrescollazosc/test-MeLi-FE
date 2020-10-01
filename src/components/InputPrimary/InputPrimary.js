import React from "react";
import searchLogo from "../../assets/images/ic_Search.png";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import "./input-container.scss";

export const InputPrimary = ({placeHolder}) => {
  const [formValues, handleInputChange] = useForm({
    valueText: "",
  });

  const { valueText } = formValues;

  return (
    <>
      <div className="container">
        <input
          className="container__input"
          placeholder={placeHolder}
          name="valueText"
          type="text"
          value={valueText}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <Link to={`/productos/${valueText}`}>
          <div className="container__icon">
            <img className="container__img" alt={'Buscar'} src={searchLogo} />
          </div>
        </Link>
      </div>
    </>
  );
};
