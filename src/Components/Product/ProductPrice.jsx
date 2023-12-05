import React from "react";
import { ProductCalc } from "./ProductCalc";
import { Link } from "react-router-dom";
import { DatePickerJoy } from "./ProductStyle";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const ProductPrice = () => {
  const { t } = useTranslation();

  const state = useSelector((state) => state.dacha.uniqueDachaData);

  const { price } = state;
  return (
    <div>
      <p className="product-price-label mb-3">
        {price} 5 000 000 {t("сум.1")}
      </p>
      {/* <div className="product-price-date mb-3"> */}
      <DatePickerJoy
        placeholder={t("Вьезд-Выезд.1")}
        className="primary-color mb-3"
        format="DD-MM"
        size="lg"
        preventOverflow
        showOneCalendar
      />
      {/* </div> */}
      <ProductCalc border="2px solid #f0f0f0" />
      <div className="product-price-label-wrapper">
        <p className="product-price-label-bottom">{t("Цена.1")}:</p>
        <p className="product-price-value">
          {price} 5 000 000 {t("сум.1")}
        </p>
      </div>
      <div className="product-price-btn-wrapper">
        <Link to="/booking">
          <button className="product-price-btn btn-fill product-btn2 mt-3">
            {t("Забронировать.1")}
          </button>
        </Link>
      </div>
    </div>
  );
};
