import React, { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectPickerJoy,
  InputNumberGroupJoy,
  InputNumberGroupButtonJoy,
} from "./FormPriceStyle";
import { useTranslation } from "react-i18next";

import { InputNumber, FormGroup, ControlLabel, FormControl } from "rsuite";
import {
  handleMinusRedux,
  handlePlusRedux,
} from "store/addDacha/addDachaAction";
import { maxDayBookMine } from "store/addDacha/addDachaSelector";



const FormBook = () => {
  const maxDayBook = useSelector(maxDayBookMine);

  const dispatch = useDispatch();
  const data = useMemo(
    () => [
      {
        label: "12 часов",
        value: 12,
      },
      {
        label: "24 часов",
        value: 24,
      },
      {
        label: "48 часов",
        value: 48,
      },
    ],
    []
  );

  const inputRef = React.createRef();

  const handleMinus = useCallback(() => {
    inputRef.current.handleMinus();
    if (maxDayBook > 10) {
      dispatch(handleMinusRedux());
    }
  }, [dispatch, inputRef, maxDayBook]);

  const handlePlus = useCallback(() => {
    inputRef.current.handlePlus();
    if (maxDayBook < 30) {
      dispatch(handlePlusRedux());
    }
  }, [dispatch, inputRef, maxDayBook]);

  const { t } = useTranslation();

  return (
    <>
      <h6 className="timer-reader-text pt-4 mb-2">
        {t("Условия забронирования.1")}
      </h6>
      <div className="row">
        <div className="col-6">
          <p className="pb-0 mb-0 py-1 timer-reader-text2">
            {t("Максимальное количество дней бронирования.1")}
          </p>
          <InputNumberGroupJoy>
            <InputNumberGroupButtonJoy onClick={handleMinus}>
              -
            </InputNumberGroupButtonJoy>
            <InputNumber
              className={"custom-input-number"}
              name="maxDayBook"
              ref={inputRef}
              value={maxDayBook}
              max={30}
              min={10}
            />
            <InputNumberGroupButtonJoy onClick={handlePlus}>
              +
            </InputNumberGroupButtonJoy>
          </InputNumberGroupJoy>
        </div>
        <div className="col-6">
          <FormGroup>
            <ControlLabel>{t("Минимальое время до заезда.1")}</ControlLabel>
            <FormControl
              placeholder={t("Минимальое время до заезда.1")}
              className="mt-1"
              name="maxDayBookHours"
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

export default React.memo(FormBook);
