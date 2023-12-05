import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SmallHotel = ({ img, icon }) => {
  const { t } = useTranslation();
  return (
    <Link to="hotels">
      <div
        className="category-card category-card-hotel category-card-page"
        data-tilt
        data-tilt-max="8"
        data-tilt-speed="400"
        data-tilt-perspective="1000"
        data-tilt-glare
        data-tilt-max-glare="0.7"
        data-tilt-scale="1.12"
      >
        <img src={img} alt="" className="category-card-img" />
        <h3 className="category-card-heading">{t("Гостиницы.1")}</h3>
        <img src={icon} alt="" className="category-card-icon" />
      </div>
    </Link>
  );
};
