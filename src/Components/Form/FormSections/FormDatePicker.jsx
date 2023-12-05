import React from "react";
import { DatePicker } from "rsuite";

const FormDatePicker = ({
  height,
  width,
  placeholder,
}) => {
  return (
      <DatePicker
        style={{ lineHeight: "45px" }}
        placement="topStart"
        placeholder={placeholder}
      />
  );
};

export default FormDatePicker;
