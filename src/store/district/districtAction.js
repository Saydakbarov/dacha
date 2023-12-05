import axiosInstance from "service/axiosInstance";
import { Notification } from 'rsuite';

export const ADD_DISTRICT_BEGIN = 'ADD_DISTRICT_BEGIN';
export const ADD_DISTRICT_SUCCESS = 'ADD_DISTRICT_SUCCESS';
export const ADD_DISTRICT_FAIL = 'ADD_DISTRICT_FAIL';

export const GET_DISTRICT_BEGIN = 'GET_DISTRICT_BEGIN';
export const GET_DISTRICT_SUCCESS = 'GET_DISTRICT_SUCCESS';
export const GET_DISTRICT_FAIL = 'GET_DISTRICT_FAIL';

export const GET_DISTRICT_BEGIN_LANG = 'GET_DISTRICT_BEGIN_LANG';
export const GET_DISTRICT_SUCCESS_LANG = 'GET_DISTRICT_SUCCESS_LANG';
export const GET_DISTRICT_FAIL_LANG = 'GET_DISTRICT_FAIL_LANG';

export const GET_DISTRICT_BY_ID_BEGIN = "GET_DISTRICT_BY_ID_BEGIN";
export const GET_DISTRICT_BY_ID_SUCCESS = "GET_DISTRICT_BY_ID_SUCCESS";
export const GET_DISTRICT_BY_ID_FAIL = "GET_DISTRICT_BY_ID_FAIL";

export const GET_DISTRICT_DATA_BY_ID_BEGIN = "GET_DISTRICT_DATA_BY_ID_BEGIN";
export const GET_DISTRICT_DATA_BY_ID_SUCCESS = "GET_DISTRICT_DATA_BY_ID_SUCCESS";
export const GET_DISTRICT_DATA_BY_ID_FAIL = "GET_DISTRICT_DATA_BY_ID_FAIL";

export const EDIT_DISTRICT_BEGIN = 'GET_DISTRICT_BEGIN';
export const EDIT_DISTRICT_SUCCESS = 'GET_DISTRICT_SUCCESS';
export const EDIT_DISTRICT_FAIL = 'GET_DISTRICT_FAIL';

export const DELET_DISTRICT_BEGIN = 'GET_DISTRICT_BEGIN';
export const DELET_DISTRICT_SUCCESS = 'GET_DISTRICT_SUCCESS';
export const DELET_DISTRICT_FAIL = 'GET_DISTRICT_FAIL';

export const addDistrict = (regionId, nameUz, nameRu, nameEn) => async dispatch => {
    dispatch({ type: ADD_DISTRICT_BEGIN });

    const data = {
        "regionId": regionId,
        "nameUz": nameUz,
        "nameRu": nameRu,
        "nameEn": nameEn
    }
    try {
        await axiosInstance().post('/api/v1/district', data)

        dispatch({ type: ADD_DISTRICT_SUCCESS });
        Notification["success"]({
            title: "Tuman qo'shildi",
            placement: "bottomEnd",
        });
    } catch (error) {
        dispatch({ type: ADD_DISTRICT_FAIL });
        Notification["error"]({
            title: "Iltimos qaytadan urining!",
            placement: "bottomEnd",
        });
    }
};

export const getDistrict = (page=0, size=16) => async dispatch => {
    dispatch({ type: GET_DISTRICT_BEGIN });

    try {
        const response = await axiosInstance().get(`/api/v1/district/all?page=${page}&size=${size}`);

        dispatch({ type: GET_DISTRICT_SUCCESS, payload: response.data });
    } catch (error) {

        dispatch({ type: GET_DISTRICT_FAIL });
        Notification["error"]({
            title: "Iltimos qaytadan urining!",
            placement: "bottomEnd",
        });
    }
};

export const getDistrictByLanguage = () => async dispatch => {
    dispatch({ type: GET_DISTRICT_BEGIN_LANG });

    try {
        const response = await axiosInstance().get(`/api/v1/district`);

        dispatch({ type: GET_DISTRICT_SUCCESS_LANG, payload: response.data });
    } catch (error) {

        dispatch({ type: GET_DISTRICT_FAIL_LANG });
        Notification["error"]({
            title: "Iltimos qaytadan urining!",
            placement: "bottomEnd",
        });
    }
};

export const editDistrict = (id, nameUz, nameRu, nameEn) => async dispatch => {
    dispatch({ type: EDIT_DISTRICT_BEGIN });

    const data = {
        "nameUz": nameUz,
        "nameRu": nameRu,
        "nameEn": nameEn
    };

    try {
        await axiosInstance().put(`/api/v1/district/${id}`, data)

        dispatch({ type: EDIT_DISTRICT_SUCCESS });
    } catch (error) {
        dispatch({ type: EDIT_DISTRICT_FAIL });

        Notification["error"]({
            title: "Iltimos qaytadan urining!",
            placement: "bottomEnd",
        });
    }
    dispatch(getDistrict())
};

export const deleteDistrict = (id) => async dispatch => {
    dispatch({ type: DELET_DISTRICT_BEGIN });

    try {
        await axiosInstance().delete(`/api/v1/district/${id}`);

        dispatch({ type: DELET_DISTRICT_SUCCESS, payload: id });
        Notification["success"]({
            title: "O'chirildi",
            placement: "bottomEnd",
        });
    } catch (error) {

        dispatch({ type: DELET_DISTRICT_FAIL });
        Notification["error"]({
            title: "Удалите области, принадлежащие области!",
            placement: "bottomEnd",
        });
    }
    dispatch(getDistrict())
};


export const getDistrictById = (id) => async dispatch => {
    dispatch({type: GET_DISTRICT_BY_ID_BEGIN});

    try {
        const response = await axiosInstance().get(`/api/v1/district/${id}`);

        dispatch({type: GET_DISTRICT_BY_ID_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: GET_DISTRICT_BY_ID_FAIL})
    }
};

export const getDistrictDataById = (id) => async dispatch => {
    dispatch({type: GET_DISTRICT_DATA_BY_ID_BEGIN});

    try {
        const response = await axiosInstance().get(`/api/v1/district/regionId/${id}`);

        dispatch({type: GET_DISTRICT_DATA_BY_ID_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: GET_DISTRICT_DATA_BY_ID_FAIL})
    }
}