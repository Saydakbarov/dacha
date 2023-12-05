import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import { Label } from "Components/Label/Label";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import bed from "assets/images/bed.svg";
import pin from "assets/images/map-pin-small.svg";
import users from "assets/images/users.svg";

export const Card = (props) => {
  const [isLoading, setLoading] = useState(true);
  const width = window.innerWidth;
  const { t } = useTranslation();

  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
    setLoading(true);
  }, []);

  if (isLoading && width > 1140)
    return (
      <ContentLoader
        viewBox="0 0 290 328.33"
        width={290}
        height={328.33}
        speed={1.8}
        foregroundColor="#fafdff"
        backgroundColor="#f3f7fa"
      >
        <>
          <rect x="22" y="20" rx="8" ry="8" width="253" height="164.33" />
          <rect x="22" y="208" rx="3" ry="3" width="200" height="19" />
          <rect x="22" y="238" rx="3" ry="3" width="90" height="18" />
          <rect x="22" y="265" rx="3" ry="3" width="130" height="18" />
          <rect x="22" y="295" rx="3" ry="3" width="100" height="24" />
          <rect x="148" y="295" rx="5" ry="5" width="100" height="24" />
        </>
      </ContentLoader>
    );

  return (
    <div className="col-lg-3 p-0 col-md-6">
      <Link
        to={{
          pathname: `/dachas/joy/${props.id}`,
          state: {from: location?.pathname}
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, rotateY: 40 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ ease: "backOut", duration: 0.5 }}
        >
          <div className="card m-1">
            <div className="label-container">
              <Label recommended={props.recommended} />
              <Label superComfort={props.superComfort} />
              <Label superPrice={props.superPrice} />
            </div>
            <img src={props.img} alt="" className="card-img" />
            <div className="card-info">
              <h3 className="card-title">{props.name}</h3>
              <p className="card-price">
                {props.price} {t("сум.1")}
              </p>
              <p className="card-location d-flex align-items-center">
                <img className="mr-1" src={pin} alt="" />
                {props.location}
              </p>
              <p className="card-bedroom ">
                <img
                  style={{ height: 20 }}
                  src={bed}
                  alt="Кровать"
                  className="mr-1"
                />
                <span style={{ marginLeft: "8px" }}>
                  {props.beds + " "}
                  {props.beds === 1 ? t("спальня.1") : t("спальня.2")}
                </span>
              </p>
              <p className="card-guests">
                <img
                  style={{ height: 20 }}
                  src={users}
                  alt="Гости"
                  className="mr-1"
                />
                <span style={{ marginLeft: "5px" }}>
                  {props.hostCount}{" "}
                  {props.hostCount === 1 ? t("гостей.1") : t("гостей.2")}
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};
