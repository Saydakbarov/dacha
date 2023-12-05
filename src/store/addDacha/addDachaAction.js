import { Notification } from "rsuite";
import axiosInstance from "service/axiosInstance";

export const ADD_DACHA_BEGIN = "ADD_DACHA_BEGIN";
export const ADD_DACHA_SUCCESS = "ADD_DACHA_SUCCESS";
export const ADD_DACHA_ERROR = "ADD_DACHA_ERROR";

export const BEGIN_ALL_DACHA = "BEGIN_ALL_DACHA";
export const SUCCESS_ALL_DACHA = "SUCCESS_ALL_DACHA";
export const FAIL_ALL_DACHA = "FAIL_ALL_DACHA";

export const BEGIN_UNIQUE_DACHA = "BEGIN_UNIQUE_DACHA";
export const SUCCESS_UNIQUE_DACHA = "SUCCESS_UNIQUE_DACHA";
export const FAIL_UNIQUE_DACHA = "FAIL_UNIQUE_DACHA";

export const HANDLE_FORM = "HANDLE_FORM";
export const HANDLE_ADD_DAY_BOOK = "HANDLE_ADD_DAY_BOOK";
export const HANDLE_MINUS_DAY_BOOK = "HANDLE_MINUS_DAY_BOOK";
export const HANDLE_PAYMENT_TYPE = "HANDLE_PAYMENT_TYPE";

export const DELETE_UNIQUE_DACHA_BEGIN = "DELETE_UNIQUE_DACHA_BEGIN";
export const DELETE_UNIQUE_DACHA_SUCCESS = "DELETE_UNIQUE_DACHA_SUCCESS";
export const DELETE_UNIQUE_DACHA_FAIL = "DELETE_UNIQUE_DACHA_FAIL";

export const BEGIN_EDIT_DACHA = "BEGIN_EDIT_DACHA";
export const SUCCESS_EDIT_DACHA = "SUCCESS_EDIT_DACHA";
export const FAIL_EDIT_DACHA = "FAIL_EDIT_DACHA";

export const SELECT_DACHA = "SELECT_DACHA";

export const handlePayment = (e) => {
  return {
    type: HANDLE_PAYMENT_TYPE,
    payload: e,
  };
};

export const handlePlusRedux = () => {
  return {
    type: HANDLE_ADD_DAY_BOOK,
  };
};

export const handleMinusRedux = () => {
  return {
    type: HANDLE_MINUS_DAY_BOOK,
  };
};

export const handleChangeFormValue = (e) => {
  return {
    type: HANDLE_FORM,
    payload: e,
  };
};

export const addDacha = (
  photos,
  videoUrl,
  region,
  district,
  street,
  home,
  apartment,
  title,
  countRoom,
  totalArea,
  livingArea,
  singleBad,
  doubleBad,
  hostCount,
  price,
  specialPrice,
  discountPrice,
  gage,
  arrivalTime,
  leftTime,
  maxDayBook,
  maxDayBookHours,
  smoking,
  alcohol,
  animal,
  onlyFamily,
  loudlyMusic,
  party,
  convenienceId,
  serialNumber,
  givenPlace,
  givenDate,
  passportValidDate,
  paymentType,
  account,
  mfo,
  inn,
  bank,
  branch,
  giverInfoChanged,
  history
) => async (dispatch) => {
  dispatch({ type: ADD_DACHA_BEGIN });

  try {
    const formData = new FormData();

    photos.map((photo) => formData.append("photos", photo.blobFile));
    formData.append("videoUrl", videoUrl);
    formData.append("region", region);
    formData.append("district", district);
    formData.append("street", street);
    formData.append("home", home);
    formData.append("apartment", apartment);
    formData.append("title", title);
    formData.append("countRoom", countRoom);
    formData.append("totalArea", totalArea);
    formData.append("livingArea", livingArea);
    formData.append("singleBad", singleBad);
    formData.append("doubleBad", doubleBad);
    formData.append("hostCount", hostCount);
    formData.append("price", price);
    formData.append("specialPrice", specialPrice);
    formData.append("discountPrice", discountPrice);
    formData.append("gage", gage);
    formData.append("arrivalTime", arrivalTime);
    formData.append("leftTime", leftTime);
    formData.append("maxDayBook", maxDayBook);
    formData.append("maxDayBookHours", maxDayBookHours);
    formData.append("smoking", smoking);
    formData.append("alcohol", alcohol);
    formData.append("animal", animal);
    formData.append("onlyFamily", onlyFamily);
    formData.append("loudlyMusic", loudlyMusic);
    formData.append("party", party);
    formData.append("convenienceId", convenienceId);
    formData.append("serialNumber", serialNumber);
    formData.append("givenPlace", givenPlace);
    formData.append("givenDate", givenDate);
    formData.append("passportValidDate", passportValidDate);
    formData.append("giverInfoChanged", giverInfoChanged);

    formData.append("paymentType", paymentType);
    formData.append("account", account);
    formData.append("mfo", mfo);
    formData.append("inn", inn);
    formData.append("bank", bank);
    formData.append("branch", branch);
    //pasport
    // formData.append("latitude", latitude);
    // formData.append("longitude", longitude);

    const response = await axiosInstance().post("/api/v1/dacha", formData);

    dispatch({ type: ADD_DACHA_SUCCESS, payload: response });
    history.push("/dachas");
  } catch (error) {
    dispatch({ type: ADD_DACHA_ERROR });
    Notification["warning"]({
      title: "Iltimos formani to'liq to'ldiring",
      placement: "bottomEnd",
    });
  }
};

