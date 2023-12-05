import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Uploader,
  Icon,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from "rsuite";
import {
  CheckPickerJoy,
  InputMine,
  SelectPickerJoy,
} from "Components/Form/FormSections/FormPriceStyle";

import { Modal } from "rsuite";

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
      <FormControl
        name={name}
        accepter={accepter}
        errorMessage={error}
        {...props}
      />
    </FormGroup>
  );
};

const RoomModal = ({ closeModal, openModal }) => {
  const [value, setValue] = useState([]);
  const { t } = useTranslation();

  const dataBranches = useMemo(
    () => [
      {
        label: t("Одно комната.1"),
        value: 1,
      },
      {
        label: t("Двух комната.1"),
        value: 2,
      },
      {
        label: t("Двух раздельний комната.1"),
        value: 3,
      },
      {
        label: t("Семейний комната.1"),
        value: 4,
      },
      {
        label: t("Призденцский комната.1"),
        value: 5,
      },
      {
        label: t("Королевский комната.1"),
        value: 6,
      },
      {
        label: t("Трех комната.1"),
        value: 7,
      },
    ],
    [t]
  );

  const data = useMemo(() => {
    return [
      {
        label: "Wi-Fi",
        value: 1,
      },
      {
        label: t("Отопление.1"),
        value: 2,
      },
      {
        label: t("Кондиционер.1"),
        value: 3,
      },
      {
        label: t("Телевизор.1"),
        value: 4,
      },
      {
        label: t("Гараж.1"),
        value: 5,
      },
      {
        label: t("Тапчан.1"),
        value: 6,
      },
      {
        label: t("Охрана.1"),
        value: 7,
      },
      {
        label: t("Летняя-кухня.1"),
        value: 8,
      },
      {
        label: t("Зимняя-кухня.1"),
        value: 9,
      },
      {
        label: t("Летний-бассейн.1"),
        value: 10,
      },
      {
        label: t("Зимний-бассейн.1"),
        value: 11,
      },
      {
        label: t("Барбекью.1"),
        value: 12,
      },
      {
        label: t("Официант.1"),
        value: 13,
      },
      {
        label: t("Повар.1"),
        value: 14,
      },
      {
        label: t("Настольный теннис.1"),
        value: 15,
      },
      {
        label: t("Бильярд.1"),
        value: 16,
      },
      {
        label: t("Шезлонги.1"),
        value: 17,
      },
      {
        label: t("Жакузи.1"),
        value: 18,
      },
      {
        label: t("Видеонаблюдение.1"),
        value: 19,
      },
      {
        label: t("Бар.1"),
        value: 20,
      },
      {
        label: t("Сауна.1"),
        value: 21,
      },
      {
        label: t("Банкетный зал.1"),
        value: 22,
      },
      {
        label: t("24ч охрана.1"),
        value: 23,
      },
      {
        label: t("Терасса.1"),
        value: 24,
      },
      {
        label: t("24ч услуга.1"),
        value: 25,
      },
    ];
  }, [t]);

  const handleChange = (e) => {
    setValue(e);
  };

  const handleRemoveChange = (e) => {
    setValue(e);
  };
  console.log(openModal, "asdas");
  return (
    <Modal
      style={{ top: "60px" }}
      full
      backdrop="static"
      show={openModal}
      onHide={closeModal}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="row mt-2">
          <div className="col-md-6 col-sm-12">
            <h6 className="price-text mb-2">
              {t("Добавить картинки комнат.1")}
            </h6>
            <Uploader
              multiple
              listType="picture"
              fileList={value}
              draggable
              removable
              onRemove={handleRemoveChange}
              name="photos"
              onChange={handleChange}
              autoUpload={false}
              renderFileInfo={(file, fileElement) => {
                return (
                  <div>
                    <span>
                      {t("Имя файлов.1")}: {file.name}
                    </span>
                  </div>
                );
              }}
            >
              <button>
                <Icon icon="camera-retro" size="lg" />
              </button>
            </Uploader>
          </div>
          <div className="col-md-6 col-sm-12">
            <h6 className="price-text mb-2">{t("Тип комната.1")}</h6>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <CustomField
                  name="branch"
                  data={dataBranches}
                  label={t("Тип комната.1")}
                  placeholder={t("Тип комната.1")}
                  accepter={SelectPickerJoy}
                  searchable={false}
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <CustomField
                  label={
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      {t("Жилое помощение.1")}
                      <p style={{ marginLeft: "5px" }}>
                        m<sup>2</sup>
                      </p>
                    </div>
                  }
                  placeholder={t("Жилое помощение.1")}
                  name="livingArea"
                  accepter={InputMine}
                  type="number"
                  inputWidth="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-sm-12">
            <h6 className="price-text mb-2">{t("Удобства комнат.1")}</h6>
            <CustomField
              name="convenienceId"
              data={data}
              label={t("Выберите удобности.1")}
              placeholder={t("Выберите удобности.1")}
              accepter={CheckPickerJoy}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <h6 className="price-text mb-2">{t("Цена.1")}</h6>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <CustomField
                  name="price"
                  addon={t("Cумов.1")}
                  accepter={InputMine}
                  inputWidth="100%"
                  type="number"
                  label={t("Обычная цена за сутки.1")}
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <CustomField
                  name="discountPrice"
                  addon={t("Cумов.1")}
                  accepter={InputMine}
                  inputWidth="100%"
                  type="number"
                  label={t("Сумма со скидкой.1")}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RoomModal;
