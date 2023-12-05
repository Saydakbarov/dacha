import React, { useMemo } from "react";
import { InputMine, SelectPickerJoy } from "./FormPriceStyle";
import { FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";
import { useTranslation } from "react-i18next";

const CustomField = ({ name, message, label, accepter, error, ...props }) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
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
const FormBankShyot = () => {
  const dataBranches = useMemo(
    () => [
      {
        label: "Chilonzor",
        value: 1,
      },
      {
        label: "Sergeli",
        value: 2,
      },
      {
        label: "Yunusobod",
        value: 3,
      },
      {
        label: "Shayxontoxur",
        value: 4,
      },
      {
        label: "Uchtepa",
        value: 5,
      },
      {
        label: "Bektemir",
        value: 6,
      },
      {
        label: "Qo'yliq",
        value: 7,
      },
    ],
    []
  );

  const data2 = useMemo(
    () => [
      {
        label: "Xalq Banki",
        value: "Xalq Banki",
        role: "User",
      },
      {
        label: "Visa",
        value: "Visa",
        role: "User",
      },
    ],
    []
  );
  const { t } = useTranslation();
  return (
    <>
      <div className="row mt-0">
        <div className="col-12 col-sm-12 col-md-8 d-flex">
          <CustomField
            label={t("Введите номер банковского счета.1")}
            placeholder="2201 0000 0000 0000"
            name="account"
            accepter={InputMine}
            inputWidth="260px"
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="inn"
            accepter={InputMine}
            placeholder={t("ИНН компании.1")}
            label={t("ИНН компании.1")}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="mfo"
            accepter={InputMine}
            placeholder={t("МФО.1")}
            label={t("МФО.1")}
            style={{ width: "100px" }}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="bank"
            data={data2}
            label={t("Банк.1")}
            placeholder={t("Выберите банк.1")}
            accepter={SelectPickerJoy}
            searchable={false}
          />
        </div>

        <div className="col-md-6 col-sm-12">
          <CustomField
            name="branch"
            data={dataBranches}
            label={t("Филиал.1")}
            placeholder={t("Выберите филиал.1")}
            accepter={SelectPickerJoy}
            searchable={false}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(FormBankShyot);
