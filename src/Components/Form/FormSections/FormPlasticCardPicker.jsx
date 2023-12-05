import React from "react";
import { InputNumberSecondJoy } from "./FormPriceStyle";

const FormPlasticCardPicker = ({
  name,
  inputValue,
  inputValueSecond,
  inputValueThird,
  inputValueFourth,
  handleValueChange,
  handleValueChangeSecond,
  handleValueChangeThird,
  handleValueChangeFourth,
  placeholder,
  placeholderSecond,
  placeholderThird,
  placeholderFourth,
}) => {
  return (
    <div className="price-inner">
      <label style={{ fontSize: "14px", lineHeight: "19px", color: "#929292" }}>
        {name}
      </label>
      <div className="row" style={{ justifyContent: "space-around" }}>
        <InputNumberSecondJoy
          style={{ lineHeight: "45px", width: "100px" }}
          value={inputValue}
          heightnum="52px"
          placeholder={placeholder}
          onChange={handleValueChange}
        />

        <InputNumberSecondJoy
          style={{ lineHeight: "45px", width: "100px" }}
          value={inputValueSecond}
          placeholder={placeholderSecond}
          onChange={handleValueChangeSecond}
        />

        <InputNumberSecondJoy
          style={{ lineHeight: "45px", width: "100px" }}
          value={inputValueThird}
          placeholder={placeholderThird}
          onChange={handleValueChangeThird}
        />
        <InputNumberSecondJoy
          style={{ lineHeight: "45px", width: "100px" }}
          value={inputValueFourth}
          placeholder={placeholderFourth}
          onChange={handleValueChangeFourth}
        />
      </div>
    </div>
  );
};

export default FormPlasticCardPicker;
