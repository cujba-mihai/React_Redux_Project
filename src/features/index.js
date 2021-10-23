import { combineReducers } from "redux";
import userInfoSlice from "./userRegistered";
import userSlice from "./userSlice";

const authReducers = combineReducers({
  data: userInfoSlice,
  credentials: userSlice,
});

export default authReducers;
