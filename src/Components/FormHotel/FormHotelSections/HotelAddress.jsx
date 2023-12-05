import React from "react";
import { FormGroup, ControlLabel, FormControl } from "rsuite";
import { useTranslation } from "react-i18next";
import {
  InputMine,
  SelectPickerJoy,
} from "Components/Form/FormSections/FormPriceStyle";

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

const data = [
  {
    label: "Ташкент",
    value: 1,
  },
  // {
  //   label: "Навои",
  //   value: 2,
  // },

  // {
  //   label: "Самарканд",
  //   value: 3,
  // },

  // {
  //   label: "Кашкадарё",
  //   value: 4,
  // },

  // {
  //   label: "Сирдаре",
  //   value: 5,
  // },

  // {
  //   label: "Джиззакх",
  //   value: 6,
  // },

  // {
  //   label: "Андижан",
  //   value: 7,
  // },

  // {
  //   label: "Наманган",
  //   value: 8,
  // },

  // {
  //   label: "Фергана",
  //   value: 9,
  // },

  // {
  //   label: "Букхара",
  //   value: 10,
  // },

  // {
  //   label: "Коракалпоғистон",
  //   value: 11,
  // },

  // {
  //   label: "Хоразм",
  //   value: 12,
  // },
];

const data2 = [
  {
    label: "Учтепа",
    value: 1,
  },
  {
    label: "Чиланзар",
    value: 2,
  },

  {
    label: "Юнусабад",
    value: 3,
  },

  {
    label: "Сирғали",
    value: 4,
  },

  {
    label: "Яшнабод",
    value: 5,
  },

  {
    label: "Миробод",
    value: 6,
  },

  {
    label: "Алмазар",
    value: 7,
  },
];

const HotelAddress = () => {
  const { t } = useTranslation();
  return (
    <>
      <h6 className="price-text mb-2">{t("Адрес.1")}</h6>
      <div className="row pt-2">
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={SelectPickerJoy}
            name="region"
            placeholder={t("Выберите регион.1")}
            label={t("Название (не объязательно).1")}
            data={data}
            searchable={false}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            placeholder={t("Выберите массив.1")}
            name="district"
            accepter={SelectPickerJoy}
            data={data2}
            label={t("Город / район.1")}
            searchable={false}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 col-sm-12">
          <CustomField
            accepter={InputMine}
            inputWidth="100%"
            type="text"
            name="street"
            placeholder={t("Улица.1")}
            label={t("Улица.1")}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <CustomField
            accepter={InputMine}
            inputWidth="100%"
            type="text"
            name="home"
            placeholder={t("Дом.1")}
            label={t("Дом.1")}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(HotelAddress);
