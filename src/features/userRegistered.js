import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userRegistered",
  initialState: {
    firstName: null,
    lastName: null,
    email: null,
    firstPassword: null,
    confirmPassword: null,
  },
  reducers: {
    user_info: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.firstPassword = action.payload.firstPassword;
      state.confirmPassword = action.payload.confirmPassword;
    },
  },
});

export const { user_info, user_logged } = userInfoSlice.actions;

export const selectUserEmail = (state) => state.userInformation.data.email;
export const selectUserPassword = (state) =>
  state.userInformation.data.confirmPassword;

export const selectName = (state) => state.userInformation.data.firstName;

export default userInfoSlice.reducer;
