import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Schema } from "rsuite";
import { useTranslation } from "react-i18next";
import {
  getConBeginMine,
  getConDataMine,
} from "store/convinieces/conviniencesSelector";
import { getConviciences } from "store/convinieces/conviniencesAction";

const { HeaderCell, Cell, Column } = Table;

const ConsTable = () => {
  const { t } = useTranslation();

  const getConBegin = useSelector(getConBeginMine);
  const getConData = useSelector(getConDataMine);
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
    // dispatch(deleteDistrict(handleId));
    setShowDelete(false);
  };

  const handleEditRegion = () => {
    // dispatch(editDistrict(handleId, formValue.nameUz, formValue.nameRu, formValue.nameEn))
    setShowEdit(false);
  };
  const handleActionSide = (rowData) => {
    const handleModalDelete = () => {
      setShowDelete(true);
      setHandleId(rowData.regionId);
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

  const getConviciencesMine = useCallback(() => {
    dispatch(getConviciences())
  }, [dispatch]);

  useEffect(() => {
    getConviciencesMine()
  }, [getConviciencesMine])

  return (
    <div style={{ width: "100%" }}>
      <Table
        wordWrap
        height={400}
        style={{ width: "100%" }}
        loading={getConBegin}
        data={getConData}
        rowHeight={55}
        affixHorizontalScrollbar
        rowKey="id"
        onRowClick={(data) => {
          console.log(data);
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
    </div>
  );
};

export default React.memo(ConsTable);
