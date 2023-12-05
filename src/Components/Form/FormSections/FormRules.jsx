import React from "react";

import { useTranslation } from "react-i18next";

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  RadioGroup,
  Radio,
} from "rsuite";

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
const FormRules = () => {
  const { t } = useTranslation();

  return (
    <>
      <h6 className="price-text mb-2 mt-3">{t("Правила.1")}</h6>
      <div className="row mt-2">
        <div className="col-6">
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
        <div className="col-6">
          <CustomField
            name="alcohol"
            accepter={RadioGroup}
            label={t("Разрешить алькоголь.1")}
            inline
          >
            <Radio value={true}>{t("Да.1")}</Radio>
            <Radio value={false}>{t("Нет.1")}</Radio>
          </CustomField>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
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
        <div className="col-6">
          <CustomField
            name="onlyFamily"
            accepter={RadioGroup}
            label={t("Разрешить только семей.1")}
            inline
          >
            <Radio value={true}>{t("Да.1")}</Radio>
            <Radio value={false}>{t("Нет.1")}</Radio>
          </CustomField>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <CustomField
            name="loudlyMusic"
            accepter={RadioGroup}
            label={t("Разрешить громкую музыку.1")}
            inline
          >
            <Radio value={true}>{t("Да.1")}</Radio>
            <Radio value={false}>{t("Нет.1")}</Radio>
          </CustomField>
        </div>
        <div className="col-6">
          <CustomField
            name="party"
            accepter={RadioGroup}
            label={t("Разрешить вечеринок.1")}
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

export default React.memo(FormRules);
