import React, { useState } from "react";
import {
  Modal,
  Button,
  FormGroup,
  ControlLabel,
  InputGroup,
  FormControl,
  Input,
} from "rsuite";
import { InputJoySignUp } from "./LoginStyle";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { forgetPassword } from "store/auth/authActions";
const CustomField = ({
  name,
  message,
  label,
  accepter,
  addon,
  error,
  ...props
}) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <InputJoySignUp
        lineHeight="50px"
        width="100%"
        height="50px"
        className="mt-2"
      >
        {addon && <InputGroup.Addon>{addon}</InputGroup.Addon>}
        <FormControl
          name={name}
          accepter={accepter}
          errorMessage={error}
          {...props}
        />
      </InputJoySignUp>
    </FormGroup>
  );
};

const ForgotPass = ({ showForgot, closeForgot }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(forgetPassword("998" + phoneNumber));
    closeForgot();
  };
  return (
    <Modal
      show={showForgot}
      onHide={closeForgot}
      style={{ width: 320, margin: "16vh auto 0 auto" }}
    >
      <Modal.Header>
        <Modal.Title>{t("Сброс пароля.1")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomField
          name="username"
          placeholder={t("Введите номер.1")}
          accepter={Input}
          addon="+998"
          label={t("Введите номер.1")}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={submitHandler} appearance="primary">
          {t("Отправить.1")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(ForgotPass);
