import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, Input } from "rsuite";
import { InputGroupElementJoy } from "./FormElementsStyle";
import { handleChangeForm } from "store/customFormInput/customFromInputAction";

const FormPrefix = ({ prefix, placeholder }) => {
  const [link, setLink] = useState("");
  let linkRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleChangeForm(link));
  }, [dispatch, link]);

  const handleChange = (e) => {
    setLink(e);
    // handleChangeForm(linkRef.current.props.value);
  };

  return (
    <InputGroupElementJoy>
      <InputGroup.Addon> {prefix}</InputGroup.Addon>
      <Input
        ref={linkRef}
        value={link}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </InputGroupElementJoy>
  );
};

export default FormPrefix;
