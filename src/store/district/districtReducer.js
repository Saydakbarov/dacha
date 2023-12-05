import {
  ADD_DISTRICT_BEGIN,
  ADD_DISTRICT_FAIL,
  ADD_DISTRICT_SUCCESS,
  GET_DISTRICT_BEGIN,
  GET_DISTRICT_FAIL,
  GET_DISTRICT_SUCCESS,
  EDIT_DISTRICT_BEGIN,
  EDIT_DISTRICT_FAIL,
  EDIT_DISTRICT_SUCCESS,
  DELET_DISTRICT_BEGIN,
  DELET_DISTRICT_FAIL,
  DELET_DISTRICT_SUCCESS,
  GET_DISTRICT_BEGIN_LANG,
  GET_DISTRICT_SUCCESS_LANG,
  GET_DISTRICT_FAIL_LANG,
  GET_DISTRICT_BY_ID_BEGIN,
  GET_DISTRICT_BY_ID_SUCCESS,
  GET_DISTRICT_BY_ID_FAIL,
  GET_DISTRICT_DATA_BY_ID_BEGIN,
  GET_DISTRICT_DATA_BY_ID_SUCCESS,
  GET_DISTRICT_DATA_BY_ID_FAIL,
} from "./districtAction";

const initialState = {
  beginAddDistrict: false,
  successAddDistrict: false,
  failAddDistrict: false,
  beginGetDistrict: false,
  successGetDistrict: false,
  failGetDistrict: false,
  beginEditDistrict: false,
  successEditDistrict: false,
  failEditDistrict: false,
  beginDeleteDistrict: false,
  successDeleteDistrict: false,
  failDeleteDistrict: false,
  districtData: [],
  getDistrictBylangBegin: false,
  getDistrictByLangSuccess: false,
  getDistrictByLangFail: false,
  getDistrictByLangData: [],
  getDistrictByIdBegin: false,
  getDistrictByIdSuccess: false,
  getDistrictByIdFail: false,
  getDistrictByIdData: [],
  getDistrictDataByIdBegin: false,
  getDistrictDataByIdSuccess: false,
  getDistrictDataByIdFail: false,
  getDistrictDataById: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DISTRICT_BEGIN:
      return {
        ...state,
        beginAddDistrict: true,
      };
    case ADD_DISTRICT_SUCCESS:
      return {
        ...state,
        beginAddDistrict: false,
        successAddDistrict: true,
        failAddDistrict: false,
      };
    case ADD_DISTRICT_FAIL:
      return {
        ...state,
        beginAddDistrict: false,
        successAddDistrict: false,
        failAddDistrict: true,
      };
    case GET_DISTRICT_BEGIN:
      return {
        ...state,
        beginGetDistrict: true,
      };
    case GET_DISTRICT_SUCCESS:
      return {
        ...state,
        beginGetDistrict: false,
        successGetDistrict: true,
        failGetDistrict: false,
        districtData: action.payload,
      };
    case GET_DISTRICT_FAIL:
      return {
        ...state,
        beginGetDistrict: false,
        successGetDistrict: false,
        failGetDistrict: true,
      };
    case EDIT_DISTRICT_BEGIN:
      return {
        ...state,
        beginEditDistrict: true,
      };
    case EDIT_DISTRICT_SUCCESS:
      return {
        ...state,
        beginEditDistrict: false,
        successEditDistrict: true,
        failEditDistrict: false,
      };
    case EDIT_DISTRICT_FAIL:
      return {
        ...state,
        beginEditDistrict: false,
        successEditDistrict: false,
        failEditDistrict: true,
      };
    case DELET_DISTRICT_BEGIN:
      return {
        ...state,
        beginDeleteDistrict: true,
      };
    case DELET_DISTRICT_SUCCESS:
      return {
        ...state,
        beginDeleteDistrict: false,
        successDeleteDistrict: true,
        failDeleteDistrict: false,
        districtData: state.districtData.filter(
          (district) => district.regionId !== action.payload
        ),
      };
    case DELET_DISTRICT_FAIL:
      return {
        ...state,
        beginDeleteDistrict: false,
        successDeleteDistrict: false,
        failDeleteDistrict: true,
      };
    case GET_DISTRICT_BEGIN_LANG:
      return {
        ...state,
        getDistrictBylangBegin: true,
      };
    case GET_DISTRICT_SUCCESS_LANG:
      return {
        ...state,
        getDistrictBylangBegin: false,
        getDistrictByLangSuccess: true,
        getDistrictByLangFail: false,
        getDistrictByLangData: action.payload,
      };
    case GET_DISTRICT_FAIL_LANG:
      return {
        ...state,
        getDistrictBylangBegin: false,
        getDistrictByLangSuccess: false,
        getDistrictByLangFail: true,
      };
    case GET_DISTRICT_BY_ID_BEGIN:
      return {
        ...state,
        getDistrictByIdBegin: true,
      };
    case GET_DISTRICT_BY_ID_SUCCESS:
      return {
        ...state,
        getDistrictByIdBegin: false,
        getDistrictByIdSuccess: true,
        getDistrictByIdFail: false,
        getDistrictByIdData: action.payload,
      };
    case GET_DISTRICT_BY_ID_FAIL:
      return {
        ...state,
        getDistrictByIdBegin: false,
        getDistrictByIdSuccess: false,
        getDistrictByIdFail: true,
      };
    case GET_DISTRICT_DATA_BY_ID_BEGIN:
      return {
        ...state,
        getDistrictDataByIdBegin: true,
      };
    case GET_DISTRICT_DATA_BY_ID_SUCCESS:
      return {
        ...state,
        getDistrictDataByIdBegin: false,
        getDistrictDataByIdSuccess: true,
        getDistrictDataByIdFail: false,
        getDistrictDataById: action.payload,
      };
    case GET_DISTRICT_DATA_BY_ID_FAIL:
      return {
        ...state,
        getDistrictDataByIdBegin: false,
        getDistrictDataByIdSuccess: false,
        getDistrictDataByIdFail: true,
      };
    default:
      return state;
  }
};
