import React from "react";
import { useTranslation } from "react-i18next";

import {
  DoorIcon,
  BedIcon,
  DoubleBIcon,
  FamilyIcon,
  ZaezdIcon,
  ViezdIcon,
} from "./ProductImg";

import { useSelector } from "react-redux";

export const ProductIntoInfo = () => {
  const { t } = useTranslation();

  const state = useSelector((state) => state.dacha.uniqueDachaData);

  const { doubleBad, countRoom, singleBad, hostCount } = state;
  return (
    <>
      <div className="product-grid-item product-info">
        <div>
          <div>
            <h4 className="section-heading-text">{t("Информация.1")}</h4>
            <div className="pt-3">
              <ul>
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={DoorIcon} alt="" />{" "}
                  {t("Комнаты.1")}: {countRoom}
                </li>
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={BedIcon} alt="" />
                  {t("односпальная.1")}: {singleBad}
                </li>
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={DoubleBIcon} alt="" />
                  {t("двуспальная.1")}: {doubleBad}
                </li>
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={FamilyIcon} alt="" />{" "}
                  {t("Гостей.1")}: {hostCount}
                </li>
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={ZaezdIcon} alt="" />{" "}
                  {t("Заезд после.1")}: 19:00
                </li>
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={ViezdIcon} alt="" />{" "}
                  {t("Выезд до.1")}: 17:30
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
