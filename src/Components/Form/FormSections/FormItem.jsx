import React from "react";
import { InputJoy } from "./FormPriceStyle";
import { Input } from "rsuite";

const FormItem = ({ name, inputValue, handleValueChange, height, width, placeholder }) => {
  return (
    <div className="price-inner">
      <label style={{ fontSize: "14px", lineHeight: "19px", color: "#929292" }}>
        {name}
      </label>
      <InputJoy height={height} width={width}>
        <Input value={inputValue} placeholder={placeholder} onChange={handleValueChange} />
      </InputJoy>
    </div>
  );
};


export default FormItem;