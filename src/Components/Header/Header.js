import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Link } from "react-router-dom";
import { ButtonToolbar, Button, Drawer } from "rsuite";
import Language from "./Language/Language";

import { useTranslation } from "react-i18next";
import i18n from "../../i18next/i18next";
import { PointModal } from "./PointModal";
import { useHistory, useLocation } from "react-router-dom";

import { authLogout } from "../../store/auth/authActions";

import logo from "assets/images/logo.svg";
import burger from "assets/images/burger.svg";
import logout from "assets/images/logout.svg";

const data = [
  {
    value: "uz",
    label: "uz",
  },
  {
    value: "ru",
    label: "ru",
  },
  {
    value: "en",
    label: "en",
  },
];

const auth = (state) => state.auth;

const mainAuthSuccessMine = createSelector(
  [auth],
  (state) => state.mainAuthSuccess
);

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [myLang, setMyLang] = useState("uz");
  const mainAuthSuccess = useSelector(mainAuthSuccessMine);
  const dispatch = useDispatch();
  let location = useLocation();
  const history = useHistory();
  const state = useSelector((state) => state);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch({ type: "close_modal" });
  }, [dispatch]);

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
    setMyLang(lang);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(authLogout());
    window.location = "/";
  };

  const handleCloseModal = () => {
    dispatch({ type: "close_modal" });
    setShowMobile(false);
  };

  const token = localStorage.getItem("token");
  // const token = "birnima";

  return (
    <div className="header">
      <div
        onFocus={() => console.log("focused")}
        onBlur={() => console.log("blurred")}
        className={`overlay-wrapper ${
          state.header.showModal ? "overlay" : null
        }`}
      ></div>
      {state.header.showModal ? (
        <PointModal handleCloseModal={handleCloseModal} />
      ) : null}
      <div className="nav">
        <div
          className={
            location.pathname !== "/results" ? `container px-sm-0` : "px-3"
          }
        >
          <div className="row no-gutters justify-content-between align-items-center">
            <div className="col-2 ">
              <Link to="/" onClick={() => setShowMobile(false)}>
                <div className="logo">
                  <img src={logo} alt="Логотип" />
                </div>
              </Link>
            </div>
            <div className="col-6 col-sm-10 d-flex justify-content-end align-items-center">
              <a href="tel:+998977454545" className="link d-lg-block d-none">
                <span className="phone mr-4">+998 97 745 45 45</span>
              </a>
              <button
                className="d-none d-md-block btn btn-header btn-fill btn-call header-button"
                onClick={() => dispatch({ type: "open_modal" })}
              >
                {t("Добавить точку.1")}
              </button>

              {mainAuthSuccess || token ? (
                <>
                  <Link
                    to="/"
                    className="link  d-sm-none d-md-block ml-md-3 header-button"
                  >
                    <button
                      className="btn btn-outline nav-login"
                      onClick={handleLogout}
                    >
                      {t("Выйти.1")}
                    </button>
                  </Link>
                  <Link
                    to="/profile"
                    className="link d-sm-none d-md-block ml-md-3 mr-3 header-button"
                  >
                    <button className="btn btn-outline nav-login">
                      {t("Профиль.1")}
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={{ pathname: "/login", state: { from: location } }}
                    className="link d-none d-md-block mr-lg-3 ml-3 mr-md-3 header-button"
                  >
                    <button className="btn btn-outline nav-login header-button px-3">
                      {t("Войти.1")}
                    </button>
                  </Link>
                  <Link
                    to="/signup"
                    className="link d-none d-md-block mr-lg-3 mr-md-3 header-button"
                  >
                    <button className="btn btn-outline nav-login header-button px-3">
                      {t("Регистрация.1")}
                    </button>
                  </Link>
                </>
              )}
              <ButtonToolbar
                className="d-none d-md-block"
                style={{ borderRadius: "6px !important" }}
              >
                <Language
                  handleChangeLanguage={handleClick}
                  data={data}
                  myLang={myLang}
                />
              </ButtonToolbar>

              <ButtonToolbar className="d-md-none">
                <Button onClick={() => setShowMobile(!showMobile)}>
                  <img src={burger} alt="меню" />
                </Button>
              </ButtonToolbar>
              <Drawer
                show={showMobile}
                onHide={() => setShowMobile(false)}
                full
              >
                <Drawer.Header>
                  <Drawer.Title>{t("Меню.1")}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <div className="row flex-column px-3 align-items-end">
                    <p
                      className="mb-4 link"
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch({ type: "open_modal" })}
                    >
                      {t("Добавить точку.1")}
                    </p>
                    {mainAuthSuccess || token ? (
                      <Link to="/" onClick={handleLogout} className="link mb-4">
                        {t("Выйти.1")}
                      </Link>
                    ) : (
                      <>
                        <Link
                          to={{ pathname: "/login", state: { from: location } }}
                          className="link mb-4"
                          onClick={() => setShowMobile(false)}
                        >
                          {t("Войти.1")}
                        </Link>
                        <Link
                          to="/signup"
                          className="link mb-4"
                          onClick={() => setShowMobile(false)}
                        >
                          {t("Регистрация.1")}
                        </Link>
                      </>
                    )}
                    <ButtonToolbar
                      className="mb-4"
                      style={{ borderRadius: "6px !important" }}
                    >
                      <Language
                        handleChangeLanguage={handleClick}
                        data={data}
                        myLang={myLang}
                        onChange={() => setMyLang(myLang)}
                      />
                    </ButtonToolbar>
                    <a href="tel:+998977454545" className="link">
                      +998 97 745 45 45
                    </a>
                  </div>
                </Drawer.Body>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
