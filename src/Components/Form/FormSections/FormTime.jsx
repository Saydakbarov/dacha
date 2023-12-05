import React from "react";
import { useTranslation } from "react-i18next";
import { FormGroup, ControlLabel, FormControl } from "rsuite";
import { addDays, parse } from "date-fns";

import { DatePickerJoy } from "./FormPriceStyle";

const FormTime = () => {
  const { t } = useTranslation();
  const data = [
    {
      label: "17:00",
      value: 17,
    },
  ];

  const data2 = [
    {
      label: "20:00",
      value: 20,
    },
    {
      label: "18:00",
      value: 18,
    },
  ];

  return (
    <>
      <h6 className="time-text mb-2">{t("Время.1")}</h6>
      <div className="row">
        <div className="col-6">
          <FormGroup>
            <ControlLabel>{t("Заезд.1")}</ControlLabel>
            <FormControl
              placeholder={t("Заезд.1")}
              name="arrivalTime"
              accepter={DatePickerJoy}
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
              style={{ width: "262px" }}
            />
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup>
            <ControlLabel>{t("Выезд.1")}</ControlLabel>
            <FormControl
              placeholder={t("Выезд.1")}
              name="leftTime"
              accepter={DatePickerJoy}
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
              style={{ width: "262px" }}
            />
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default React.memo(FormTime);
