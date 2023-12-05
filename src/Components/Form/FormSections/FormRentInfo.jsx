import React from "react";

import { SelectPickerJoy, InputMine } from "./FormPriceStyle";

import { useTranslation } from "react-i18next";

import { FormGroup, ControlLabel, FormControl, HelpBlock } from "rsuite";

const data = [
  {
    label: "Дача",
    value: "Дача",
    role: "User",
  },
  {
    label: "Квартира",
    value: "Квартира",
    role: "User",
  },

  {
    label: "Дом",
    value: "Дом",
    role: "User",
  },
];

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

const FormRentInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <h6 className="price-text mb-2">{t("Главная информация.1")}</h6>
      <div className="row mt-2">
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={SelectPickerJoy}
            label={t("Тип.1")}
            data={data}
            name="title"
            placeholder={t("Тип.1")}
            searchable={false}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            inputWidth="100%"
            type="text"
            name="area"
            label={t("Название (не объязательно).1")}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            type="number"
            name="countRoom"
            inputWidth="100%"
            label={t("Количество комнат.1")}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            type="number"
            name="totalArea"
            inputWidth="100%"
            label={t("Общее помощение.1")}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            type="number"
            name="singleBad"
            inputWidth="100%"
            label={
              <div style={{ display: "flex", flexDirection: "row" }}>
                {t("Одноместный спальни.1")}
                <p style={{ marginLeft: "5px" }}>
                  m<sup>2</sup>
                </p>
              </div>
            }
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            type="number"
            name="livingArea"
            inputWidth="100%"
            label={
              <div style={{ display: "flex", flexDirection: "row" }}>
                {t("Общее помощение.1")}
                <p style={{ marginLeft: "5px" }}>
                  m<sup>2</sup>
                </p>
              </div>
            }
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            type="number"
            inputWidth="100%"
            name="doubleBad"
            scrollable={false}
            label={t("Двухместный спальни.1")}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            type="number"
            inputWidth="100%"
            scrollable={false}
            name="hostCount"
            label={t("Количесвто гостей.1")}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(FormRentInfo);
