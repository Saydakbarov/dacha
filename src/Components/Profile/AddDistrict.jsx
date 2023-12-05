import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Schema, Button } from "rsuite";
import { CustomField } from "./CustomFieldProfile";
import {
  InputMine,
  LanguageInputSelect,
} from "Components/Form/FormSections/FormPriceStyle";
import { useTranslation } from "react-i18next";
import { getAllRegion } from "store/region/regionAction";
import { addDistrict } from "store/district/districtAction";
import { regionsDataMine } from "store/region/regionSelector";

const model = Schema.Model({
  nameUz: Schema.Types.StringType().isRequired("Iltimos to'ldiring!"),
  nameRu: Schema.Types.StringType().isRequired("Iltimos to'ldiring!"),
  nameEn: Schema.Types.StringType().isRequired("Iltimos to'ldiring!"),
});

const AddDistrict = () => {
  const { t } = useTranslation();
  const regionsData = useSelector(regionsDataMine);
  const [myData, setMyData] = useState("");
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    regionId: "",
    nameUz: "",
    nameRu: "",
    nameEn: "",
  });

  const [formError, setFormError] = useState({});

  const handleChange = useCallback((e) => {
    setMyData(e);
  }, []);

  const handleAddDistrict = (e) => {
    e.preventDefault();
    if (
      formValue.nameEn.length > 0 &&
      formValue.nameRu.length > 0 &&
      formValue.nameEn.length > 0
    ) {
      dispatch(
        addDistrict(
          formValue.regionId,
          formValue.nameUz,
          formValue.nameRu,
          formValue.nameEn
        )
      );
      setFormValue({ nameEn: "", nameRu: "", nameUz: "" });
    }
  };

  const handleFormChange = (e) => {
    setFormValue(e);
  };

  const handleErrorChange = (error) => {
    setFormError(error);
  };

  useEffect(() => {
    dispatch(getAllRegion());
  }, [dispatch]);

  return (
    <Form
      onChange={handleFormChange}
      onCheck={handleErrorChange}
      formError={formError}
      formValue={formValue}
      model={model}
      onSubmit={handleAddDistrict}
      className="ml-4 mt-3"
    >
      <div className="row" style={{ width: "100% !important" }}>
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={LanguageInputSelect}
            widthSelect="100%"
            heightSelect="52px"
            data={regionsData}
            labelKey="nameUz"
            valueKey="id"
            value={myData}
            onChange={handleChange}
            searchable
            name="regionId"
            label={t("Выберите регион.1")}
          />
        </div>

        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            inputWidth="100%"
            scrollable={false}
            name="nameUz"
            label={t("Узбекский.1")}
          />
        </div>
      </div>

      <div className="row" style={{ width: "100% !important" }}>
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            inputWidth="100%"
            scrollable={false}
            name="nameRu"
            label={t("Русский.1")}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <CustomField
            accepter={InputMine}
            inputWidth="100%"
            scrollable={false}
            name="nameEn"
            label={t("Ангилийский.1")}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-md-6 col-sm-12 mt-3">
          <Button
            onClick={handleAddDistrict}
            appearance="primary"
            style={{ width: "100%", height: "52px" }}
          >
            {t("Добавить.1")}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default React.memo(AddDistrict);
