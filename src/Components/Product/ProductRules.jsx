import Family from "Components/SvgIcons/Family";
import { useTranslation } from "react-i18next";
import React from "react";
import {
  SmokingIcon,
  AnimalsIcon,
  MusicIcon,
  AlcoholIcon,
  FamilyIcon,
  PartyRest,
} from "./ProductImg";

import { useSelector } from "react-redux";

export const ProductRules = () => {
  const { t } = useTranslation();

  const state = useSelector((state) => state.dacha.uniqueDachaData);

  const { alcohol, animal, loudlyMusic, onlyFamily, party, smoking } = state;

  return (
    <div>
      <div>
        <div className="product-box2">
          <h4 className="section-heading-text">{t("Правила.1")}</h4>
          <div className="pt-3">
            <ul>
              {!smoking && (
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={SmokingIcon} alt="" />
                  {t("Курение разрешено.1")}: {t("Нет.1")}
                </li>
              )}

              {!alcohol && (
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={AlcoholIcon} alt="" />
                  {t("Алькогольные напитки.1")}: {t("Нет.1")}
                </li>
              )}

              {!animal && (
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={AnimalsIcon} alt="" /> Домашние
                  {t("Животные разрешены.1")}: {t("Нет.1")}
                </li>
              )}

              {!party && (
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={PartyRest} alt="" />
                  {t("Вечеринки разрешены.1")}: {t("Нет.1")}
                </li>
              )}

              {!loudlyMusic && (
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={MusicIcon} alt="" />
                  {t("Громкая музыка.1")}: {t("Нет.1")}
                </li>
              )}

              {!onlyFamily && (
                <li className="section-subheading-text py-2">
                  <img className="mr-2" src={FamilyIcon} alt="" />
                  {t("Гости не являющаяся членами семьи.1")}: {t("Нет.1")}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
