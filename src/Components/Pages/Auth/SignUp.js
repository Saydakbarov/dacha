import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
// import { Input } from "Components/Form/FormElements";
import { Link } from "react-router-dom";
// import InputMask from "react-input-mask";
import { useTranslation } from "react-i18next";
import { LoaderJoy, InputJoySignUp } from "./LoginStyle";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Schema,
  InputGroup,
  Input,
} from "rsuite";
import { useHistory } from 'react-router-dom';
import { format, addDays } from "date-fns";
// import { MaskedInput } from "react-text-mask";

import { signUpAuth, loginAuthWIthSms } from "../../../store/auth/authActions";
import { DatePickerJoy } from "Components/Form/FormSections/FormPriceStyle";

const model = Schema.Model({
  firstName: Schema.Types.StringType()
    .minLength(2, "Iltimos Ismingiz 2ta harfdan katta bo'lsin")
    .isRequired("Iltimos to'ldiring!"),
  lastName: Schema.Types.StringType()
    .minLength(2, "Iltimos Familyangiz 2ta harfdan katta bo'lsin")
    .isRequired("Iltimos to'ldiring!"),
  number: Schema.Types.StringType()
    .minLength(9, "Iltimos 9 xonali telefoningizni kiriting")
    .isRequired("Iltimos to'ldiring!"),
});

const auth = (state) => state.auth;

const dataMine = createSelector([auth], (state) => state.data);

const statusMine = createSelector([auth], (state) => state.status);

const beginLoginMine = createSelector([auth], (state) => state.beginLogin);

const userAuthedMine = createSelector([auth], (state) => state.userAuthed);

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
      <InputJoySignUp pTop="0" lineHeight="50px" width="100%" height="100%">
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

const SignUp = () => {
  const [smsValue, setSmsValue] = useState("");

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    number: "",
    bornDate: ""
  });

  const dispatch = useDispatch();
  const [formError, setFormError] = useState({});
  const codeSmsRef = useRef([]);

  const data = useSelector(dataMine);
  const status = useSelector(statusMine);
  const beginLogin = useSelector(beginLoginMine);
  const userAuthed = useSelector(userAuthedMine);
  const { t } = useTranslation();

  const handleUserAuthed = (e) => {
    e.preventDefault();
    if (
      formValue.firstName.length > 2 &&
      formValue.lastName.length > 0 &&
      formValue.number.length > 7
    ) {
      dispatch(
        signUpAuth(
          formValue.firstName,
          formValue.lastName,
          "998" + formValue.number,
          format(formValue.bornDate, "dd-MM-yyyy")
        )
      );
    }
  };

  const history = useHistory();

  const handleUserAuthedSms = (e) => {
    e.preventDefault();
    dispatch(loginAuthWIthSms(data, smsValue, history));
  };

  // useEffect(() => {
  //   codeSmsRef.current.focus();
  // }, []);

  return (
    <>
      {status === 200 || status === 201 ? (
        <div className="login d-flex justify-content-center align-items-center">
          <form onSubmit={handleUserAuthedSms} className="d-flex flex-column">
            <label className="form-label" htmlFor="login-name">
              Введите код из смс
            </label>
            <Input
              className="login-name-input form-input mb-2"
              id="login-name"
              value={smsValue}
              ref={codeSmsRef}
              onChange={(e) => setSmsValue(e)}
              style={{ height: "50px" }}
            />
            <button
              type="submit"
              onClick={handleUserAuthedSms}
              className="form-btn btn-fill"
            >
              Подтвердить
            </button>
            <p className="login-sent">
              Код отправлен на номер <br /> +998 {formValue.number}
            </p>
            <Link className="login-link mb-2">Отправить заново</Link>
            <Link className="login-link">Другой номер</Link>
          </form>
        </div>
      ) : (
          <div className="container">
            <div className="login d-flex justify-content-center align-items-center">
              <Form
                onChange={(formValue) => {
                  setFormValue(formValue);
                }}
                onCheck={(formError) => {
                  setFormError(formError);
                }}
                formError={formError}
                formValue={formValue}
                model={model}
                onSubmit={handleUserAuthed}
                className="d-flex flex-column"
                style={{ width: "300px" }}
              >
                <CustomField
                  name="firstName"
                  placeholder={t("Имя.1")}
                  accepter={Input}
                  label={t("Имя.1")}
                  errorMessage={formError.firstName}
                />
                <CustomField
                  name="lastName"
                  placeholder={t("Фамилия.1")}
                  accepter={Input}
                  label={t("Фамилия.1")}
                  errorMessage={formError.lastName}
                />
                <CustomField
                  name="number"
                  placeholder={t("Введите номер.1")}
                  accepter={Input}
                  style={{ height: "90% !important", width: "100% !important" }}
                  label={t("Введите номер.1")}
                  addon="+998"
                  errorMessage={formError.number}
                />

                <CustomField
                name="bornDate"
                placeholder={t("День рождения.1")}
                label={t("День рождения.1")}
                accepter={DatePickerJoy}
                oneTap
                ranges={[
                  {
                    label: t("Вчера.1"),
                    value: addDays(new Date(), -1),
                  },
                  {
                    label: t("Сегодня.1"),
                    value: new Date(),
                  },
                  {
                    label: t("Завтра.1"),
                    value: addDays(new Date(), 1),
                  },
                ]}
                style={{ width: "100%" }}
                />
                <button
                  type="submit"
                  onClick={handleUserAuthed}
                  className="form-btn btn-fill"
                  disabled={beginLogin}
                >
                  {beginLogin ? (
                    <LoaderJoy style={{ color: "white" }} size="sm" />
                  ) : (
                      t("Регистрация.1")
                    )}
                </button>
              </Form>
            </div>
          </div>
        )}
    </>
  );
};

export default React.memo(SignUp);

//  <CustomField
//    name="number"
//    label={t("Введите номер.1")}
//    placeholder={t("Введите номер.1")}
//    accepter={MaskedInput}
//    mask={[
//      "(",
//      "+",
//      /[1-9]/,
//      /\d/,
//      /\d/,
//      ")",
//      " ",
//      /\d/,
//      /\d/,
//      "-",
//      /\d/,
//      /\d/,
//      /\d/,
//      "-",
//      /\d/,
//      /\d/,
//      "-",
//      /\d/,
//      /\d/,
//    ]}
//  />;
