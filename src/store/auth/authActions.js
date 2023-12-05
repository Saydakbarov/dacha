import axiosInstance from "../../service/axiosInstance";
import { Notification } from "rsuite";
import axios from "axios";

//Login Side
export const BEGIN_LOGIN = "BEGIN_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";

//Sign Up side
export const BEGIN_SIGNUP = "BEGIN_SIGNUP";
export const SUCCESS_SIGNUP = "SUCCESS_SIGNUP";
export const ERROR_SIGNUP = "ERROR_SIGNUP";

export const BEGIN_LOGIN_AUTHORIZATION = "BEGIN_LOGIN_AUTHORIZATION";
export const SUCCESS_LOGIN_AUTHORIZATION = "SUCCESS_LOGIN_AUTHORIZATION";
export const ERROR_LOGIN_AUTHORIZATION = "ERROR_LOGIN_AUTHORIZATION";

//Log out side

export const LOGOUT_MAIN = "LOGOUT_MAIN";

// Forget Password
export const FORGET_PASSWORD = "FORGET_PASSWORD";
export const FORGET_PASSWORD_ERROR = "FORGET_PASSWORD_ERROR";

export const signUpAuth = (
  firstName,
  lastName,
  phoneNumber,
  bornDate
) => async (dispatch) => {
  dispatch({ type: BEGIN_SIGNUP });
  try {

    const data = {
      "firstName": firstName,
      "lastName": lastName,
      "phoneNumber": phoneNumber,
      "bornDate": bornDate,
    };

    const response = await axiosInstance().post("/api/v1/user", data);

    dispatch({
      type: SUCCESS_SIGNUP,
      payload: response.data,
      status: response.status,
    });
  } catch (err) {
    dispatch({ type: ERROR_SIGNUP });
  }
};

export const loginAuthWIthSms = (secretKey, code, history) => async (
  dispatch
) => {
  dispatch({ type: BEGIN_LOGIN_AUTHORIZATION });

  try {
    const response = await axiosInstance().put(`/api/v1/user/confirm-sms`, {
      secretKey: secretKey,
      code: code,
    });

    dispatch({ type: SUCCESS_LOGIN_AUTHORIZATION, payload: response.data });
    history.push("/login");
  } catch (err) {
    dispatch({ type: ERROR_LOGIN_AUTHORIZATION });
  }
};

export const loginAuth = (username, password, grant_type) => async (
  dispatch
) => {
  dispatch({ type: BEGIN_LOGIN });

  try {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("grant_type", grant_type);
    // , "https://data.heroku.com/datastores/1346b8ff-40e8-4f1d-95af-ba873af1b656" "http://localhost:3000/oauth/token"
    const response = await axios.post(
      "https://app-joytop.herokuapp.com/oauth/token",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Basic d2ViLWNsaWVudDpZeTVqclNEc0thUFNXYURUakREajY=",
        },
      }
    );

    // Yy5jrSDsKaPSWaDTjDDj6;  d2ViLWNsaWVudDpZeTVqclNEc0thUFNXYURUakREajY=

    localStorage.setItem("token", response.data.access_token);
    dispatch({ type: SUCCESS_LOGIN });
  } catch (err) {
    dispatch({ type: ERROR_LOGIN });
    Notification["error"]({
      title: "Parol yoki login xato",
      placement: "bottomEnd",
    });
  }
};

export const authLogout = () => {
  return {
    type: LOGOUT_MAIN,
  };
};

export const forgetPassword = (phoneNumber) => async (dispatch) => {
  try {
    const response = await axiosInstance().put(`/api/v1/user/forgetPass`, {
      phoneNumber: phoneNumber,
    });
    dispatch({ type: FORGET_PASSWORD, payload: response.data });
  } catch (err) {
    dispatch({ type: FORGET_PASSWORD_ERROR });
  }
};


// "http://localhost:3000/oauth/token",