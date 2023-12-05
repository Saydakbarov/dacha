import React, { useState, useCallback } from "react";
import { SelectPickerJoy, InputMine, MapModal } from "./FormPriceStyle";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Icon,
  Modal,
} from "rsuite";
import FormMapMine from "./FormMapMine";
import { getDistrictDataByIdMine } from "store/district/districtSelector";
import { getRegionByLangDataMine } from "store/region/regionSelector";

const FormAddress = () => {
  const [show, setShow] = useState(false);
  const getRegionByLangData = useSelector(getRegionByLangDataMine);
  const getDistrictDataById = useSelector(getDistrictDataByIdMine);

  console.log(getDistrictDataById, "data");
  console.log(getRegionByLangData, "region data");

  const onClose = useCallback(() => {
    setShow(false);
  }, []);

  const onOpen = useCallback(() => {
    setShow(true);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <h6 className="price-text mb-2">{t("Адрес.1")}</h6>
      <div className="row">
        <div className="col-6">
          <FormGroup>
            <ControlLabel>{t("Регион.1")}</ControlLabel>
            <FormControl
              placeholder={t("Выберите регион.1")}
              name="region"
              accepter={SelectPickerJoy}
              data={getRegionByLangData}
              labelKey="nameRu"
              valueKey="id"
              searchable={false}
            />
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup>
            <ControlLabel>{t("Город / район.1")}</ControlLabel>
            <FormControl
              placeholder={t("Выберите массив.1")}
              name="district"
              accepter={SelectPickerJoy}
              data={getDistrictDataById}
              labelKey="nameEn"
              valueKey="regionId"
              searchable={false}
            />
          </FormGroup>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-6 col-sm-12">
          <FormGroup>
            <ControlLabel>{t("Улица.1")}</ControlLabel>
            <FormControl
              accepter={InputMine}
              inputWidth="260px"
              placeholder={t("Улица.1")}
              name="street"
            />
          </FormGroup>
        </div>
        <div className="col-md-3 col-sm-12">
          <FormGroup>
            <ControlLabel>{t("Дом.1")}</ControlLabel>
            <FormControl
              style={{ width: "50px" }}
              accepter={InputMine}
              placeholder={t("Дом.1")}
              inputWidth="120px"
              name="appartment"
            />
          </FormGroup>
        </div>
        <div className="col-md-3 col-sm-12">
          <FormGroup>
            <ControlLabel>{t("Квр.1")}</ControlLabel>
            <FormControl
              style={{ width: "50px" }}
              accepter={InputMine}
              inputWidth="120px"
              placeholder={t("Квр.1")}
              name="home"
            />
          </FormGroup>
        </div>
      </div>
      <div className="row pt-3 pl-3">
        <Button color="primary" size="lg" onClick={onOpen}>
          <Icon style={{ marginRight: "10px" }} size="lg" icon="map-marker" />
          {t("Укажите геолокация.1")}
        </Button>

        <MapModal overflow={false} show={show} onHide={onClose}>
          <Modal.Header>
            <Modal.Title>{t("Укажите геолокация.1")}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ position: "relative" }}>
            <FormMapMine />
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ marginLeft: "10px" }}
              onClick={onClose}
              appearance="primary"
            >
              {t("Подтвердить.1")}
            </Button>
          </Modal.Footer>
        </MapModal>
      </div>
    </>
  );
};

export default React.memo(FormAddress);

// let latitude = useMemo(() => viewport.latitude, [viewport]);
// let longitude = useMemo(() => viewport.longitude, [viewport]);

// <div style={{ display: "flex", flexDirection: "column" }}>
//   <p style={{ textAlign: "left" }}>{latitude}</p>
//   <p style={{ textAlign: "left" }}>{longitude}</p>
// </div>;

// const state = (state) => state.map.viewport;

// const latitudeMine = createSelector(
//   [state],
//   (viewport) => viewport.latitude
// );

// const longitudeMine = createSelector(
//   [state],
//   (viewport) => viewport.longitude
// );
