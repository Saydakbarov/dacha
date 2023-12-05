import React from "react";
import { Input, Button } from "rsuite";
import { useTranslation } from "react-i18next";

export const ProductMsg = () => {
  const { t } = useTranslation();
  return (
    <div className="product-box2">
      <h4 className="section-heading-text mb-3">
        {t("Связаться с владельцом.1")}
      </h4>
      <Input
        componentClass="textarea"
        rows={5}
        style={{ width: "100%", resize: "none" }}
        placeholder={t("Оставьте своё сообщение.1")}
        className="mb-3"
      />
      <Button appearance="primary">{t("Отправить.1")}</Button>
    </div>
  );
};
