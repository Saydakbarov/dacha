import React, { useState } from "react";
import Category from "./Category";
import {
  dachaImg,
  homeImg,
  hotelImg,
  resortImg,
  tourImg,
  extremeImg,
  dachaIcon,
  homeIcon,
  hotelIcon,
  resortIcon,
  tourIcon,
  extremeIcon,
} from "./images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

export const Categories = () => {
  const state = useSelector((state) => state);

  const { t } = useTranslation();

  return (
    <div className="category">
      <div
        className="container p-md-0"
        style={
          state.showModal
            ? {
                opacity: 0.3,
                transition: "opacity 0.3s",
              }
            : null
        }
      >
        <div className="row justify-content-between mb-md-4">
          <div className="col-md-4 col-xs-12">
            <Link to="/dachas">
              <Category
                className="category-card category-card-dacha"
                img={dachaImg}
                icon={dachaIcon}
                category={t("Дачи.1")}
              />
            </Link>
          </div>
          <div className="col-md-4 col-xs-12">
            <Link to="/apartments">
              <Category
                className="category-card category-card-home"
                img={homeImg}
                icon={homeIcon}
                category={t("Квартиры и дома.1")}
              />
            </Link>
          </div>
          <div className="col-md-4 col-xs-12">
            <Link to="/hotels">
              <Category
                className="category-card category-card-hotel"
                img={hotelImg}
                icon={hotelIcon}
                category={t("Гостиницы.1")}
              />
            </Link>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-4 col-xs-12">
            <Link to="resorts">
              <Category
                className="category-card category-card-resort"
                img={resortImg}
                icon={resortIcon}
                category={t("Курортные зоны.1")}
              />
            </Link>
          </div>
          <div className="col-md-4 col-xs-12">
            <Link to="tours">
              <Category
                className="category-card category-card-tour"
                img={tourImg}
                icon={tourIcon}
                category={t("Туры.1")}
              />
            </Link>
          </div>
          <div className="col-md-4 col-xs-12">
            <Link to="extreme">
              <Category
                className="category-card category-card-extreme"
                img={extremeImg}
                icon={extremeIcon}
                category={t("Экстрим.1")}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
