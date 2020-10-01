import React from "react";
import { InputPrimary } from "../InputPrimary/InputPrimary";
import logo from "../../assets/images/Logo_ML.png";
import "./Header.scss";

export const Header = () => {
  const placeHolder = "Nunca dejes de buscar";

  return (
    <>
      <div className="header-container">
        <div className="header-container__logo-header">
          <img src={logo} alt='MeLi' />
        </div>
        <div className="header-container__input">
          <InputPrimary placeHolder={placeHolder}/>
        </div>
      </div>
    </>
  );
};
