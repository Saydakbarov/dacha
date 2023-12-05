import axiosInstance from "service/axiosInstance";
import { Notification } from "rsuite";

export const POST_CONVIENCE_BEGIN = "POST_CONVIENCE_BEGIN";
export const POST_CONVIENCE_SUCCESS = "POST_CONVIENCE_SUCCESS";
export const POST_CONVIENCE_FAIL = "POST_CONVIENCE_FAIL";

export const GET_CONVIENCE_BEGIN = "GET_CONVIENCE_BEGIN";
export const GET_CONVIENCE_SUCCESS = "GET_CONVIENCE_SUCCESS";
export const GET_CONVIENCE_FAIL = "GET_CONVIENCE_FAIL";

export const EDIT_CONVIENCE_BEGIN = "EDIT_CONVIENCE_BEGIN";
export const EDIT_CONVIENCE_SUCCESS = "EDIT_CONVIENCE_SUCCESS";
export const EDIT_CONVIENCE_FAIL = "EDIT_CONVIENCE_FAIL";

export const DELETE_CONVIENCE_BEGIN = "DELETE_CONVIENCE_BEGIN";
export const DELETE_CONVIENCE_SUCCESS = "DELETE_CONVIENCE_SUCCESS";
export const DELETE_CONVIENCE_FAIL = "DELETE_CONVIENCE_FAIL";

export const postConviciences = (nameUz, nameRu, nameEn) => async (
  dispatch
) => {
  dispatch({ type: POST_CONVIENCE_BEGIN });

  try {
    const data = {
      nameUz: nameUz,
      nameRu: nameRu,
      nameEn: nameEn,
    };
    await axiosInstance().post("/api/v1/convenience/save", data);

    dispatch({ type: POST_CONVIENCE_SUCCESS });
    Notification["success"]({
      title: "Success",
      placement: "bottomEnd",
    });
  } catch (error) {
    dispatch({ type: POST_CONVIENCE_FAIL });

    Notification["error"]({
      title: "Error",
      placement: "bottomEnd",
    });
  }
};

export const getConviciences = (page1=0) => async dispatch => {
    dispatch({type: GET_CONVIENCE_BEGIN});

    try {
        const response = await axiosInstance().get(`/api/v1/convenience/all?page1=${page1}`);

        dispatch({type: GET_CONVIENCE_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: GET_CONVIENCE_FAIL})
    }
}