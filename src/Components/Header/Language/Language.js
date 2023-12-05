import React from "react";
import { LanguageInput } from "./MainLanguaugeStyle";

const Language = ({ ...props }) => {
  return (
    <LanguageInput
      data={props.data}
      placeholder={localStorage.getItem("i18nextLng")}
      onChange={props.handleChangeLanguage}
      searchable={false}
      style={{ position: "fixed !important", top: 61 }}
    />
  );
};

export default Language;
