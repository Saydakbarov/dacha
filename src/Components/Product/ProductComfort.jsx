import React from "react";
import { useTranslation } from "react-i18next";

import {
  WifiIcon,
  SwimIcon,
  AirIcon,
  TapchanIcon,
  TvIcon,
  GarajIcon,
  HeatingIcon,
  JakuziIcon,
  ShezlongiIcon,
  PingPongIcon,
  SecurityIcon,
  KitchenOutdoorsIcon,
  KitchenIndoorsIcon,
  BBQIcon,
  WaiterIcon,
  BilliardIcon,
  CameraIcon,
  CookIcon,
} from "./ProductImg";
export const ProductComfort = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div>
          <h4 className="section-heading-text">{t("Удобства.1")}</h4>
          <div className="pt-3">
            <ul>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={WifiIcon} alt="" />
                Wi-Fi
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={HeatingIcon} alt="" />
                {t("Отопление.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={AirIcon} alt="" />
                {t("Кондиционер.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={TvIcon} alt="" />
                {t("Телевизор.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={GarajIcon} alt="" />
                {t("Гараж.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={TapchanIcon} alt="" />
                {t("Тапчан.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={SecurityIcon} alt="" />
                {t("Охрана.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img
                  className="mr-2 comfort-icon"
                  src={KitchenOutdoorsIcon}
                  alt=""
                />
                {t("Летняя-кухня.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img
                  className="mr-2 comfort-icon"
                  src={KitchenIndoorsIcon}
                  alt=""
                />
                {t("Зимняя-кухня.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={SwimIcon} alt="" />
                {t("Зимний-бассейн.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={SwimIcon} alt="" />
                {t("Летний-бассейн.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={BBQIcon} alt="" />
                {t("Барбекью.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={WaiterIcon} alt="" />
                {t("Официант.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={CookIcon} alt="" />{" "}
                {t("Повар.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={PingPongIcon} alt="" />
                {t("Настольный теннис.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={BilliardIcon} alt="" />
                {t("Бильярд.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={ShezlongiIcon} alt="" />
                {t("Шезлонги.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={JakuziIcon} alt="" />
                {t("Жакузи.1")}
              </li>
              <li className="section-subheading-text py-2">
                <img className="mr-2 comfort-icon" src={CameraIcon} alt="" />
                {t("Видеонаблюдение.1")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
