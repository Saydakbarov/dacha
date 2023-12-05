import React from "react";
import { FormGroup, ControlLabel, FormControl, HelpBlock } from "rsuite";
import { InputMine, DatePickerJoy } from "./FormPriceStyle";
import { addDays } from "date-fns";

import { useTranslation } from "react-i18next";

const CustomField = ({ name, message, label, accepter, error, ...props }) => {
  return (
    <FormGroup>
      <ControlLabel>{label} </ControlLabel>
      <FormControl
        name={name}
        accepter={accepter}
        errorMessage={error}
        {...props}
      />
      <HelpBlock>{message}</HelpBlock>
    </FormGroup>
  );
};

const FormArenda = () => {
  const { t } = useTranslation();
  return (
    <>
      <h6 className="price-text mb-2">{t("Информация об арендаторе.1")}</h6>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="serialNumber"
            placeholder={t("Серия и номер паспорта.1")}
            label={t("Серия и номер паспорта.1")}
            accepter={InputMine}
            inputWidth="100%"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="givenPlace"
            placeholder={t("Кем выдан.1")}
            label={t("Кем выдан.1")}
            accepter={InputMine}
            inputWidth="100%"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="givenDate"
            placeholder={t("Когда выдан.1")}
            label={t("Когда выдан.1")}
            accepter={DatePickerJoy}
            oneTap
            ranges={[
              {
                label: t("Вчера.1"),
                value: addDays(new Date(), -1),
              },
              {
                label: t("Сегодня.1"),
                value: new Date(),
              },
              {
                label: t("Завтра.1"),
                value: addDays(new Date(), 1),
              },
            ]}
            style={{ width: "252px" }}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="passportValidDate"
            placeholder={t("Действует до.1")}
            label={t("Действует до.1")}
            accepter={DatePickerJoy}
            oneTap
            ranges={[
              {
                label: t("Вчера.1"),
                value: addDays(new Date(), -1),
              },
              {
                label: t("Сегодня.1"),
                value: new Date(),
              },
              {
                label: t("Завтра.1"),
                value: addDays(new Date(), 1),
              },
            ]}
            style={{ width: "252px" }}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(FormArenda);
