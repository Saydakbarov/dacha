import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckPicker, Drawer, InputGroup, InputNumber, Button } from "rsuite";
import { RangeSliderJoy, InputJoy } from "./SearchBarStyle";

import { useTranslation } from "react-i18next";

const Filter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState([1, 100]);
  const width = window.innerWidth;
  const { t } = useTranslation();
  const data = [
    {
      label: "WiFi",
      value: "WiFi",
      // role: "Master",
    },
    {
      label: t("Отопление.1"),
      value: t("Отопление.1"),
      // role: "Master",
    },
    {
      label: t("Кондиционер.1"),
      value: t("Кондиционер.1"),
      // role: "Master",
    },
    {
      label: t("Телевизор.1"),
      value: t("Телевизор.1"),
      // role: "Master",
    },
    {
      label: t("Гараж.1"),
      value: t("Гараж.1"),
      // role: "Master",
    },
    {
      label: t("Тапчан.1"),
      value: t("Тапчан.1"),
      // role: "Developer",
    },
    {
      label: t("Охрана.1"),
      value: t("Охрана.1"),
      // role: "Developer",
    },
    {
      label: t("Летняя-кухня.1"),
      value: t("Летняя-кухня.1"),
      // role: "Developer",
    },
    {
      label: t("Зимняя-кухня.1"),
      value: t("Зимняя-кухня.1"),
      // role: "Developer",
    },
    {
      label: t("Зимний-бассейн.1"),
      value: t("Зимний-бассейн.1"),
      // role: "Developer",
    },
    {
      label: t("Летний-бассейн.1"),
      value: t("Летний-бассейн.1"),
      // role: "Developer",
    },
    {
      label: t("Барбекью.1"),
      value: t("Барбекью.1"),
      // role: "Guest",
    },
    {
      label: t("Официант.1"),
      value: t("Официант.1"),
      // role: "Guest",
    },
    {
      label: t("Повар.1"),
      value: t("Повар.1"),
      // role: "Guest",
    },
    {
      label: t("Настольный теннис.1"),
      value: t("Настольный теннис.1"),
      // role: "Guest",
    },
    {
      label: t("Бильярд.1"),
      value: t("Бильярд.1"),
      // role: "Guest",
    },
    {
      label: t("Шезлонги.1"),
      value: t("Шезлонги.1"),
      // role: "Guest",
    },
    {
      label: t("Жакузи.1"),
      value: t("Жакузи.1"),
      // role: "Guest",
    },
    {
      label: t("Видеонаблюдение.1"),
      value: t("Видеонаблюдение.1"),
      // role: "Guest",
    },
  ];

  const roomRef = React.createRef();
  const bedRef = React.createRef();

  const sliderThumbFromHandler = (nextValue) => {
    const [start, end] = value;
    if (nextValue > end) {
      return;
    }
    setValue([nextValue, end]);
  };
  const sliderThumbToHandler = (nextValue) => {
    const [start, end] = value;
    if (start > nextValue) {
      return;
    }
    setValue([start, nextValue]);
  };

  const handleRoomMinus = () => {
    roomRef.current.handleMinus();
  };
  const handleRoomPlus = () => {
    roomRef.current.handlePlus();
  };
  const handleBedMinus = () => {
    bedRef.current.handleMinus();
  };
  const handleBedPlus = () => {
    bedRef.current.handlePlus();
  };

  const handleSliderChange = (e) => {
    setValue(e);
  };

  return (
    <>
      <Drawer
        backdrop={true}
        placement="right"
        show={state.drawerJoy.show}
        onHide={() => dispatch({ type: "HIDE_DRAWER" })}
        size={width < 600 ? "xs" : "sm"}
      >
        <Drawer.Header>
          <Drawer.Title style={{ fontSize: "15px" }}>
            {t("Фильтр.1")}
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <h5 className="filter-title">{t("Удобства.1")}</h5>
          <CheckPicker data={data} placeholder={t("Выберите удобности.1")} />
          <h5 className="filter-title">{t("Цена.1")}</h5>
          <RangeSliderJoy
            onChange={handleSliderChange}
            value={value}
            progress
            max={100}
          />
          <div className="d-flex">
            <div className="d-flex flex-column mt-3">
              <p>{t("От.1")}</p>
              <InputJoy
                onChange={sliderThumbFromHandler}
                value={`${value[0]}`}
                min={1}
                max={100}
              />
            </div>
            <div className="d-flex flex-column ml-3 mt-3">
              <p>{t("До.1")}</p>
              <InputJoy
                onChange={sliderThumbToHandler}
                value={`${value[1]}`}
                min={1}
                max={100}
              />
            </div>
          </div>
          <h3 className="filter-title">{t("Комнаты и Кровати.1")}</h3>
          <div
            className="d-flex align-items-center justify-content-between mb-2"
            style={width < 600 ? { width: 270 } : { width: 380 }}
          >
            <p className="filter-text mr-3">{t("Общее количество комнат.1")}</p>
            <InputGroup style={width < 600 ? { width: 120 } : { width: 140 }}>
              <InputGroup.Button onClick={handleRoomMinus}>-</InputGroup.Button>
              <InputNumber
                className={"custom-input-number"}
                ref={roomRef}
                max={99}
                min={1}
              />
              <InputGroup.Button onClick={handleRoomPlus}>+</InputGroup.Button>
            </InputGroup>
          </div>
          <div
            className="d-flex align-items-center justify-content-between mb-4"
            style={width < 600 ? { width: 270 } : { width: 380 }}
          >
            <p className="filter-text mr-3">{t("Спальни.1")}</p>
            <InputGroup style={width < 600 ? { width: 120 } : { width: 140 }}>
              <InputGroup.Button onClick={handleBedMinus}>-</InputGroup.Button>
              <InputNumber
                className={"custom-input-number"}
                ref={bedRef}
                max={99}
                min={1}
              />
              <InputGroup.Button onClick={handleBedPlus}>+</InputGroup.Button>
            </InputGroup>
          </div>
          <Button
            onClick={() => dispatch({ type: "HIDE_DRAWER" })}
            appearance="primary"
            className="mr-2"
          >
            {t("Применить.1")}
          </Button>
          <Button
            onClick={() => dispatch({ type: "HIDE_DRAWER" })}
            appearance="subtle"
          >
            {t("Отменить.1")}
          </Button>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default React.memo(Filter);
