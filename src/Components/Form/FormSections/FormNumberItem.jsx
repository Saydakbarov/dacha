import React from "react";
import { InputJoy } from "./FormPriceStyle";
import { InputNumberSecondJoy } from "./FormPriceStyle";

const FormNumberItem = ({
  name,
  icon,
  height,
  inputValue,
  handleValueChange,
  mRight,
}) => {
  return (
    <div className="price-inner">
      <label
        style={{
          fontSize: "14px",
          lineHeight: "19px",
          color: "#929292",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <span className={mRight && `mr-2`}>{icon}</span>
        <span style={{ lineHeight: "25px" }}>{name}</span>
      </label>
      <InputJoy height={height} className="mt-2">
        <InputNumberSecondJoy
          scrollable={false}
          value={inputValue}
          onChange={handleValueChange}
        />
      </InputJoy>
    </div>
  );
};

export default FormNumberItem;
