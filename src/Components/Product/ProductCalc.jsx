import React, { useState } from "react";
import { ProductPriceCalc } from "./ProductCalcStyle";
import { RadioGroup, Radio } from "rsuite";
import { useTranslation } from "react-i18next";
export const ProductCalc = ({ border, searchBar }) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState("");

  const calcHandler = (operator, stateName, setStateName) => {
    if (operator === "minus" && stateName > 0) setStateName(stateName - 1);
    if (operator === "plus") setStateName(stateName + 1);
  };
  const { t } = useTranslation();
  return (
    <ProductPriceCalc
      border={border}
      className="product-price-calc"
      style={searchBar && { height: 170 }}
    >
      <div
        className="product-price-calc-wrapper"
        style={searchBar && { height: 120 }}
      >
        <div className="product-price-calc-item">
          <p>{t("Взрослые.1")}</p>
          <div className="product-price-calc-btn-wrapper">
            <button
              className="product-price-calc-btn"
              onClick={() => calcHandler("minus", adults, setAdults)}
            >
              -
            </button>
            <p className="product-price-calc-output">{adults}</p>
            <button
              className="product-price-calc-btn"
              onClick={() => calcHandler("plus", adults, setAdults)}
            >
              +
            </button>
          </div>
        </div>
        <div className="product-price-calc-item">
          <p>{t("Дети.1")}</p>
          <div className="product-price-calc-btn-wrapper">
            <button
              className="product-price-calc-btn"
              onClick={() => calcHandler("minus", children, setChildren)}
            >
              -
            </button>
            <p className="product-price-calc-output">{children}</p>
            <button
              className="product-price-calc-btn"
              onClick={() => calcHandler("plus", children, setChildren)}
            >
              +
            </button>
          </div>
        </div>
        {searchBar ? (
          <div className="product-price-calc-item d-flex align-items-center">
            <p>{t("Питомцы.1")}</p>
            <div className="product-price-calc-btn-wrapper">
              <RadioGroup
                inline
                value={pets}
                onChange={(value) => setPets(value)}
              >
                <Radio value="A">{t("Есть.1")}</Radio>
                <Radio value="B">{t("Нет.1")}</Radio>
              </RadioGroup>
            </div>
          </div>
        ) : null}
      </div>
      <p className="product-price-calc-overall">
        {adults} {t("взрослых.1")} {t("и.1")} {children} {t("детей.1")}
      </p>
    </ProductPriceCalc>
  );
};
