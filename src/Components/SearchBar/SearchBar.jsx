import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDays } from "date-fns";
import mapPinSmall from "assets/images/map-pin-small.svg";
import { DatePickerJoy, AutoCompleteJoy } from "./SearchBarStyle";
import Guests from "./Guests";
import Filter from "./Filter";
import { Whisper, Popover } from "rsuite";
// import { handleShow } from "store/toggleDrawer/toggleDrawerAction";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { format } from "date-fns/esm";
const SearchBar = () => {
  // const [count, setCount] = useState(0);
  const [openDate, setOpenDate] = useState(false);
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
  const state = useSelector((state) => state);

  // const { show } = state.drawerJoy;

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch({ type: "SHOW_DRAWER" });
  };

  const handleDateChange = (e) => {
    e.map((item) => console.log(format(item, "yyyy-MM-dd"), "changing date"));
  };

  console.log(openDate, "openDate");
  return (
    <>
      <div className="search-bar mb-5 d-none d-lg-block">
        <div className="container p-md-0">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: 40 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ ease: "backOut", duration: 0.5 }}
          >
            <div className="row justify-content-between">
              <div className="col-12 d-flex justify-content-end mb-3 ">
                <Link
                  to="/results"
                  className="link search-map d-flex align-items-start"
                >
                  <img src={mapPinSmall} alt="map-pin" className="mr-1" />
                  {t("Поиск на карте.1")}
                </Link>
              </div>
            </div>
            <div className="search-inputs d-flex justify-content-center align-items-center">
              <AutoCompleteJoy
                type="text"
                className="search-input location"
                placeholder={t("Локация.1")}
                data={cityData}
                menuClassName="custom-menu"
              />

              <DatePickerJoy
                placeholder={t("Вьезд-Выезд.1")}
                className="search-input primary-color"
                format="DD-MM"
                dateWidth="30%"
                dateHeight="30%"
                size="lg"
                showOneCalendar={width < 500 ? true : false}
                ranges={[
                  {
                    label: t("Вчера.1"),
                    value: [addDays(new Date(), -1), addDays(new Date(), -1)],
                  },
                  {
                    label: t("Сегодня.1"),
                    value: [new Date(), new Date()],
                  },
                  {
                    label: t("Завтра.1"),
                    value: [addDays(new Date(), 1), addDays(new Date(), 1)],
                  },
                  {
                    label: t("Месяц.1"),
                    value: [addDays(new Date(), 1), addDays(new Date(), 30)],
                  },
                ]}
                preventOverflow
                onChange={handleDateChange}
              />

              <Whisper
                trigger="active"
                placement="bottom"
                speaker={guestSpeaker}
              >
                <button type="text" className="search-input guests">
                  {t("Гости.1")}
                </button>
              </Whisper>
              <button
                onClick={handleOpen}
                type="text"
                className="search-input filter"
              >
                {t("Фильтр.1")}
              </button>
              <button className="btn btn-fill btn-search">
                {t("Поиск.1")}
              </button>
              <Filter />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default React.memo(SearchBar);
