import { InputJoySecond } from "Components/Form/FormSections/FormPriceStyle";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "rsuite";

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
      <FormControl
        name={name}
        accepter={accepter}
        errorMessage={error}
        {...props}
      />
    </FormGroup>
  );
};

const HotelRules = () => {
  const { t } = useTranslation();

  return (
    <>
      <h6 className="price-text mb-2 mt-3">{t("Правила.1")}</h6>

      <div className="row mt-2">
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="smoking"
            accepter={RadioGroup}
            label={t("Разрешить курение.1")}
            inline
          >
            <Radio value={true}>{t("Да.1")}</Radio>
            <Radio value={false}>{t("Нет.1")}</Radio>
          </CustomField>
        </div>
        <div className="col-md-6">
          <CustomField
            name="animal"
            accepter={RadioGroup}
            label={t("Разрешить домашних животных.1")}
            inline
          >
            <Radio value={true}>{t("Да.1")}</Radio>
            <Radio value={false}>{t("Нет.1")}</Radio>
          </CustomField>
        </div>
      </div>
    </>
  );
};

export default React.memo(HotelRules);
