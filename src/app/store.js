import { configureStore } from "@reduxjs/toolkit";
import authReducers from "../features";

export default configureStore({
  reducer: {
    userInformation: authReducers,
  },
});
