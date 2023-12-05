import React from "react";
import { Modal, Button, Badge, Form, FormControl, ControlLabel, FormGroup } from "rsuite";
import { getDate } from "date-fns";
import { CustomCalendar } from "./ProfileStyle";
import { useTranslation } from 'react-i18next';
import { InputMine } from "../Form/FormSections/FormPriceStyle";
import { memo } from "react";


const styles = {
  top: "20%",
  width: "300px",
  margin: "auto",
};

const stylesEdit = {
  top: "10%",
  width: "300px",
  margin: "auto",
};

export const ProfileDelete = memo(({
  show,
  close,
  handleDelete,
  deleteDahchaBegin,
  bodyModal
}) => {
  const { t } = useTranslation();
  return (
    <Modal show={show} onHide={close} style={styles}>
      <Modal.Header>
        <Modal.Title>{t("Удалить.1")}</Modal.Title>
        <Modal.Body>{bodyModal}</Modal.Body>
        <Modal.Footer>
          <Button
            loading={deleteDahchaBegin}
            onClick={handleDelete}
            appearance="primary"
          >
            {t("Да.1")}
          </Button>
          <Button onClick={close} appearance="subtle">
            {t("Нет.1")}
          </Button>
        </Modal.Footer>
      </Modal.Header>
    </Modal>
  );
});

export const ProfileCalendar = ({ show, close }) => {
  const getTodoList = (date) => {
    const day = getDate(date);

    switch (day) {
      case 10:
        return [
          { time: "10:30 am", title: "Meeting" },
          { time: "12:00 pm", title: "Lunch" },
        ];
      case 15:
        return [
          { time: "09:30 pm", title: "Products Introduction Meeting" },
          { time: "12:30 pm", title: "Client entertaining" },
          { time: "02:00 pm", title: "Product design discussion" },
          { time: "05:00 pm", title: "Product test and acceptance" },
          { time: "06:30 pm", title: "Reporting" },
          { time: "10:00 pm", title: "Going home to walk the dog" },
        ];
      default:
        return [];
    }
  };

  const renderCell = (date) => {
    const list = getTodoList(date);

    if (list.length) {
      return <Badge className="calendar-todo-item-badge" />;
    }

    return null;
  };

  const handleDate = (e) => {
    console.log(e, "day");
  };

  return (
    <Modal show={show} onHide={close} style={{ top: "4%" }}>
      <Modal.Header />
      <Modal.Body>
        <div>
          <CustomCalendar
            compact
            bordered
            renderCell={renderCell}
            onSelect={handleDate}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};


const CustomField = ({ name, message, label, accepter, error, ...props }) => {
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

export const EditRegionModal = memo(({
  show,
  closeEdit,
  handleEdit,
  editBegin,
  formValue,
  onFormChange,
  handleErrorChange,
  formError,
  model
}) => {
  const { t } = useTranslation();
  return (
    <Modal show={show} onHide={closeEdit} style={stylesEdit}>
      <Modal.Header>
        <Modal.Title>{t("Изменить.1")}</Modal.Title>
        <Modal.Body>
          <Form
            formValue={formValue}
            onChange={onFormChange}
            onCheck={handleErrorChange}
            formError={formError}
            model={model}
            onSubmit={handleEdit}
          >
            <CustomField
              name="nameUz"
              accepter={InputMine}
              placeholder={t("Узбекский.1")}
              label={t("Узбекский.1")}
              style={{ width: "100%" }}
            />
            <CustomField
              name="nameRu"
              accepter={InputMine}
              placeholder={t("Русский.1")}
              label={t("Русский.1")}
              style={{ width: "100%" }}
            />
            <CustomField
              name="nameEn"
              accepter={InputMine}
              placeholder={t("Ангилийский.1")}
              label={t("Ангилийский.1")}
              style={{ width: "100%" }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            loading={editBegin}
            onClick={handleEdit}
            appearance="primary"
          >
            {t("Да.1")}
          </Button>
          <Button onClick={closeEdit} appearance="subtle">
            {t("Нет.1")}
          </Button>
        </Modal.Footer>
      </Modal.Header>
    </Modal>
  );
});


