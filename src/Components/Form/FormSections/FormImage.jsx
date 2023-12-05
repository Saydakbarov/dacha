import React from "react";
import uploadImg from "assets/images/addimg.png";
import { Uploader } from "rsuite";
import { UploaderDiv } from "./FormPriceStyle";
import { useTranslation } from "react-i18next";

const FormImage = ({ value, handleChange, handleRemoveChange }) => {
  const { t } = useTranslation();

  return (
    <>
      <Uploader
        listType="picture-text"
        fileList={value}
        draggable
        removable
        onRemove={handleRemoveChange}
        name="photos"
        onChange={handleChange}
        autoUpload={false}
        // multiple={true}
        renderFileInfo={(file, fileElement) => {
          return (
            <div>
              <span>
                {t("Имя файлов.1")}: {file.name}
              </span>
            </div>
          );
        }}
      >
        <UploaderDiv className="row p-5 d-flex justify-content-center flex-row align-items-center">
          <div className="col-4 d-flex justify-content-center flex-column align-items-center">
            <img src={uploadImg} alt="" />
            <button className="admin-img-btn">{t("Загрузить фото.1")}</button>
          </div>
          <div
            className="col-8 align-items-center justify-content-center"
            style={{ marginTop: "75px" }}
          >
            <p className="admin-img-text my-2">
              {t("Количество фотографий должно быть не менее 5.1")}
            </p>
            <p className="admin-img-text my-2">
              {t("Качество фотографий должно быть не менее 1080x762 px.1")}
            </p>
            <p className="admin-img-text my-2">
              {t("Размер каждой фотографии должно быть не больше 3МБ.1")}
            </p>
          </div>
        </UploaderDiv>
      </Uploader>
    </>
  );
};

export default React.memo(FormImage);
