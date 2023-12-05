import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Form,
  ControlLabel,
  FormControl,
  InputGroup,
  Schema,
  FormGroup,
} from "rsuite";
import { InputJoySecond } from "Components/Form/FormSections/FormPriceStyle";
import FormImage from "Components/Form/FormSections/FormImage";
import HotelGeneral from "./FormHotelSections/HotelGeneral";
import HotelVehicle from "./FormHotelSections/HotelVehicle";
import HotelRules from "./FormHotelSections/HotelRules";
import HotelAdvantages from "./FormHotelSections/HotelAdvantages";
import HotelRoomType from "./FormHotelSections/HotelRoomType";
import InformationOfOwner from "./FormHotelSections/InformationOfOwner";
import HotelShyot from "./FormHotelSections/HotelShyot";
import HotelContact from "./FormHotelSections/HotelContact";
import { CustomRegisterButton } from "Components/Form/FormStyle";

const model = Schema.Model({
  mail: Schema.Types.StringType()
    .isEmail("Elektron manzilni kiriting!")
    .isRequired("Iltimos to'ldiring!"),
});

const FormHotel = () => {
  const { t } = useTranslation();
  const [formValue, setFormValue] = useState({
    videoLink: "",
    areaName: "",
    region: "",
    district: "",
    street: "",
    home: "",
    fromAirport: "",
    toAirport: "",
    smoking: false,
    animal: false,
    convenienceId: [],
  });

  const [photos, setPhotos] = useState([]);
  const [formList, setFormList] = useState([]);

  const handleChange = useCallback(
    (e) => {
      e.map((item) => setPhotos([...photos, item.blobFile]));
      setFormList(e);
    },
    [photos]
  );

  const [formError, setFormError] = useState({});

  const handleFormChange = (formValue) => {
    setFormValue(formValue);
  };

  const handleErrorChange = (formError) => {
    setFormError(formError);
  };

  const handleRemoveChange = (e) => {
    setFormList(e);
    console.log(e, "deleting file");
  };

  // console.log(photos, "photos");
  console.log(formList, "formList");
  return (
    <div className="container p-md-0 mb-5">
      <h1 className="admin-text">{t("Админ панель для арендаторов.1")}</h1>
      <div className="container p-md-0 m-0">
        <Form
          onChange={handleFormChange}
          onCheck={handleErrorChange}
          formError={formError}
          formValue={formValue}
          model={model}
        >
          <div className="row pt-5">
            <div className="col-md-6 col-sm-12">
              <FormImage
                value={formList}
                handleChange={handleChange}
                handleRemoveChange={handleRemoveChange}
              />
              <FormGroup>
                <ControlLabel>{t("Добавить видео.1")}</ControlLabel>
                <InputJoySecond lineHeight="50px" width="100%" height="50px">
                  <InputGroup.Addon>{t("Видео линк.1")}</InputGroup.Addon>
                  <FormControl
                    style={{ transition: "none !important" }}
                    name="videoLink"
                    placeholder="youtube.com"
                  />
                </InputJoySecond>
              </FormGroup>
            </div>
            <div className="col-md-6 col-sm-12">
              <HotelGeneral />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <HotelVehicle />
            </div>
            <div className="col-md-6 col-sm-12">
              <HotelRules />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <HotelAdvantages />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <HotelRoomType />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 col-sm-12">
              <InformationOfOwner />
            </div>
            <div className="col-md-6 col-sm-12">
              <HotelShyot />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <HotelContact />
            </div>
          </div>
          <div className="row pt-3 mt-3">
            <CustomRegisterButton
              className="col-md-4 col-sm-6 offset-md-4 col-6 offset-sm-3 offset-3"
              // onClick={handleSubmit}
              // loading={beginAddDacha}
            >
              {t("Зарегистрироваться.1")}
            </CustomRegisterButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(FormHotel);
