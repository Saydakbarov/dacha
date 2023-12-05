import React from "react";
import { InputMine, InputJoySecond } from "./FormPriceStyle";
import { FormGroup, ControlLabel, FormControl, InputGroup } from "rsuite";
import { useTranslation } from "react-i18next";

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
      <ControlLabel>{label}</ControlLabel>
      <InputJoySecond lineHeight="50px" width="70%" height="50px">
        {addon && <InputGroup.Addon>{addon}</InputGroup.Addon>}
        <FormControl
          name={name}
          accepter={accepter}
          errorMessage={error}
          {...props}
        />
      </InputJoySecond>
    </FormGroup>
  );
};

const FormContacts = () => {
  const { t } = useTranslation();
  return (
    <>
      <h6 className="price-text mb-2">{t("Контактная информация.1")}</h6>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="telNumber"
            placeholder="Введите номер"
            accepter={InputMine}
            label="Введите номер"
            type="tel"
            addon="+998"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="mail"
            placeholder="Электронная почта"
            type="mail"
            accepter={InputMine}
            label="Электронная почта"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="extraTelNumber"
            placeholder="Введите дополнительный номер"
            label="Введите дополнительный номер"
            accepter={InputMine}
            type="tel"
            addon="+998"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="telegram"
            placeholder="Ваш юзернейм"
            accepter={InputMine}
            label="Телеграм"
          />
        </div>
      </div>
    </>
  );
};

export default FormContacts;
