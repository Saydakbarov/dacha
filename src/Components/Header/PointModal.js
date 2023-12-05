import React from "react";
import close from "assets/images/close.svg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  dachaIcon,
  homeIcon,
  hotelIcon,
  resortIcon,
} from "Components/Categories/images";

export const PointModal = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="point-modal" id="point-modal">
      <img
        className="point-close"
        src={close}
        alt="Закрыть"
        onClick={() => dispatch({ type: "close_modal" })}
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "15px",
          right: "15px",
        }}
      />
      <h2 className="point-heading">{t("Что вы хотите добавить?.1")}</h2>
      <div className="point-wrapper">
        <Link to="/add-dacha" onClick={handleCloseModal}>
          <div className="point-button point-button--dacha">
            <img className="point-icon" src={dachaIcon} alt="icon" />
            <p className="point-name">{t("Дачи.1")}</p>
          </div>
        </Link>
        <Link to="/add-apartment" onClick={handleCloseModal}>
          <div className="point-button point-button--home">
            <img className="point-icon" src={homeIcon} alt="icon" />
            <p className="point-name">{t("Квартиры и дома.1")}</p>
          </div>
        </Link>
        <Link to="/add-hotel" onClick={handleCloseModal}>
          <div className="point-button point-button--hotel">
            <img className="point-icon" src={hotelIcon} alt="icon" />
            <p className="point-name">{t("Гостиницы.1")}</p>
          </div>
        </Link>
        <Link to="/add-resort" onClick={handleCloseModal}>
          <div className="point-button point-button--resort">
            <img className="point-icon" src={resortIcon} alt="icon" />
            <p className="point-name">{t("Курортные зоны.1")}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
