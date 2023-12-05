import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { FormGroup, ControlLabel, InputGroup, FormControl } from "rsuite";
import { SelectPickerJoy, InputJoySecond } from "./FormPriceStyle";

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
      <InputJoySecond lineHeight="50px" width="100%" height="50px">
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
// <HelpBlock>{message}</HelpBlock>

const FormPrice = () => {
  const { t } = useTranslation();
  const data = useMemo(
    () => [
      {
        label: "10%",
        value: 10,
      },
      {
        label: "20%",
        value: 20,
      },
    ],
    []
  );

  return (
    <>
      <h6 className="price-text mb-2">{t("Цена.1")}</h6>
      <div className="row pb-4">
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="price"
            addon={t("Cумов.1")}
            type="number"
            label={t("Обычная цена за сутки.1")}
          />
        </div>

        <div className="col-md-6 col-sm-12">
          <CustomField
            name="discountPrice"
            addon={t("Cумов.1")}
            type="number"
            label={t("Сумма со скидкой.1")}
          />
        </div>
      </div>
      <div className="row pb-4">
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="specialPrice"
            addon={t("Cумов.1")}
            type="number"
            label={t("Цена по выходным за сутки.1")}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <ControlLabel>{t("Процент залога.1")}</ControlLabel>
            <FormControl
              placeholder={t("Выберите процент.1")}
              name="gage"
              accepter={SelectPickerJoy}
              data={data}
              searchable={false}
            />
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default React.memo(FormPrice);
