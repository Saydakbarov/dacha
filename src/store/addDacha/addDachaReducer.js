import {
  ADD_DACHA_BEGIN,
  ADD_DACHA_ERROR,
  ADD_DACHA_SUCCESS,
  BEGIN_ALL_DACHA,
  SUCCESS_ALL_DACHA,
  FAIL_ALL_DACHA,
  BEGIN_UNIQUE_DACHA,
  SUCCESS_UNIQUE_DACHA,
  FAIL_UNIQUE_DACHA,
  HANDLE_FORM,
  HANDLE_ADD_DAY_BOOK,
  HANDLE_MINUS_DAY_BOOK,
  HANDLE_PAYMENT_TYPE,
  DELETE_UNIQUE_DACHA_BEGIN,
  DELETE_UNIQUE_DACHA_FAIL,
  DELETE_UNIQUE_DACHA_SUCCESS,
  BEGIN_EDIT_DACHA,
  SUCCESS_EDIT_DACHA,
  FAIL_EDIT_DACHA,
  SELECT_DACHA,
} from "./addDachaAction";

const initialState = {
  beginAddDacha: false,
  successAddDacha: false,
  errorAddDacha: false,
  beginGetAllDacha: false,
  successGetAllDacha: false,
  errorGetAllDacha: false,
  allDachaData: [],
  beginGetUniqueDacha: false,
  successGetUniqueDacha: false,
  errorGetUniqueDacha: false,
  uniqueDachaData: [],
  formValue: {
    photos: [],
    videoLink: "",
    price: 0,
    discountPrice: 0,
    specialPrice: 0,
    gage: "",
    arrivalTime: {},
    leftTime: {},
    region: "",
    district: "",
    street: "",
    apartment: "",
    home: "",
    title: "",
    countRoom: "",
    totalArea: 0,
    livingArea: "",
    singleBad: "",
    doubleBad: "",
    hostCount: "",
    arrivalTime: "",
    leftTime: "",
    maxDayBook: "",
    smoking: false,
    alcohol: false,
    animal: false,
    onlyFamily: false,
    loudlyMusic: false,
    party: false,
    convenienceId: null,
    maxDayBookHours: "",
    expireDate: "",
    serialNumber: "",
    givenPlace: "",
    givenDate: "",
    passportValidDate: "",
    account: "",
    inn: "",
    mfo: "",
    bank: "",
    branch: "",
  },
  maxDayBook: 10,
  radioListCards: "BANK",
  deleteDachaBegin: false,
  deleteDachaSuccess: false,
  deleteDachaFail: false,
  selectedDacha: {},
  beginEditDacha: false,
  successEditDacha: false,
  failEditDacha: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DACHA_BEGIN:
      return {
        ...state,
        beginAddDacha: true,
        errorAddDacha: false,
      };
    case ADD_DACHA_SUCCESS:
      return {
        ...state,
        beginAddDacha: false,
        successAddDacha: true,
      };
    case ADD_DACHA_ERROR:
      return {
        ...state,
        beginAddDacha: false,
        successAddDacha: false,
        errorAddDacha: true,
      };
    case BEGIN_ALL_DACHA:
      return {
        ...state,
        beginGetAllDacha: true,
        errorGetAllDacha: false,
      };
    case SUCCESS_ALL_DACHA:
      return {
        ...state,
        beginGetAllDacha: false,
        successGetAllDacha: true,
        errorGetAllDacha: false,
        allDachaData: action.payload,
      };
    case FAIL_ALL_DACHA:
      return {
        ...state,
        beginGetAllDacha: false,
        errorGetAllDacha: true,
      };
    case BEGIN_UNIQUE_DACHA:
      return {
        ...state,
        beginGetUniqueDacha: true,
        errorGetUniqueDacha: false,
      };
    case SUCCESS_UNIQUE_DACHA:
      return {
        ...state,
        beginGetUniqueDacha: false,
        successGetUniqueDacha: true,
        errorGetUniqueDacha: false,
        uniqueDachaData: action.payload,
      };
    case FAIL_UNIQUE_DACHA:
      return {
        ...state,
        beginGetUniqueDacha: false,
        errorGetUniqueDacha: true,
      };
    case HANDLE_FORM:
      return {
        ...state,
        formValue: action.payload,
      };
    case HANDLE_MINUS_DAY_BOOK:
      return {
        ...state,
        maxDayBook: state.maxDayBook - 1,
      };
    case HANDLE_ADD_DAY_BOOK:
      return {
        ...state,
        maxDayBook: state.maxDayBook + 1,
      };
    case HANDLE_PAYMENT_TYPE:
      return {
        ...state,
        radioListCards: action.payload,
      };
    case DELETE_UNIQUE_DACHA_BEGIN:
      return {
        ...state,
        deleteDachaBegin: true,
      };
    case DELETE_UNIQUE_DACHA_SUCCESS:
      return {
        ...state,
        deleteDahchaBegin: false,
        deleteDachaSuccess: true,
        allDachaData: state.allDachaData.filter(
          (item) => item.id !== action.payload
        ),
      };
    case DELETE_UNIQUE_DACHA_FAIL:
      return {
        ...state,
        deleteDahchaBegin: false,
        deleteDachaSuccess: false,
        deleteDachaFail: true,
      };
    case BEGIN_EDIT_DACHA:
      return {
        ...state,
        beginEditDacha: true,
      };
    case SUCCESS_EDIT_DACHA:
      return {
        ...state,
        beginEditDacha: false,
        successEditDacha: true,
        failEditDacha: false,
      };
    case FAIL_EDIT_DACHA:
      return {
        ...state,
        beginEditDacha: false,
        successEditDacha: false,
        failEditDacha: true,
      };
    case SELECT_DACHA:
      return {
        ...state,
        selectedDacha: action.payload,
      };
    default:
      return state;
  }
};
