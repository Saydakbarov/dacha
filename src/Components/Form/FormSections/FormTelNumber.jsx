import React from "react";
import { InputJoySecond } from "./FormPriceStyle";
import { InputGroup } from "rsuite";
import { InputNumberSecondJoy } from "./FormPriceStyle";

const FormTelNumber = ({
  name,
  inputValue,
  handleValueChange,
  height,
  placeholder,
  width,
}) => {
  return (
    <div className="price-inner">
      <label style={{ fontSize: "14px", lineHeight: "19px", color: "#929292" }}>
        {name}
      </label>
      <InputJoySecond height={height} width={width}>
        <InputGroup.Addon>+998</InputGroup.Addon>
        <InputNumberSecondJoy
          heightnum="48px"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleValueChange}
        />
      </InputJoySecond>
    </div>
  );
};

export default FormTelNumber;
