import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Schema } from "rsuite";
import { useTranslation } from "react-i18next";

import {
  getDistrict,
  deleteDistrict,
  editDistrict,
} from "store/district/districtAction";
import { ProfileDelete, EditRegionModal } from "./ProfileModals";
import {
  beginDeleteDistrictMine,
  beginEditDistrictMine,
  beginGetDistrictMine,
  districtDataMine,
} from "store/district/districtSelector";

const model = Schema.Model({
  nameUz: Schema.Types.StringType().isRequired("Iltimos to'ldiring!"),
  nameRu: Schema.Types.StringType().isRequired("Iltimos to'ldiring!"),
  nameEn: Schema.Types.StringType().isRequired("Iltimos to'ldiring!"),
});

const { HeaderCell, Cell, Column } = Table;

const DistrictTable = () => {
  const { t } = useTranslation();
  const districtData = useSelector(districtDataMine);
  const lastRegionsData = districtData;
  const beginGetDistrict = useSelector(beginGetDistrictMine);
  const beginEditDistrict = useSelector(beginEditDistrictMine);
  const beginDeleteDistrict = useSelector(beginDeleteDistrictMine);
  const dispatch = useDispatch();
  const [handleId, setHandleId] = useState(0);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [formValue, setFormValue] = useState({
    nameUz: "",
    nameRu: "",
    nameEn: "",
  });
  const [formError, setFormError] = useState({});

  const onFormChange = useCallback((e) => {
    setFormValue(e);
  }, []);

  const handleErrorChange = useCallback((e) => {
    setFormError(e);
  }, []);

  const closeDeleteModal = () => {
    setShowDelete(false);
  };

  const closeEdit = () => {
    setShowEdit(false);
  };

  const handleDelete = () => {
    dispatch(deleteDistrict(handleId));
    setShowDelete(false);
  };

  const handleEditRegion = () => {
    dispatch(
      editDistrict(
        handleId,
        formValue.nameUz,
        formValue.nameRu,
        formValue.nameEn
      )
    );
    setShowEdit(false);
  };
  const handleActionSide = (rowData) => {
    const handleModalDelete = () => {
      setShowDelete(true);
      setHandleId(rowData.id);
      console.log(rowData, "rowData");
    };

    const handleEdit = () => {
      setShowEdit(true);
      setHandleId(rowData.id);
      setFormValue({
        nameEn: rowData.nameEn,
        nameUz: rowData.nameUz,
        nameRu: rowData.nameRu,
      });
    };

    return (
      <span>
        <Button size="md" appearance="primary" onClick={handleEdit}>
          {t("Изменить.1")}
        </Button>{" "}
        |{" "}
        <Button size="md" color="red" onClick={handleModalDelete}>
          {t("Удалить.1")}
        </Button>
      </span>
    );
  };

  const getDistrictTable = useCallback(() => {
    dispatch(getDistrict());
  }, [dispatch]);

  useEffect(() => {
    getDistrictTable();
  }, [getDistrictTable]);

  return (
    <div style={{ width: "100%" }}>
      <p>{t("Лист Район.1")}</p>
      <Table
        wordWrap
        height={400}
        style={{ width: "100%" }}
        loading={beginGetDistrict || beginEditDistrict || beginDeleteDistrict}
        data={beginGetDistrict ? lastRegionsData : districtData}
        rowHeight={55}
        affixHorizontalScrollbar
        rowKey="id"
        onRowClick={(data) => {
          //   console.log(data);
        }}
      >
        <Column width={70} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={150}>
          <HeaderCell>{t("Название региона.1")} Uz</HeaderCell>
          <Cell dataKey="nameUz" />
        </Column>

        <Column width={150}>
          <HeaderCell>{t("Название региона.1")} Ру</HeaderCell>
          <Cell dataKey="nameRu" />
        </Column>

        <Column width={150}>
          <HeaderCell>{t("Название региона.1")} En</HeaderCell>
          <Cell dataKey="nameEn" />
        </Column>

        <Column width={210} fixed="right">
          <HeaderCell>{t("Действие.1")}</HeaderCell>
          <Cell>{(rowData) => handleActionSide(rowData)}</Cell>
        </Column>
      </Table>
      <ProfileDelete
        handleDelete={handleDelete}
        // deleteDahchaBegin={beginDeleteRegion}
        show={showDelete}
        close={closeDeleteModal}
        bodyModal={t("Вы дейсвительно хотите удалить этот регион?.1")}
      />

      <EditRegionModal
        handleEdit={handleEditRegion}
        show={showEdit}
        closeEdit={closeEdit}
        formValue={formValue}
        onFormChange={onFormChange}
        handleErrorChange={handleErrorChange}
        formError={formError}
        model={model}
        // editBegin={},
      />
    </div>
  );
};

export default React.memo(DistrictTable);
