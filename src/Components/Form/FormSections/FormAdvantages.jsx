import React, { useMemo } from "react";
import { CheckPickerJoy } from "./FormPriceStyle";

import { FormGroup, ControlLabel, FormControl } from "rsuite";

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
    </FormGroup>
  );
};

const FormAdvantages = () => {
  const { t } = useTranslation();
  const data = useMemo(() => {
    return [
      {
        label: "Wi-Fi",
        value: 1,
      },
      {
        label: t("Отопление.1"),
        value: 2,
      },
      {
        label: t("Кондиционер.1"),
        value: 3,
      },
      {
        label: t("Телевизор.1"),
        value: 4,
      },
      {
        label: t("Гараж.1"),
        value: 5,
      },
      {
        label: t("Тапчан.1"),
        value: 6,
      },
      {
        label: t("Охрана.1"),
        value: 7,
      },
      {
        label: t("Летняя-кухня.1"),
        value: 8,
      },
      {
        label: t("Зимняя-кухня.1"),
        value: 9,
      },
      {
        label: t("Летний-бассейн.1"),
        value: 10,
      },
      {
        label: t("Зимний-бассейн.1"),
        value: 11,
      },
      {
        label: t("Барбекью.1"),
        value: 12,
      },
      {
        label: t("Официант.1"),
        value: 13,
      },
      {
        label: t("Повар.1"),
        value: 14,
      },
      {
        label: t("Настольный теннис.1"),
        value: 15,
      },
      {
        label: t("Бильярд.1"),
        value: 16,
      },
      {
        label: t("Шезлонги.1"),
        value: 17,
      },
      {
        label: t("Жакузи.1"),
        value: 18,
      },
      {
        label: t("Видеонаблюдение.1"),
        value: 19,
      },
    ];
  }, [t]);
  return (
    <>
      <h6 className="price-text mb-2">{t("Удобства.1")}</h6>
      <div className="row mt-4">
        <div className="col-12">
          <CustomField
            name="convenienceId"
            data={data}
            label={t("Выберите удобности.1")}
            placeholder={t("Выберите удобности.1")}
            accepter={CheckPickerJoy}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(FormAdvantages);
