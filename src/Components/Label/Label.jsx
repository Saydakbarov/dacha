import React from "react";
import { useTranslation } from "react-i18next";

export const Label = ({ recommended, superComfort, superPrice }) => {
  const { t } = useTranslation();
  return (
    <>
      {recommended ? (
        <div className="label label-recommended">{t("Рекомендуем.1")}</div>
      ) : superComfort ? (
        <div className="label label-comfort">{t("Супер комфорт.1")}</div>
      ) : superPrice ? (
        <div className="label label-price">{t("Супер цена.1")}</div>
      ) : null}
    </>
  );
};
