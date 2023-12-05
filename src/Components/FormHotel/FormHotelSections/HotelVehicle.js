import React from "react";
import { useTranslation } from "react-i18next";
import { FormGroup, ControlLabel, FormControl, InputGroup } from "rsuite";
import {
  InputJoySecond,
  InputMine,
} from "Components/Form/FormSections/FormPriceStyle";

const CustomField = ({
  name,
  message,
  label,
  accepter,
  addon,
  error,
  ...props
}) => {
  return (
    <FormGroup>
      <ControlLabel>{label} </ControlLabel>
      <InputJoySecond lineHeight="20px" width="100%" height="54px">
        <FormControl
          name={name}
          accepter={accepter}
          errorMessage={error}
          {...props}
        />
        {addon && <InputGroup.Addon>{addon}</InputGroup.Addon>}
      </InputJoySecond>
    </FormGroup>
  );
};

const HotelVehicle = () => {
  const { t } = useTranslation();
  return (
    <>
      <h6 className="price-text mb-2 mt-3">{t("Транспорт.1")}</h6>
      <div className="row mt-2">
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            inputWidth="100%"
            type="text"
            addon={t("Cумов.1")}
            name="fromAirport"
            label={t("Забрать из аэропорт.1")}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            inputWidth="100%"
            type="text"
            addon={t("Cумов.1")}
            name="toAirport"
            label={t("Отвезти в аэропорт.1")}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(HotelVehicle);
