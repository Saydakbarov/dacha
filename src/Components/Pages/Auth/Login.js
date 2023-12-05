import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Link } from "react-router-dom";
import ForgotPass from "./ForgotPass";
import {
  Form,
  Schema,
  FormControl,
  FormGroup,
  Input,
  ControlLabel,
  InputGroup,
} from "rsuite";
import { useTranslation } from "react-i18next";
import { LoaderJoy, InputJoySignUp } from "./LoginStyle";
import { loginAuth } from "../../../store/auth/authActions";
import { useLocation, useHistory } from "react-router-dom";
const model = Schema.Model({
  username: Schema.Types.StringType()
    .minLength(2, "Iltimos Ismingiz 2ta harfdan katta bo'lsin")
    .isRequired("Iltimos to'ldiring!"),
  password: Schema.Types.StringType()
    .minLength(6, "Iltimos parol 5ta harfdan katta bo'lsin")
    .isRequired("Iltimos to'ldiring!"),
});

const CustomField = ({
  name,
  message,
  label,
  accepter,
  addon,
  error,
  ref,
  ...props
}) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <InputJoySignUp lineHeight="50px" width="100%" height="50px">
        {addon && <InputGroup.Addon>{addon}</InputGroup.Addon>}
        <FormControl
          name={name}
          accepter={accepter}
          errorMessage={error}
          ref={ref}
          {...props}
        />
      </InputJoySignUp>
    </FormGroup>
  );
};

const auth = (state) => state.auth;

const mainAuthBeginMine = createSelector(
  [auth],
  (state) => state.mainAuthBegin
);

const mainAuthSuccessMine = createSelector(
  [auth],
  (state) => state.mainAuthSuccess
);

const LoginMain = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const inputRef = useRef();

  console.log(inputRef.current, "inputRef");
  const mainAuthBegin = useSelector(mainAuthBeginMine);
  const mainAuthSuccess = useSelector(mainAuthSuccessMine);
  let location = useLocation();
  let history = useHistory();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const [showForgot, setShowForgot] = useState(false);

  const [formErrors, setFormErrors] = useState({});

  const handleLoginMIneSubmit = (e) => {
    if (formValue.username > 10 && formValue.password > 5) {
      e.preventDefault();
      dispatch(
        loginAuth("998" + formValue.username, formValue.password, "password")
      );
    }
  };

  if (mainAuthSuccess) {
    if (location.state) {
      if (location.state.from.pathname === "/signup") {
        history.replace("/");
      } else {
        history.replace(location.state.from.pathname);
      }
    } else {
      history.replace("/");
    }
  }

  return (
    <div className="container">
      <div className="login d-flex justify-content-center align-items-center">
        <Form
          onChange={(formValue) => {
            setFormValue(formValue);
          }}
          onCheck={(formError) => {
            setFormErrors(formError);
          }}
          onError={(formError) => {
            setFormErrors(formError);
          }}
          formError={formErrors}
          formValue={formValue}
          model={model}
          // checkTrigger="blur"
          onSubmit={handleLoginMIneSubmit}
          className="d-flex flex-column"
          style={{ width: "300px" }}
        >
          <CustomField
            name="username"
            placeholder={t("Введите номер.1")}
            accepter={Input}
            ref={inputRef}
            label={t("Введите номер.1")}
            addon="+998"
            errorMessage={formErrors.firstName}
          />
          <CustomField
            name="password"
            placeholder={t("Парол.1")}
            accepter={Input}
            label={t("Парол.1")}
            errorMessage={formErrors.password}
          />
          <button
            type="submit"
            onClick={handleLoginMIneSubmit}
            className="form-btn btn-fill"
            disabled={mainAuthBegin}
          >
            {mainAuthBegin ? (
              <LoaderJoy style={{ color: "white" }} size="sm" />
            ) : (
              t("Войти.1")
            )}
          </button>
          <div className="text-align-center mt-4">
            <p className="mb-1 link-orange" onClick={() => setShowForgot(true)}>
              {t("Забыли пароль?.1")}
            </p>
            <span style={{ fontSize: 16 }}>
              {t("если У вас нет аккаунта.2")}
              <Link to="/signup" className="link-orange">
                {t("Зарегистрируйтесь.1")} {t("Зарегистрируйтесь.2")}
              </Link>{" "}
              {t("если У вас нет аккаунта.1")}
            </span>
          </div>
          <ForgotPass
            showForgot={showForgot}
            closeForgot={() => setShowForgot(false)}
          />
        </Form>
      </div>
    </div>
  );
};

export default React.memo(LoginMain);
