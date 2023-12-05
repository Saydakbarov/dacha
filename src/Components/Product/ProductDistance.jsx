import React from "react";
import { useTranslation } from "react-i18next";
import { HospitalIcon, StoreIcon, GoogleMapIcon, MealIcon } from "./ProductImg";
export const ProductDistance = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="">
        <div className="product-box2">
          <h4 className="section-heading-text">{t("Расстояние.1")}</h4>
          <div className="pt-2">
            <ul>
              <li className="section-subheading-text py-2">
                <img className="mr-2" src={MealIcon} alt="" /> 1.2{" "}
                {t("км от ресторана.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2" src={HospitalIcon} alt="" />
                1.2 {t("км от больницы.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2" src={StoreIcon} alt="" /> 3.6{" "}
                {t("км от магазина.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2" src={GoogleMapIcon} alt="" /> 3.9{" "}
                {t("км от города.1")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