export const getAllDacha = (page = 0, size = 16) => async (dispatch) => {
  dispatch({ type: BEGIN_ALL_DACHA });

  const formData = new FormData();
  formData.append("page", page);
  formData.append("size", size);

  try {
    const response = await axiosInstance().get(`/api/v1/dacha?page=${page}&size=${size}`);

    dispatch({ type: SUCCESS_ALL_DACHA, payload: response.data });
  } catch (error) {
    dispatch({ type: FAIL_ALL_DACHA });

    Notification["error"]({
      title: "Dachalarni yuklashda xatolik mavjud!!!",
      placement: "bottomEnd",
    });
  }
};

export const getUniqueDacha = (id) => async (dispatch) => {
  dispatch({ type: BEGIN_UNIQUE_DACHA });

  try {
    const response = await axiosInstance().get(`/api/v1/dacha/${id}`);

    dispatch({ type: SUCCESS_UNIQUE_DACHA, payload: response.data });
  } catch (error) {
    dispatch({ type: FAIL_UNIQUE_DACHA });

    Notification["error"]({
      title: "Dacha haqida ma'lumot olishda xatolik bor!!!",
      placement: "bottomEnd",
    });
  }
};

export const deleteUniqueDacha = (id) => async (dispatch) => {
  dispatch({ type: DELETE_UNIQUE_DACHA_BEGIN });

  try {
    await axiosInstance().delete(`/api/v1/dacha/${id}`);

    dispatch({ type: DELETE_UNIQUE_DACHA_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_UNIQUE_DACHA_FAIL });

    Notification["error"]({
      title: "Dachani o'chirishda xatolik bor!!!",
      placement: "bottomEnd",
    });
  }
};

export const selectDacha = (dacha) => {
  return {
    type: SELECT_DACHA,
    payload: dacha,
  };
};

export const editUniqueDacha = (
  id,
  photos,
  videoUrl,
  region,
  district,
  street,
  home,
  apartment,
  title,
  countRoom,
  totalArea,
  livingArea,
  singleBad,
  doubleBad,
  hostCount,
  price,
  specialPrice,
  discountPrice,
  gage,
  arrivalTime,
  leftTime,
  maxDayBook,
  maxDayBookHours,
  smoking,
  alcohol,
  animal,
  onlyFamily,
  loudlyMusic,
  party,
  convenienceId,
  serialNumber,
  givenPlace,
  givenDate,
  passportValidDate,
  paymentType,
  account,
  mfo,
  inn,
  bank,
  branch,
  giverInfoChanged = true,
  history
) => async (dispatch) => {
  dispatch({ type: BEGIN_EDIT_DACHA });

  try {
    const formData = new FormData();
    photos.map((photo) => formData.append("photos", photo.blobFile));
    formData.append("videoUrl", videoUrl);
    formData.append("region", region);
    formData.append("district", district);
    formData.append("street", street);
    formData.append("home", home);
    formData.append("apartment", apartment);
    formData.append("title", title);
    formData.append("countRoom", countRoom);
    formData.append("totalArea", totalArea);
    formData.append("livingArea", livingArea);
    formData.append("singleBad", singleBad);
    formData.append("doubleBad", doubleBad);
    formData.append("hostCount", hostCount);
    formData.append("price", price);
    formData.append("specialPrice", specialPrice);
    formData.append("discountPrice", discountPrice);
    formData.append("gage", gage);
    formData.append("arrivalTime", arrivalTime);
    formData.append("leftTime", leftTime);
    formData.append("maxDayBook", maxDayBook);
    formData.append("maxDayBookHours", maxDayBookHours);
    formData.append("smoking", smoking);
    formData.append("alcohol", alcohol);
    formData.append("animal", animal);
    formData.append("onlyFamily", onlyFamily);
    formData.append("loudlyMusic", loudlyMusic);
    formData.append("party", party);
    formData.append("convenienceId", convenienceId);
    formData.append("serialNumber", serialNumber);
    formData.append("givenPlace", givenPlace);
    formData.append("givenDate", givenDate);
    formData.append("passportValidDate", passportValidDate);
    formData.append("giverInfoChanged", giverInfoChanged);

    formData.append("paymentType", paymentType);
    formData.append("account", account);
    formData.append("mfo", mfo);
    formData.append("inn", inn);
    formData.append("bank", bank);
    formData.append("branch", branch);

    const response = await axiosInstance().put(`/api/v1/dacha/${id}`, formData);

    dispatch({ type: SUCCESS_EDIT_DACHA, payload: response });
    history.push("/profile");
  } catch (error) {
    dispatch({ type: FAIL_EDIT_DACHA });

    Notification["error"]({
      title: "Dachalarni o'zgartirishda xatolik mavjud!",
      placement: "bottomEnd",
    });
  }
};
