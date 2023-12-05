import React from "react";
import { FormGroup, ControlLabel, InputGroup, FormControl } from "rsuite";
import {
  InputJoySecond,
  InputMine,
  DatePickerJoy,
} from "Components/Form/FormSections/FormPriceStyle";
import { useTranslation } from "react-i18next";
import { addDays } from "date-fns";

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

const InformationOfOwner = () => {
  const { t } = useTranslation();
  return (
    <>
      <h6 className="price-text mb-2 mt-3">{t("Информация о директоре.1")}</h6>
      <div className="row mt-2">
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            inputWidth="100%"
            type="text"
            name="firstName"
            label={t("Имя.1")}
            placeholder={t("Имя.1")}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            inputWidth="100%"
            type="text"
            name="surName"
            label={t("Фамилия.1")}
            placeholder={t("Фамилия.1")}
          />
        </div>
      </div>
      <div className="row mt-2">
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
        <div className="col-md-6 col-sm-8">
          <CustomField
            name="givenDate"
            placeholder={t("Когда выдан.1")}
            label={t("Когда выдан.1")}
            accepter={DatePickerJoy}
            placement="auto"
            oneTap
            dateWidth="100%"
            dateHeight="100%"
            pickerHeight="100%"
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
        <div className="col-md-6 col-sm-8">
          <CustomField
            name="passportValidDate"
            placeholder={t("Действует до.1")}
            label={t("Действует до.1")}
            accepter={DatePickerJoy}
            dateWidth="100%"
            dateHeight="100%"
            pickerHeight="100%"
            placement="auto"
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

export default React.memo(InformationOfOwner);
