import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CustomRegisterButton } from "./FormStyle";
import FormRentInfo from "./FormSections/FormRentInfo";
import { useTranslation } from "react-i18next";

import {
  Schema,
  FormGroup,
  Form,
  ControlLabel,
  FormControl,
  InputGroup,
} from "rsuite";

import FormAddress from "./FormSections/FormAddress";
import FormAdvantages from "./FormSections/FormAdvantages";
import FormArenda from "./FormSections/FormArenda";
import FormSchyot from "./FormSections/FormSchyot";
import { addDacha, handleChangeFormValue } from "store/addDacha/addDachaAction";

import { InputJoySecond } from "./FormSections/FormPriceStyle";
import FormPrice from "./FormSections/FormPrice";
import FormImage from "./FormSections/FormImage";
import FormTime from "./FormSections/FormTime";
import FormBook from "./FormSections/FormBook";
import FormRules from "./FormSections/FormRules";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";
import {
  getDistrictById,
  getDistrictDataById,
} from "store/district/districtAction";
import { getAllRegionByName } from "store/region/regionAction";
import {
  beginAddDachaMine,
  formHandleDachaMine,
  maxDayBookMine,
  radioListCardsMine,
} from "store/addDacha/addDachaSelector";
import { latitudeMine, longitudeMine } from "store/map/mapSelector";

const model = Schema.Model({
  mail: Schema.Types.StringType()
    .isEmail("Elektron manzilni kiriting!")
    .isRequired("Iltimos to'ldiring!"),
});

const FormMain = () => {
  const { t } = useTranslation();

  const beginAddDacha = useSelector(beginAddDachaMine);
  const maxDayBook = useSelector(maxDayBookMine);
  const radioListCards = useSelector(radioListCardsMine);

  const formValue = useSelector(formHandleDachaMine);

  const [formList, setFormList] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();
  const latitude = useSelector(latitudeMine);
  const longitude = useSelector(longitudeMine);

  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    setFormList(e);
  };

  const handleRemoveChange = (e) => {
    setFormList(e);
  };

  let giverInfoChanged = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.inn.length > 2) {
      dispatch(
        addDacha(
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

  const handleFormChange = useCallback(
    (formValue) => {
      dispatch(handleChangeFormValue(formValue));
    },
    [dispatch]
  );

  const handleErrorChange = useCallback((formError) => {
    setFormError(formError);
  }, []);

  const getDistrictData = useCallback(() => {
    dispatch(getDistrictDataById(formValue.region));
  }, [dispatch, formValue.region]);

  const getAllregion = useCallback(() => {
    dispatch(getAllRegionByName());
  }, [dispatch]);

  useEffect(() => {
    getAllregion();
    getDistrictData();
  }, [getDistrictData, getAllregion]);

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
                <ControlLabel style={{ marginTop: 20 }}>
                  {t("Добавить видео.1")}
                </ControlLabel>
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
              loading={beginAddDacha}
            >
              {t("Зарегистрироваться.1")}
            </CustomRegisterButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(FormMain);
