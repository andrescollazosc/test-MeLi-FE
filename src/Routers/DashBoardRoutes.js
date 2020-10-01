import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Initial } from "../containers/Initial/Initial";
import { ProductDetail } from "../containers/ProductDetail/ProductDetail";
import { Products } from "../containers/Products/Products";

export const DashBoardRoutes = () => {
  return (
    <>
      <Header />
      <div className="conatiner-main">
        <Switch>
          <Route exact path="/productos/:search">
            {Products}
          </Route>
          <Route exact path="/detalle-producto/:id">
            {ProductDetail}
          </Route>
          <Route exact path="/bienvenido">
            {Initial}
          </Route>

          <Redirect to="/bienvenido" />
        </Switch>
      </div>
    </>
  );
};
