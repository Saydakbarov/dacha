import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { useTranslation } from "react-i18next";

import {
  FormGroup,
  ControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "rsuite";
import FormCardShyot from "./FormCardShyot";
import FormBankShyot from "./FormBankShyot";
import { handlePayment } from "store/addDacha/addDachaAction";

const CustomField = ({ name, message, label, accepter, error, ...props }) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        name={name}
        accepter={accepter}
        errorMessage={error}
        {...props}
      />
    </FormGroup>
  );
};

const dacha = (state) => state.dacha;

const radioListCardsMine = createSelector(
  [dacha],
  (dachaMine) => dachaMine.radioListCards
);

const FormSchyot = () => {
  const { t } = useTranslation();

  const radioListCards = useSelector(radioListCardsMine);

  const dispatch = useDispatch();

  const handleCardCash = useCallback(
    (e) => {
      dispatch(handlePayment(e));
    },
    [dispatch]
  );

  const handleControlCard = () => {
    if (radioListCards === "CARD") {
      return <FormCardShyot />;
    } else if (radioListCards === "BANK") {
      return <FormBankShyot />;
    }
  };

  return (
    <>
      <h6 className="price-text mb-2">{t("Информация о счёте.1")}</h6>
      <div className="row mt-4">
        <div className="col-12">
          <CustomField
            name="paymentType"
            value={radioListCards}
            accepter={RadioGroup}
            onChange={handleCardCash}
            label={t("Тип счета.1")}
            inline
          >
            <Radio disabled value="CARD">
              {t("Пластиковая карта.1")}
            </Radio>
            <Radio value="BANK">{t("Банковский счет.1")}</Radio>
          </CustomField>
        </div>
      </div>

      {handleControlCard()}
    </>
  );
};

export default React.memo(FormSchyot);
