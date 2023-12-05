import React, { useState } from "react";
import { RoomAddField } from "./HotelStyle";
import { useTranslation } from "react-i18next";
import { PlusIcon } from "./PlusIcon";
import RoomModal from "./RoomModal";

const HotelRoomType = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <RoomAddField className="col-12" onClick={toggleModal}>
        <PlusIcon />
        <h4>{t("Добавить типь комнаты.1")}</h4>
      </RoomAddField>
      <RoomModal closeModal={closeModal} openModal={openModal} />
    </>
  );
};

export default React.memo(HotelRoomType);
