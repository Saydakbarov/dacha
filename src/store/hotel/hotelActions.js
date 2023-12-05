import axiosInstance from "service/axiosInstance";

export const ADD_ROOM = "ADD_ROOM";
export const CLOSE_ADD_ROOM = "CLOSE_ADD_ROOM";
export const ADD_HOTEL_BEGIN = "ADD_HOTEL_BEGIN";
export const ADD_HOTEL_SUCCESS = "ADD_HOTEL_SUCCESS";
export const ADD_HOTEL_FAIL = "ADD_HOTEL_FAIL";

export const addRoom = () => {
  return {
    type: ADD_ROOM,
  };
};

export const closeAddRoom = () => {
  return {
    type: CLOSE_ADD_ROOM,
  };
};

export const addHotel = (
  images,
  videoUrl,
  mainInformation,
  phoneNumberFirst,
  phoneNumberLast,
  email,
  telegramUsername,
  bankNumber,
  inn,
  mfo,
  bankName,
  bankBranch,
  pickUpFromTheAirport,
  takeToTheAirport,
  name,
  surname,
  passportNumber,
  passportValidDate,
  givenPlace,
  whenGave,
  smoking,
  petsAvailable,
  simplePrice,
  priceOfSale,
  livingArea,
  roomType,
  region,
  district,
  imgRoom,
  convenienceId
) => async (dispatch) => {
  dispatch({ type: ADD_HOTEL_BEGIN });

  try {
    const formData = new FormData();
    images.map(photo => formData.append("images", photo.blobFile));
    formData.append("videoUrl", videoUrl);
    formData.append("mainInformation", mainInformation);
    formData.append("phoneNumberFirst", phoneNumberFirst);
    formData.append("phoneNumberLast", phoneNumberLast);
    formData.append("email", email);
    formData.append("telegramUsername", telegramUsername);
    formData.append("bankNumber", bankNumber);
    formData.append("inn", inn);
    formData.append("mfo", mfo);
    formData.append("bankName", bankName);
    formData.append("bankBranch", bankBranch);
    formData.append("pickUpFromTheAirport", pickUpFromTheAirport);
    formData.append("takeToTheAirport", takeToTheAirport);
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("passportNumber", passportNumber);
    formData.append("passportValidDate", passportValidDate);
    formData.append("givenPlace", givenPlace);
    formData.append("whenGave", whenGave);
    formData.append("smoking", smoking);
    formData.append("petsAvailable", petsAvailable);
    formData.append("simplePrice", simplePrice);
    formData.append("priceOfSale", priceOfSale);
    formData.append("livingArea", livingArea);
    formData.append("roomType", roomType);
    formData.append("region", region);
    formData.append("district", district);
    imgRoom.map(photo => formData.append("imgRoom", photo.blobFile));
    formData.append("convenienceId", convenienceId);


    await axiosInstance().post("/api/v1/hotel/save", formData);
    dispatch({ type: ADD_HOTEL_SUCCESS });
  } catch (error) {
    dispatch({ type: ADD_HOTEL_FAIL });
  }
};
