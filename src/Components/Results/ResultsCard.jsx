import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import pin from "assets/images/map-pin-small.svg";
import {useLocation} from "react-router-dom"

const ResultsCard = ({
  img,
  name,
  price,
  locationMain,
  beds,
  guests,
  superPrice,
  superComfort,
  recommended,
  id,
}) => {
  const { t } = useTranslation();

  const location = useLocation();
  
  return (
    <Link to={{
      pathname: `/dachas/joy/${id}`,
      state: {from: location?.pathname}
    }}>
      <div className="results-card my-2">
        <img src={img} alt="" className="results-img" />
        <div className="results-info">
          <p className="results-text">{name}</p>
          <div className="results-location">
            <img src={pin} alt="" className="results-location-pin" />
            <p className="results-location-text">{locationMain}</p>
          </div>
          <ul
            className="results-card-list"
            style={{
              fontSize: 14,
              color: "#777",
              marginTop: 10,
            }}
          >
            <li className="results-card-item">
              {t("Гости.1")}: {guests}
            </li>
            <li className="results-card-item">
              {t("Комнаты.1")}: {beds}
            </li>
          </ul>
          <div className="results-price">
            {price} {t("сум.1")}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResultsCard;
