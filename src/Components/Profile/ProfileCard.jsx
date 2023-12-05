import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Tooltip, Whisper } from "rsuite";
import { ProfileDelete, ProfileCalendar } from "./ProfileModals";
import pin from "assets/images/map-pin-small.svg";
import calendarIcon from "assets/images/profile-calendar.svg";
import deleteIcon from "assets/images/profile-delete.svg";
import editIcon from "assets/images/profile-edit.svg";
import { deleteUniqueDacha, selectDacha } from "store/addDacha/addDachaAction";
import { useTranslation } from "react-i18next";
import { deleteDahchaBeginMine } from "store/addDacha/addDachaSelector";

const ResultsCard = ({
  img,
  name,
  price,
  location,
  beds,
  guests,
  superPrice,
  superComfort,
  recommended,
  id,
  card,
}) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [dachaId, setDachaId] = useState(0);

  const deleteDahchaBegin = useSelector(deleteDahchaBeginMine);

  const dispatch = useDispatch();
  const { t } = useTranslation()
  const history = useHistory();

  const openDelete = useCallback(() => {
    setShowDelete(true);
    setDachaId(id);
  }, [id]);
  const closeDelete = () => setShowDelete(false);
  const openCalendar = () => setShowCalendar(true);
  const closeCalendar = () => setShowCalendar(false);

  const deleteTooltip = <Tooltip>Удалить</Tooltip>;
  const calendarTooltip = <Tooltip>Календарь</Tooltip>;
  const editTooltip = <Tooltip>Редактировать</Tooltip>;

  const handleDelete = () => {
    dispatch(deleteUniqueDacha(dachaId));
    setShowDelete(false);
  };

  const handleEdit = () => {
    history.push(`/profile/joy/${id}`);
    dispatch(selectDacha(card));
  };

  return (
    // <Link to={`/dachas/joy/${id}`} className="col-6">
    <div className="col-12 col-md-6 col-sm-12">
      <div className="results-card my-2" style={{ cursor: "default" }}>
        <img src={img} alt="" className="results-img" />
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <div className="results-info">
            <p className="results-text">{name}</p>
            <div className="results-location">
              <img src={pin} alt="" className="results-location-pin" />
              <p className="results-location-text">{location}</p>
            </div>
            <ul
              className="results-card-list"
              style={{
                fontSize: 14,
                color: "#777",
                marginTop: 10,
              }}
            >
              <li className="results-card-item">Гости: {guests}</li>
              <li className="results-card-item">Комнаты: {beds}</li>
            </ul>
            <div className="results-price">{price} сум</div>
          </div>

          <div className="profile-btns">
            <Whisper placement="right" trigger="hover" speaker={deleteTooltip}>
              <button className="profile-delete" onClick={openDelete}>
                <img src={deleteIcon} alt="Удалить" />
              </button>
            </Whisper>

            <ProfileDelete
              handleDelete={handleDelete}
              deleteDahchaBegin={deleteDahchaBegin}
              show={showDelete}
              close={closeDelete}
              bodyModal={t("Вы дейсвительно хотите удалить этот пост?.1")}
            />

            <Whisper
              placement="right"
              trigger="hover"
              speaker={calendarTooltip}
            >
              <button className="profile-calendar" onClick={openCalendar}>
                <img src={calendarIcon} alt="Календарь" />
              </button>
            </Whisper>

            <ProfileCalendar show={showCalendar} close={closeCalendar} />

            <Whisper placement="right" trigger="hover" speaker={editTooltip}>
              <button className="profile-edit" onClick={handleEdit}>
                <img src={editIcon} alt="Изменить" />
              </button>
            </Whisper>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ResultsCard;
