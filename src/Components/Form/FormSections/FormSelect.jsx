import React from "react";
import { SelectPickerJoy } from "./FormPriceStyle";

const FormSelect = ({ label, data, placeholder, searchable }) => {
  return (
    <div className="price-inner">
      <label>{label}</label>
      <SelectPickerJoy
        data={data}
        searchable={searchable}
        placeholder={placeholder}
      />
    </div>
  );
};

export default React.memo(FormSelect);
