import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { useTranslation } from "react-i18next";
import {
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Schema,
} from "rsuite";
import FormImage from "Components/Form/FormSections/FormImage";
import { InputJoySecond } from "Components/Form/FormSections/FormPriceStyle";
import ProductPageLoading from "Components/Product/ProductPageLoading";
import { CustomImageDiv, DeleteIcon } from "./ProfileStyle";
import FormPrice from "Components/Form/FormSections/FormPrice";
import FormBook from "Components/Form/FormSections/FormBook";
import FormTime from "Components/Form/FormSections/FormTime";
import FormAddress from "Components/Form/FormSections/FormAddress";
import FormRules from "Components/Form/FormSections/FormRules";
import FormRentInfo from "Components/Form/FormSections/FormRentInfo";
import FormAdvantages from "Components/Form/FormSections/FormAdvantages";
import FormArenda from "Components/Form/FormSections/FormArenda";
import FormSchyot from "Components/Form/FormSections/FormSchyot";
import { CustomRegisterButton } from "Components/Form/FormStyle";
import { editUniqueDacha } from "store/addDacha/addDachaAction";
import { format, parse } from "date-fns";
import { useHistory } from "react-router-dom";
import { beginGetUniqueDachaMine, maxDayBookMine, radioListCardsMine, selectedDachaMine } from "store/addDacha/addDachaSelector";

const model = Schema.Model({
  mail: Schema.Types.StringType()
    .isEmail("Elektron manzilni kiriting!")
    .isRequired("Iltimos to'ldiring!"),
});


const ProfileEditPage = () => {
  const { t } = useTranslation();
  const selectedDacha = useSelector(selectedDachaMine);
  const beginGetUniqueDacha = useSelector(beginGetUniqueDachaMine);
  const maxDayBook = useSelector(maxDayBookMine);
  const radioListCards = useSelector(radioListCardsMine);

  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    photos: [],
    videoLink: selectedDacha.videoUrl,
    price: selectedDacha.price,
    discountPrice: selectedDacha.discountPrice,
    specialPrice: selectedDacha.specialPrice,
    gage: selectedDacha.gage,
    arrivalTime: parse(selectedDacha.arrivalTime, "dd-MM-yyyy", new Date()),
    leftTime: parse(selectedDacha.leftTime, "dd-MM-yyyy", new Date()),
    region: selectedDacha.region && selectedDacha.region.nameUz,
    district: selectedDacha.district && selectedDacha.district.nameUz,
    street: selectedDacha.street,
    appartment: selectedDacha.apartment,
    home: selectedDacha.home,
    title: selectedDacha.title,
    countRoom: selectedDacha.countRoom,
    totalArea: selectedDacha.totalArea,
    livingArea: selectedDacha.livingArea,
    singleBad: selectedDacha.singleBad,
    doubleBad: selectedDacha.doubleBad,
    hostCount: selectedDacha.hostCount,
    maxDayBook: 10,
    smoking: selectedDacha.smoking,
    alcohol: selectedDacha.alcohol,
    animal: selectedDacha.animal,
    onlyFamily: selectedDacha.onlyFamily,
    loudlyMusic: selectedDacha.loudlyMusic,
    party: selectedDacha.party,
    convenienceId: selectedDacha.convenience,
    maxDayBookHours: selectedDacha.maxDayBookHours,
    expireDate: "",
    serialNumber: "",
    givenPlace: "",
    givenDate: "",
    passportValidDate: "",
    account: "",
    inn: "",
    mfo: "",
    bank: "",
    branch: "",
  });

  console.log(formValue);
  console.log(selectedDacha && selectedDacha, "selected dacha");
  const [formError, setFormError] = useState({});

  const [formList, setFormList] = useState([]);

  const [photos, setPhotos] = useState(selectedDacha.images);

  // console.log(photos, "photos")
  console.log(selectedDacha);
  const handleChange = (e) => {
    setFormList(e);
  };

  const handleRemoveChange = (e) => {
    setFormList(e);
  };

  const handleFormChange = (e) => {
    setFormValue(e);
  };

  const handleErrorChange = (error) => {
    setFormError(error);
  };

  const handleDeletePhoto = (item) => {
    setPhotos((photo) => photo !== item);
  };

  const history = useHistory();

  let giverInfoChanged = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValue.inn.length > 2) {
      dispatch(
        editUniqueDacha(
          selectedDacha.id,
          formList,
          formValue.videoLink,
          formValue.region,
          formValue.district,
          formValue.street,
          formValue.home,
          formValue.appartment,
          formValue.title,
          formValue.countRoom,
          formValue.totalArea,
          formValue.livingArea,
          formValue.singleBad,
          formValue.doubleBad,
          formValue.hostCount,
          formValue.price,
          parseInt(formValue.specialPrice),
          formValue.discountPrice,
          formValue.gage,
          format(formValue.arrivalTime, "dd-MM-yyyy"),
          format(formValue.leftTime, "dd-MM-yyyy"),
          maxDayBook,
          formValue.maxDayBookHours,
          formValue.smoking,
          formValue.alcohol,
          formValue.animal,
          formValue.onlyFamily,
          formValue.loudlyMusic,
          formValue.party,
          formValue.convenienceId,
          formValue.serialNumber,
          formValue.givenPlace,
          formValue.givenDate,
          formValue.passportValidDate,
          radioListCards,
          formValue.account,
          formValue.inn,
          formValue.mfo,
          formValue.bank,
          formValue.branch,
          giverInfoChanged,
          history
        )
      );
    }
  };

  return (
    <div className="container p-md-0 mb-5">
      {beginGetUniqueDacha ? (
        <ProductPageLoading />
      ) : (
        <>
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

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "20px 0",
                    }}
                  >
                    {photos &&
                      photos.length > 0 &&
                      photos.map((item) => {
                        return (
                          <CustomImageDiv
                            onClick={() => handleDeletePhoto(item)}
                          >
                            <img
                              style={{ height: "100%", width: "100%" }}
                              src={item}
                              alt=""
                            />
                            <DeleteIcon size="3x" icon="close" />
                          </CustomImageDiv>
                        );
                      })}
                  </div>

                  <FormGroup>
                    <ControlLabel>{t("Добавить видео.1")}</ControlLabel>
                    <InputJoySecond
                      lineHeight="50px"
                      width="100%"
                      height="50px"
                    >
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
                  <FormPrice />
                  <FormTime />
                  <FormBook />
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-md-6 col-sm-12">
                  <FormAddress />
                </div>
                <div className="col-md-6 col-sm-12">
                  <FormRules />
                </div>
              </div>

              <div className="row pt-2 mt-2">
                <div className="col-md-6 col-sm-12">
                  <FormRentInfo />
                </div>
                <div className="col-md-6 col-sm-12 h-25">
                  <FormAdvantages />
                </div>
              </div>

              <div className="row pt-2 mt-2">
                <div className="col-md-6 col-sm-12">
                  <FormArenda />
                </div>
                <div className="col-md-6 col-sm-12">
                  <FormSchyot />
                </div>
              </div>

              <div className="row pt-3 mt-3">
                <CustomRegisterButton
                  className="col-md-4 col-sm-6 offset-md-4 col-6 offset-sm-3 offset-3"
                  onClick={handleSubmit}
                  // loading={beginAddDacha}
                >
                  {t("Изминеть.1")}
                </CustomRegisterButton>
              </div>
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(ProfileEditPage);
