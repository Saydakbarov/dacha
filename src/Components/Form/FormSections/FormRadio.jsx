import React from "react";
import { FormGroup, RadioGroup, Radio } from "rsuite";

const FormRadio = ({ nameOne, nameTwo, onChange, RadioTitle, name }) => {
  return (
    <FormGroup controlId="radioList" value={name} onChange={onChange}>
      <RadioGroup inline name="radioList">
        <p style={{marginLeft: '10px'}}>{RadioTitle}</p>
        <Radio value={nameOne}>{nameOne}</Radio>
        <Radio value={nameTwo}>{nameTwo}</Radio>
      </RadioGroup>
    </FormGroup>
  );
};

export default FormRadio;
