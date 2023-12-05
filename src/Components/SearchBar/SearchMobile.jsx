import React from "react";
import mapPinSmall from "assets/images/map-pin-small.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DatePickerJoy, AutoCompleteJoy } from "./SearchBarStyle";
import Guests from "./Guests";
import Filter from "./Filter";
import { Whisper, Popover } from "rsuite";
import { handleShow } from "store/toggleDrawer/toggleDrawerAction";
import { useTranslation } from "react-i18next";

const SearchMobile = () => {
  const state = useSelector((state) => state);

  const { t } = useTranslation();

  const guestSpeaker = (
    <Popover>
      <Guests />
    </Popover>
  );
  const width = window.innerWidth;
  const cityData = [
    "Ташкент",
    "Самарканд",
    "Бухара",
    "Андижан",
    "Ферганаааааааааааа",
  ];
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch({ type: "SHOW_DRAWER" });
  };

  return (
    <>
      <Link
        to="/results"
        className="link search-map d-flex align-items-start ml-2"
      >
        <img src={mapPinSmall} alt="map-pin" className="mr-1" />
        {t("Поиск на карте.1")}
      </Link>
      <div className="search-mobile row p-4">
        {/* <div className="search-inputs d-flex justify-content-center align-items-center"> */}
        <AutoCompleteJoy
          type="text"
          className="search-input location col-12 mb-3"
          placeholder={t("Локация.1")}
          data={cityData}
          menuClassName="custom-menu"
        />
        <DatePickerJoy
          placeholder={t("Вьезд-Выезд.1")}
          className="search-input primary-color col-12 mb-3"
          format="DD-MM"
          size="lg"
          showOneCalendar={width < 500 ? true : false}
          preventOverflow
        />
        <Whisper trigger="active" placement="bottom" speaker={guestSpeaker}>
          <button type="text" className="search-input guests col-12 mb-3">
            {t("Гости.1")}
          </button>
        </Whisper>
        <button
          onClick={handleOpen}
          type="text"
          className="search-input filter col-12 mb-3"
        >
          {t("Фильтр.1")}
        </button>
        <button className="btn btn-fill btn-search col-12">
          {t("Поиск.1")}
        </button>
        <Filter />
        {/* </div> */}
      </div>
    </>
  );
};

export default SearchMobile;
