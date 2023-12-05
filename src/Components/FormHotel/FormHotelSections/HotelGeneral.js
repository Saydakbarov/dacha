import React from "react";
import { FormGroup, ControlLabel, FormControl, HelpBlock } from "rsuite";
import { useTranslation } from "react-i18next";
import { InputMine } from "Components/Form/FormSections/FormPriceStyle";
import HotelAddress from "./HotelAddress";

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

const HotelGeneral = () => {
  const { t } = useTranslation();
  return (
    <>
      <h6 className="price-text mb-2">{t("Главная информация.1")}</h6>
      <div className="row mt-2">
        <div className="col-12">
          <CustomField
            accepter={InputMine}
            inputWidth="100%"
            type="text"
            name="areaName"
            label={t("Название (не объязательно).1")}
          />
        </div>
      </div>
      <div className="row px-3">
        <HotelAddress />
      </div>
    </>
  );
};

export default React.memo(HotelGeneral);
