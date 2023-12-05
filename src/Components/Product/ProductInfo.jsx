import React from "react";
import { ProductPrice } from "./ProductPrice";
import { ProductComfort } from "./ProductComfort";
import { ProductRules } from "./ProductRules";
import { ProductDistance } from "./ProductDistance";
import { ProductIntoInfo } from "./ProductIntoInfo";
import { ProductMsg } from "./ProductMsg";
import ProductMap from "./ProductMap";

export const ProductInfo = () => {
  return (
    <>
      <div className="product-container">
        <div className="product-grid-container">
          <ProductIntoInfo />
          <div className="product-grid-item product-comfort">
            <ProductComfort />
          </div>
          <div className="product-grid-item product-price">
            <ProductPrice border="2px solid black" />
          </div>
          <div className="product-grid-item product-rules">
            <ProductRules />
          </div>
          <div
            className="product-grid-item product-map"
            style={{ height: "500px" }}
          >
            <div className="product-map">
              <div className="row p-0 m-0">
                <div className="col-12 p-0 m-0">
                  <ProductMap />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ height: "500px" }}
            className="product-grid-item product-distance"
          >
            <ProductDistance />
          </div>
          <div className="product-grid-item product-msg">
            <ProductMsg />
          </div>
        </div>
      </div>
    </>
  );
};
