import React, { useMemo } from "react";
import { InputMine, DatePickerJoy, SelectPickerJoy } from "./FormPriceStyle";
import { FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";

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
      <HelpBlock>{message}</HelpBlock>
    </FormGroup>
  );
};

const FormCardShyot = () => {
  const data2 = useMemo(
    () => [
      {
        label: "Xalq Banki",
        value: "Xalq Banki",
        role: "User",
      },
      {
        label: "Visa",
        value: "Visa",
        role: "User",
      },
    ],
    []
  );
  return (
    <>
      <div className="row mt-0">
        <div className="col-12 d-flex">
          <CustomField
            label="Введите номер карта"
            placeholder="8600 0000 0000 0000"
            name="plasticCardName"
            accepter={InputMine}
            inputWidth="260px"
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="expireDateSecond"
            accepter={DatePickerJoy}
            placeholder="Срок действия"
            style={{ width: "252px" }}
            label="Срок действия"
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6 col-sm-12">
          <CustomField
            name="banks"
            data={data2}
            label="Банк"
            placeholder="Выберите банк"
            accepter={SelectPickerJoy}
            searchable={false}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(FormCardShyot);
