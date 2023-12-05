import { combineReducers } from "redux";

//reducers
import headerReducer from "./header/headerReducer";
import authReducer from "./auth/authReducer";
import toggleDrawerReducer from "./toggleDrawer/toggleDrawerReducer";
import addDachaReducer from "./addDacha/addDachaReducer";
import customFormInputReducer from "./customFormInput/customFormInputReducer";
import mapReducer from "./map/mapReducer";
import hotelReducer from "./hotel/hotelReducer";
import regionReducer from "./region/regionReducer";
import districtReducer from "./district/districtReducer";
import paymentInfoReducer from "./paymentInfo/paymentInfoReducer";
import conviniencesReducer from "./convinieces/conviniencesReducer";

export const rootReducer = combineReducers({
  header: headerReducer,
  auth: authReducer,
  drawerJoy: toggleDrawerReducer,
  dacha: addDachaReducer,
  hotel: hotelReducer,
  formInput: customFormInputReducer,
  map: mapReducer,
  region: regionReducer,
  district: districtReducer,
  paymentInfo: paymentInfoReducer,
  cons: conviniencesReducer,
});
